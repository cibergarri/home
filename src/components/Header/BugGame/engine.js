// The rules of the bug squash game, kept apart from the drawing so they can be tested.
// Positions are fractions of the playing field: x across, y down, 1 being the production line.

export const MAX_DEBT = 5;

// Bugs fall faster and come more often the longer a round lasts.
const speedAt = (elapsed) => 0.16 + elapsed * 0.006; // field heights per second
const spawnGapAt = (elapsed) => Math.max(0.35, 1.1 - elapsed * 0.02); // seconds

export const createGame = () => ({
  bugs: [],
  fixed: 0,
  debt: 0,
  elapsed: 0,
  nextSpawn: 0,
  nextId: 1,
  over: false,
});

// Moves the game on by dt seconds: bugs fall, the ones that reach production add debt,
// and a new bug drops in when it is due.
export function step(game, dt, random = Math.random) {
  if (game.over) return game;
  const elapsed = game.elapsed + dt;
  let { debt, nextSpawn, nextId } = game;
  const bugs = [];
  game.bugs.forEach((bug) => {
    const y = bug.y + bug.speed * dt;
    if (y >= 1) {
      debt += 1;
    } else {
      bugs.push({ ...bug, y });
    }
  });
  if (elapsed >= nextSpawn) {
    bugs.push({
      id: nextId,
      x: 0.08 + random() * 0.84,
      y: 0,
      speed: speedAt(elapsed) * (0.8 + random() * 0.4),
    });
    nextId += 1;
    nextSpawn = elapsed + spawnGapAt(elapsed);
  }
  return {
    ...game, bugs, debt, elapsed, nextSpawn, nextId, over: debt >= MAX_DEBT,
  };
}

export function squash(game, id) {
  if (game.over || !game.bugs.some(bug => bug.id === id)) return game;
  return { ...game, bugs: game.bugs.filter(bug => bug.id !== id), fixed: game.fixed + 1 };
}
