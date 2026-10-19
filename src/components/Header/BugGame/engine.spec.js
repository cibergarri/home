import {
  MAX_DEBT, createGame, step, squash,
} from './engine';

const half = () => 0.5;

describe('bug squash engine', () => {
  it('drops a bug in straight away and moves it down over time', () => {
    const started = step(createGame(), 0.01, half);
    expect(started.bugs).toHaveLength(1);
    const [bug] = started.bugs;

    const later = step(started, 0.5, half);
    expect(later.bugs.find(b => b.id === bug.id).y).toBeGreaterThan(bug.y);
  });

  it('adds technical debt for every bug that reaches production', () => {
    const game = { ...createGame(), nextSpawn: 99, bugs: [{ id: 1, x: 0.5, y: 0.99, speed: 1 }] };
    const next = step(game, 0.1, half);
    expect(next.bugs).toHaveLength(0);
    expect(next.debt).toBe(1);
    expect(next.over).toBe(false);
  });

  it('ends the round when the debt reaches the limit', () => {
    const game = {
      ...createGame(), nextSpawn: 99, debt: MAX_DEBT - 1, bugs: [{ id: 1, x: 0.5, y: 0.99, speed: 1 }],
    };
    const over = step(game, 0.1, half);
    expect(over.over).toBe(true);
    expect(step(over, 1, half)).toBe(over);
  });

  it('scores a squashed bug once, and ignores bugs that are gone', () => {
    const game = { ...createGame(), bugs: [{ id: 7, x: 0.5, y: 0.3, speed: 0.2 }] };
    const squashed = squash(game, 7);
    expect(squashed.fixed).toBe(1);
    expect(squashed.bugs).toHaveLength(0);
    expect(squash(squashed, 7)).toBe(squashed);
  });

  it('speeds up as the round goes on', () => {
    const early = step({ ...createGame(), elapsed: 0 }, 0.01, half).bugs[0].speed;
    const late = step({ ...createGame(), elapsed: 60, nextSpawn: 0 }, 0.01, half).bugs[0].speed;
    expect(late).toBeGreaterThan(early);
  });
});
