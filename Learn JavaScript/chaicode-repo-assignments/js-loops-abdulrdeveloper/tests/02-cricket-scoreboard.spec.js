import { cricketScoreboard } from '../src/02-cricket-scoreboard.js';

describe('02 - Gully Cricket Scoreboard (7 pts)', () => {

  describe('Basic scoring', () => {
    test('Simple over with no wickets', () => {
      expect(cricketScoreboard([1, 2, 4, 0, 6, 3])).toEqual({
        totalRuns: 16, totalBalls: 6, wickets: 0, fours: 1, sixes: 1
      });
    });

    test('All dot balls', () => {
      expect(cricketScoreboard([0, 0, 0, 0])).toEqual({
        totalRuns: 0, totalBalls: 4, wickets: 0, fours: 0, sixes: 0
      });
    });

    test('All sixes', () => {
      expect(cricketScoreboard([6, 6, 6])).toEqual({
        totalRuns: 18, totalBalls: 3, wickets: 0, fours: 0, sixes: 3
      });
    });

    test('Mixed runs with some wickets', () => {
      expect(cricketScoreboard([4, 0, 6, -1, 2, 1])).toEqual({
        totalRuns: 13, totalBalls: 6, wickets: 1, fours: 1, sixes: 1
      });
    });
  });

  describe('All-out scenario (10 wickets)', () => {
    test('Stops at 10 wickets, ignores remaining balls', () => {
      const balls = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 6, 6, 4];
      expect(cricketScoreboard(balls)).toEqual({
        totalRuns: 0, totalBalls: 10, wickets: 10, fours: 0, sixes: 0
      });
    });

    test('Runs scored before all-out', () => {
      const balls = [4, -1, 6, -1, -1, -1, -1, -1, -1, -1, -1, -1, 4, 6];
      expect(cricketScoreboard(balls)).toEqual({
        totalRuns: 10, totalBalls: 12, wickets: 10, fours: 1, sixes: 1
      });
    });
  });

  describe('Edge cases', () => {
    test('Single ball - a wicket', () => {
      expect(cricketScoreboard([-1])).toEqual({
        totalRuns: 0, totalBalls: 1, wickets: 1, fours: 0, sixes: 0
      });
    });

    test('Single ball - a four', () => {
      expect(cricketScoreboard([4])).toEqual({
        totalRuns: 4, totalBalls: 1, wickets: 0, fours: 1, sixes: 0
      });
    });
  });

  describe('Validation', () => {
    test('Empty array returns zeroed object', () => {
      expect(cricketScoreboard([])).toEqual({
        totalRuns: 0, totalBalls: 0, wickets: 0, fours: 0, sixes: 0
      });
    });

    test('Non-array returns zeroed object', () => {
      expect(cricketScoreboard("not an array")).toEqual({
        totalRuns: 0, totalBalls: 0, wickets: 0, fours: 0, sixes: 0
      });
    });

    test('null returns zeroed object', () => {
      expect(cricketScoreboard(null)).toEqual({
        totalRuns: 0, totalBalls: 0, wickets: 0, fours: 0, sixes: 0
      });
    });

    test('undefined returns zeroed object', () => {
      expect(cricketScoreboard(undefined)).toEqual({
        totalRuns: 0, totalBalls: 0, wickets: 0, fours: 0, sixes: 0
      });
    });
  });
});
