import { parseFare, roundFare, calculateSurge, findCheapestAndCostliest, getDistanceDifference } from '../src/03-rickshaw-meter.js';

describe('03 - Auto Rickshaw Fare Calculator: Number & Math (8 pts)', () => {
  describe('parseFare', () => {
    test('parses decimal fare string', () => {
      expect(parseFare('152.50')).toBe(152.5);
    });

    test('parses integer fare string', () => {
      expect(parseFare('100')).toBe(100);
    });

    test('returns -1 for non-numeric string', () => {
      expect(parseFare('abc')).toBe(-1);
    });

    test('returns -1 for empty string', () => {
      expect(parseFare('')).toBe(-1);
    });

    test('returns -1 for non-string input', () => {
      expect(parseFare(123)).toBe(-1);
      expect(parseFare(null)).toBe(-1);
      expect(parseFare(undefined)).toBe(-1);
    });
  });

  describe('roundFare', () => {
    test('rounds to 2 decimal places', () => {
      expect(roundFare(152.567, 2)).toBe('152.57');
    });

    test('rounds to 0 decimal places', () => {
      expect(roundFare(152.567, 0)).toBe('153');
    });

    test('rounds to 1 decimal place', () => {
      expect(roundFare(99.95, 1)).toBe('100.0');
    });

    test('adds trailing zeros', () => {
      expect(roundFare(100, 2)).toBe('100.00');
    });

    test('returns "" for non-number amount', () => {
      expect(roundFare('abc', 2)).toBe('');
    });

    test('returns "" for negative decimalPlaces', () => {
      expect(roundFare(100, -1)).toBe('');
    });

    test('returns "" for non-integer decimalPlaces', () => {
      expect(roundFare(100, 1.5)).toBe('');
    });
  });

  describe('calculateSurge', () => {
    test('calculates surge with no rounding needed', () => {
      expect(calculateSurge(100, 1.5)).toBe(150);
    });

    test('rounds up using Math.ceil', () => {
      expect(calculateSurge(73, 1.8)).toBe(132);
    });

    test('ceil rounds 131.4 to 132', () => {
      expect(calculateSurge(73, 1.8)).toBe(132);
    });

    test('returns 0 for non-positive baseFare', () => {
      expect(calculateSurge(-100, 1.5)).toBe(0);
      expect(calculateSurge(0, 1.5)).toBe(0);
    });

    test('returns 0 for non-positive multiplier', () => {
      expect(calculateSurge(100, 0)).toBe(0);
      expect(calculateSurge(100, -1)).toBe(0);
    });

    test('returns 0 for non-number inputs', () => {
      expect(calculateSurge('100', 1.5)).toBe(0);
      expect(calculateSurge(100, '1.5')).toBe(0);
    });
  });

  describe('findCheapestAndCostliest', () => {
    test('finds min and max from multiple fares', () => {
      expect(findCheapestAndCostliest(150, 80, 200, 120)).toEqual({ cheapest: 80, costliest: 200 });
    });

    test('works with two fares', () => {
      expect(findCheapestAndCostliest(50, 300)).toEqual({ cheapest: 50, costliest: 300 });
    });

    test('works when cheapest and costliest are same', () => {
      expect(findCheapestAndCostliest(100)).toEqual({ cheapest: 100, costliest: 100 });
    });

    test('filters out non-number values', () => {
      expect(findCheapestAndCostliest(100, 'abc', null, 200)).toEqual({ cheapest: 100, costliest: 200 });
    });

    test('returns null when no valid numbers', () => {
      expect(findCheapestAndCostliest('abc', null, undefined)).toBeNull();
    });

    test('returns null when called with no arguments', () => {
      expect(findCheapestAndCostliest()).toBeNull();
    });
  });

  describe('getDistanceDifference', () => {
    test('calculates difference between numbers', () => {
      expect(getDistanceDifference(5, 12)).toBe(7);
    });

    test('calculates difference between string numbers', () => {
      expect(getDistanceDifference('15', '8')).toBe(7);
    });

    test('returns absolute difference (order doesnt matter)', () => {
      expect(getDistanceDifference(3, 10)).toBe(7);
      expect(getDistanceDifference(10, 3)).toBe(7);
    });

    test('returns 0 for same values', () => {
      expect(getDistanceDifference(5, 5)).toBe(0);
    });

    test('returns -1 for non-parseable input', () => {
      expect(getDistanceDifference('abc', 5)).toBe(-1);
      expect(getDistanceDifference(5, 'xyz')).toBe(-1);
    });
  });
});
