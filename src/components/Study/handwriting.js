// Reading a number, or a letter, written by hand. The writing comes as strokes, lists of [x, y]
// points; a number is split into digits. Each digit or letter is drawn small and centred as in the
// collection of handwriting its network was trained on, and read by that small neural network
// (public/julia/handwriting): digits from MNIST, lowercase and capital letters from EMNIST.

const SIZE = 28;

// How each collection draws its characters in the 28 × 28 picture: the longer side (`box`) and half
// the width of the line (`pen`) in its pixels, and whether centred by centre of mass or by the box.
export const MODELS = {
  digits: {
    src: '/julia/handwriting/digits.json', labels: '0123456789', box: 20, pen: 1.15, byMass: true,
  },
  letters: {
    src: '/julia/handwriting/letters.json', labels: 'abcdefghijklmnopqrstuvwxyz', box: 24, pen: 1.6, byMass: false,
  },
};

const boundsOf = (strokes) => {
  const points = strokes.flat();
  const xs = points.map(([x]) => x);
  const ys = points.map(([, y]) => y);
  return {
    left: Math.min(...xs), right: Math.max(...xs), top: Math.min(...ys), bottom: Math.max(...ys),
  };
};

// The strokes of each digit, from left to right. A stroke joins the digit before it when it mostly
// overlaps it from side to side (the bar of a 4 or a 7), or when it is a thin stroke that touches it
// (the flag and the line of a 1); a gap starts the next digit.
export const splitDigits = (strokes) => {
  const drawn = strokes.filter(stroke => stroke.length > 0);
  if (drawn.length === 0) return [];
  const { top, bottom } = boundsOf(drawn);
  const height = Math.max(bottom - top, 1);
  const touching = height * 0.1;
  const thin = height * 0.3;
  const digits = [];
  drawn
    .map(stroke => ({ stroke, ...boundsOf([stroke]) }))
    .sort((a, b) => a.left - b.left)
    .forEach((item) => {
      const last = digits.at(-1);
      const overlap = last ? Math.min(last.right, item.right) - item.left : -Infinity;
      const narrower = last ? Math.min(last.right - last.left, item.right - item.left) : 0;
      const joins = last && (
        (overlap > 0 && overlap >= narrower * 0.5)
        || (overlap > -touching && narrower < thin)
      );
      if (joins) {
        last.strokes.push(item.stroke);
        last.right = Math.max(last.right, item.right);
      } else {
        digits.push({ strokes: [item.stroke], left: item.left, right: item.right });
      }
    });
  return digits.map(digit => digit.strokes);
};

const distanceToSegment = (px, py, [ax, ay], [bx, by]) => {
  const dx = bx - ax;
  const dy = by - ay;
  const length = dx * dx + dy * dy;
  const t = length === 0 ? 0 : Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / length));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
};

const draw = (segments, shiftX, shiftY, pen) => {
  const pixels = new Float32Array(SIZE * SIZE);
  for (let y = 0; y < SIZE; y += 1) {
    for (let x = 0; x < SIZE; x += 1) {
      let nearest = Infinity;
      segments.forEach(([a, b]) => {
        nearest = Math.min(nearest, distanceToSegment(x + 0.5 - shiftX, y + 0.5 - shiftY, a, b));
      });
      pixels[y * SIZE + x] = Math.max(0, Math.min(1, pen + 0.5 - nearest));
    }
  }
  return pixels;
};

// One character as a 28 × 28 picture, white on black from 0 to 1: as MNIST has them, fitted into a
// 20 × 20 box and then moved so that its centre of mass is in the middle, or as `model` says.
export const toPixels = (strokes, { box, pen, byMass } = MODELS.digits) => {
  const { left, right, top, bottom } = boundsOf(strokes);
  const scale = box / Math.max(right - left, bottom - top, 1);
  const segments = strokes.flatMap((stroke) => {
    const points = stroke.map(([x, y]) => [(x - left) * scale, (y - top) * scale]);
    if (points.length === 1) return [[points[0], points[0]]];
    return points.slice(1).map((point, i) => [points[i], point]);
  });
  const first = draw(segments, (SIZE - (right - left) * scale) / 2, (SIZE - (bottom - top) * scale) / 2, pen);
  if (!byMass) return first;
  let mass = 0;
  let sumX = 0;
  let sumY = 0;
  first.forEach((value, i) => {
    mass += value;
    sumX += value * ((i % SIZE) + 0.5);
    sumY += value * (Math.floor(i / SIZE) + 0.5);
  });
  if (mass === 0) return first;
  const shiftX = (SIZE - (right - left) * scale) / 2 + SIZE / 2 - sumX / mass;
  const shiftY = (SIZE - (bottom - top) * scale) / 2 + SIZE / 2 - sumY / mass;
  return draw(segments, shiftX, shiftY, pen);
};

