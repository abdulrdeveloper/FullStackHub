import {
  calcStrikeRate,
  calcEconomy,
  calcBattingAvg,
  isAllRounder,
  getPlayerCard,
} from '../src/02-cricket-stats.js';

describe('02 - Cricket Stats Dashboard (7 pts)', () => {
  describe('calcStrikeRate', () => {
    test('(45, 30) => 150', () => {
      expect(calcStrikeRate(45, 30)).toBe(150);
    });

    test('(100, 60) => 166.67', () => {
      expect(calcStrikeRate(100, 60)).toBe(166.67);
    });

    test('balls = 0 returns 0', () => {
      expect(calcStrikeRate(50, 0)).toBe(0);
    });

    test('balls < 0 returns 0', () => {
      expect(calcStrikeRate(50, -5)).toBe(0);
    });

    test('runs < 0 returns 0', () => {
      expect(calcStrikeRate(-10, 30)).toBe(0);
    });
  });

  describe('calcEconomy', () => {
    test('(24, 4) => 6', () => {
      expect(calcEconomy(24, 4)).toBe(6);
    });

    test('(36, 4) => 9', () => {
      expect(calcEconomy(36, 4)).toBe(9);
    });

    test('overs = 0 returns 0', () => {
      expect(calcEconomy(30, 0)).toBe(0);
    });

    test('overs < 0 returns 0', () => {
      expect(calcEconomy(30, -2)).toBe(0);
    });

    test('runsConceded < 0 returns 0', () => {
      expect(calcEconomy(-10, 4)).toBe(0);
    });
  });

  describe('calcBattingAvg', () => {
    test('(2000, 80, 10) => 28.57', () => {
      expect(calcBattingAvg(2000, 80, 10)).toBe(28.57);
    });

    test('default notOuts is 0: (1500, 50) => 30', () => {
      expect(calcBattingAvg(1500, 50)).toBe(30);
    });

    test('innings equal to notOuts returns 0', () => {
      expect(calcBattingAvg(500, 10, 10)).toBe(0);
    });

    test('innings less than notOuts returns 0', () => {
      expect(calcBattingAvg(500, 5, 10)).toBe(0);
    });
  });

  describe('isAllRounder', () => {
    test('(35, 7) => true (avg > 30 and eco < 8)', () => {
      expect(isAllRounder(35, 7)).toBe(true);
    });

    test('(25, 7) => false (avg too low)', () => {
      expect(isAllRounder(25, 7)).toBe(false);
    });

    test('(35, 9) => false (economy too high)', () => {
      expect(isAllRounder(35, 9)).toBe(false);
    });

    test('(30, 8) => false (boundary values not included)', () => {
      expect(isAllRounder(30, 8)).toBe(false);
    });
  });

  describe('getPlayerCard', () => {
    test('returns summary object with all stats', () => {
      const player = {
        name: 'Jadeja',
        runs: 35,
        balls: 20,
        totalRuns: 2000,
        innings: 80,
        notOuts: 10,
        runsConceded: 1500,
        overs: 200,
      };
      const card = getPlayerCard(player);
      expect(card).toEqual({
        name: 'Jadeja',
        strikeRate: 175,
        economy: 7.5,
        battingAvg: 28.57,
        isAllRounder: false,
      });
    });

    test('null player returns null', () => {
      expect(getPlayerCard(null)).toBeNull();
    });

    test('undefined player returns null', () => {
      expect(getPlayerCard(undefined)).toBeNull();
    });

    test('player missing name returns null', () => {
      expect(getPlayerCard({ runs: 10, balls: 5 })).toBeNull();
    });
  });

  describe('Exports are arrow functions', () => {
    test('calcStrikeRate is a function', () => {
      expect(typeof calcStrikeRate).toBe('function');
    });

    test('calcEconomy is a function', () => {
      expect(typeof calcEconomy).toBe('function');
    });

    test('calcBattingAvg is a function', () => {
      expect(typeof calcBattingAvg).toBe('function');
    });

    test('isAllRounder is a function', () => {
      expect(typeof isAllRounder).toBe('function');
    });

    test('getPlayerCard is a function', () => {
      expect(typeof getPlayerCard).toBe('function');
    });
  });
});
