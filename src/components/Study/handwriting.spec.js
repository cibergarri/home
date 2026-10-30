import fs from 'fs';
import path from 'path';

import {
  splitDigits, toPixels, classify, unpack, readNumber, readLetter,
} from './handwriting';

const load = name => unpack(JSON.parse(fs.readFileSync(path.join(process.cwd(), `public/julia/handwriting/${name}.json`), 'utf8')));
const net = load('digits');
const letterNet = load('letters');
const readsSamples = (network, file) => {
  const samples = JSON.parse(fs.readFileSync(path.join(__dirname, file), 'utf8'));
  const right = samples.filter(({ pixels, label }) => {
    const chances = classify(network, Float32Array.from(Buffer.from(pixels, 'base64'), v => v / 255));
    return chances.indexOf(Math.max(...chances)) === label;
  });
  return right.length / samples.length;
};

// Digits drawn as a child might, in a 60 × 100 box starting at `x`, a point every few pixels.
const line = (from, to, steps = 12) => Array.from({ length: steps + 1 }, (_, i) => [
  from[0] + ((to[0] - from[0]) * i) / steps,
  from[1] + ((to[1] - from[1]) * i) / steps,
]);
const arc = (cx, cy, rx, ry, from, to, steps = 24) => Array.from({ length: steps + 1 }, (_, i) => {
  const angle = from + ((to - from) * i) / steps;
  return [cx + rx * Math.cos(angle), cy + ry * Math.sin(angle)];
});
const DIGITS = {
  0: x => [arc(x + 30, 50, 28, 48, 0, 2 * Math.PI)],
  1: x => [line([x + 18, 22], [x + 34, 2]), line([x + 34, 2], [x + 34, 100])],
  2: x => [[...arc(x + 30, 28, 26, 26, Math.PI, 2.2 * Math.PI), ...line([x + 48, 46], [x + 2, 100]), ...line([x + 2, 100], [x + 60, 100])]],
  3: x => [[...arc(x + 28, 25, 26, 24, 1.1 * Math.PI, 2.5 * Math.PI), ...arc(x + 28, 75, 28, 25, 1.5 * Math.PI, 2.9 * Math.PI)]],
  4: x => [[...line([x + 40, 0], [x, 66]), ...line([x, 66], [x + 60, 66])], line([x + 44, 30], [x + 44, 100])],
  7: x => [[...line([x, 2], [x + 60, 2]), ...line([x + 60, 2], [x + 18, 100])]],
};
const write = (...digits) => digits.flatMap((digit, i) => DIGITS[digit](i * 90));

// Lowercase letters, the x-height from 50 to 100: the ones the numbers from 1 to 20 are missing.
const LETTERS = {
  o: [arc(28, 75, 24, 25, 0, 2 * Math.PI)],
  e: [[...line([6, 76], [52, 76]), ...arc(29, 75, 24, 25, 0, -1.75 * Math.PI)]],
  n: [[...line([6, 50], [6, 100]), ...line([6, 100], [6, 68]), ...arc(28, 70, 22, 20, Math.PI, 2 * Math.PI), ...line([50, 70], [50, 100])]],
  i: [line([20, 50], [20, 100]), [[20, 32], [21, 33]]],
  r: [[...line([6, 50], [6, 100]), ...line([6, 100], [6, 70]), ...arc(26, 70, 20, 18, Math.PI, 1.75 * Math.PI)]],
  t: [[...line([22, 12], [22, 90]), ...arc(32, 90, 10, 10, Math.PI, 0.5 * Math.PI)], line([6, 50], [42, 50])],
  w: [[...line([0, 50], [12, 100]), ...line([12, 100], [25, 62]), ...line([25, 62], [38, 100]), ...line([38, 100], [50, 50])]],
  y: [line([4, 50], [30, 100]), line([56, 50], [16, 150])],
  g: [arc(28, 75, 22, 25, 0, 2 * Math.PI), [...line([50, 50], [50, 130]), ...arc(30, 130, 20, 18, 0, Math.PI)]],
  f: [[...arc(40, 22, 14, 14, -0.1 * Math.PI, -Math.PI), ...line([26, 22], [26, 100])], line([10, 52], [44, 52])],
};

describe('handwriting', () => {
  it('splits a number into its digits, keeping the strokes of one digit together', () => {
    expect(splitDigits(write(4, 1))).toHaveLength(2);
    expect(splitDigits(write(4))).toHaveLength(1);
    expect(splitDigits(write(1, 7, 3))).toHaveLength(3);
  });

  it('draws a digit as MNIST has them: within 20 pixels, centred, white on black', () => {
    const pixels = toPixels(write(0));
    expect(pixels).toHaveLength(784);
    expect(Math.max(...pixels)).toBe(1);
    const lit = [...pixels.keys()].filter(i => pixels[i] > 0.5);
    const rows = lit.map(i => Math.floor(i / 28));
    expect(Math.min(...rows)).toBeGreaterThanOrEqual(2);
    expect(Math.max(...rows)).toBeLessThanOrEqual(25);
  });

  it('reads MNIST test digits as well in JavaScript as it did when it was trained', () => {
    expect(readsSamples(net, 'handwriting.samples.json')).toBeGreaterThan(0.97);
  });

  // EMNIST letters are harder (g and q, l and i look alike): 68 of these 78 in training too.
  it('reads EMNIST test letters as well in JavaScript as it did when it was trained', () => {
    expect(readsSamples(letterNet, 'handwriting.letters.json')).toBeGreaterThan(0.85);
  });

  it('reads lowercase letters written with strokes', () => {
    Object.entries(LETTERS).forEach(([letter, strokes]) => {
      expect(readLetter(letterNet, strokes).text).toBe(letter);
    });
  });

  it('reads numbers written with strokes', () => {
    [[1], [2], [3], [4], [7], [0], [4, 1], [7, 0], [2, 3]].forEach((digits) => {
      expect(readNumber(net, write(...digits)).text).toBe(digits.join(''));
    });
  });
});