// The network: two 5 × 5 convolutions, each followed by ReLU and 2 × 2 max pooling, and two dense
// layers, with its weights in PyTorch's order.
const convolve = (input, channels, size, { w, b }) => {
  const out = b.length;
  const result = new Float32Array(out * size * size);
  for (let o = 0; o < out; o += 1) {
    for (let y = 0; y < size; y += 1) {
      for (let x = 0; x < size; x += 1) {
        let sum = b[o];
        for (let c = 0; c < channels; c += 1) {
          for (let ky = 0; ky < 5; ky += 1) {
            const iy = y + ky - 2;
            if (iy >= 0 && iy < size) {
              for (let kx = 0; kx < 5; kx += 1) {
                const ix = x + kx - 2;
                if (ix >= 0 && ix < size) sum += input[(c * size + iy) * size + ix] * w[((o * channels + c) * 5 + ky) * 5 + kx];
              }
            }
          }
        }
        result[(o * size + y) * size + x] = Math.max(0, sum);
      }
    }
  }
  return result;
};

const pool = (input, channels, size) => {
  const half = size / 2;
  const result = new Float32Array(channels * half * half);
  for (let c = 0; c < channels; c += 1) {
    for (let y = 0; y < half; y += 1) {
      for (let x = 0; x < half; x += 1) {
        const at = (dy, dx) => input[(c * size + 2 * y + dy) * size + 2 * x + dx];
        result[(c * half + y) * half + x] = Math.max(at(0, 0), at(0, 1), at(1, 0), at(1, 1));
      }
    }
  }
  return result;
};

const dense = (input, { w, b }, relu) => b.map((bias, o) => {
  let sum = bias;
  for (let i = 0; i < input.length; i += 1) sum += input[i] * w[o * input.length + i];
  return relu ? Math.max(0, sum) : sum;
});

// How likely each character the network knows is, in the order of its labels.
export const classify = (net, pixels) => {
  const first = pool(convolve(pixels, 1, SIZE, net.c1), net.c1.b.length, SIZE);
  const second = pool(convolve(first, net.c1.b.length, SIZE / 2, net.c2), net.c2.b.length, SIZE / 2);
  const scores = dense(dense(second, net.f1, true), net.f2, false);
  const top = Math.max(...scores);
  const exps = scores.map(score => Math.exp(score - top));
  const total = exps.reduce((a, b) => a + b, 0);
  return exps.map(e => e / total);
};

// The weights are kept as signed bytes, each layer's with a scale, to keep the file small.
export const unpack = (packed) => {
  const layer = ({ w, ws, b }) => {
    const bytes = Uint8Array.from(atob(w), c => c.charCodeAt(0));
    return { w: Float32Array.from(new Int8Array(bytes.buffer), v => v * ws), b };
  };
  return {
    c1: layer(packed.c1), c2: layer(packed.c2), f1: layer(packed.f1), f2: layer(packed.f2),
  };
};

const readOne = (net, strokes, model) => {
  const chances = classify(net, toPixels(strokes, model));
  const best = chances.indexOf(Math.max(...chances));
  return { text: model.labels[best], chance: chances[best] };
};

// The number written, as a string of digits, and how sure the reading is of its least sure digit.
export const readNumber = (net, strokes) => {
  const read = splitDigits(strokes).map(digit => readOne(net, digit, MODELS.digits));
  return {
    text: read.map(({ text }) => text).join(''),
    chance: read.length ? Math.min(...read.map(({ chance }) => chance)) : 0,
  };
};

// The letter written, all its strokes together, in lowercase.
export const readLetter = (net, strokes) => readOne(net, strokes, MODELS.letters);

const loading = {};

// A network, fetched the first time it is needed.
export const loadNet = (kind = 'digits') => {
  loading[kind] ??= fetch(MODELS[kind].src)
    .then((response) => {
      if (!response.ok) throw new Error(`No handwriting network at ${MODELS[kind].src}`);
      return response.json();
    })
    .then(unpack)
    .catch((error) => {
      delete loading[kind];
      throw error;
    });
  return loading[kind];
};
