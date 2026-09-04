import { getDataType, isValidParcelWeight, isWholeNumber, isNotANumber, isTruthy } from '../src/10-pincode-checker.js';

describe('10 - Pincode Type Checker: Type Checking (9 pts)', () => {
  describe('getDataType', () => {
    test('returns "number" for numbers', () => {
      expect(getDataType(42)).toBe('number');
      expect(getDataType(3.14)).toBe('number');
      expect(getDataType(NaN)).toBe('number');
    });

    test('returns "string" for strings', () => {
      expect(getDataType('hello')).toBe('string');
      expect(getDataType('')).toBe('string');
    });

    test('returns "boolean" for booleans', () => {
      expect(getDataType(true)).toBe('boolean');
      expect(getDataType(false)).toBe('boolean');
    });

    test('returns "null" for null (not "object"!)', () => {
      expect(getDataType(null)).toBe('null');
    });

    test('returns "undefined" for undefined', () => {
      expect(getDataType(undefined)).toBe('undefined');
    });

    test('returns "array" for arrays (not "object"!)', () => {
      expect(getDataType([1, 2, 3])).toBe('array');
      expect(getDataType([])).toBe('array');
    });

    test('returns "object" for plain objects', () => {
      expect(getDataType({ a: 1 })).toBe('object');
      expect(getDataType({})).toBe('object');
    });

    test('returns "function" for functions', () => {
      expect(getDataType(() => {})).toBe('function');
    });
  });

  describe('isValidParcelWeight', () => {
    test('returns true for positive numbers', () => {
      expect(isValidParcelWeight(2.5)).toBe(true);
      expect(isValidParcelWeight(100)).toBe(true);
    });

    test('returns false for zero', () => {
      expect(isValidParcelWeight(0)).toBe(false);
    });

    test('returns false for negative numbers', () => {
      expect(isValidParcelWeight(-5)).toBe(false);
    });

    test('returns false for Infinity', () => {
      expect(isValidParcelWeight(Infinity)).toBe(false);
      expect(isValidParcelWeight(-Infinity)).toBe(false);
    });

    test('returns false for NaN', () => {
      expect(isValidParcelWeight(NaN)).toBe(false);
    });

    test('returns false for string numbers', () => {
      expect(isValidParcelWeight('5')).toBe(false);
    });

    test('returns false for null/undefined', () => {
      expect(isValidParcelWeight(null)).toBe(false);
      expect(isValidParcelWeight(undefined)).toBe(false);
    });
  });

  describe('isWholeNumber', () => {
    test('returns true for integers', () => {
      expect(isWholeNumber(42)).toBe(true);
      expect(isWholeNumber(0)).toBe(true);
      expect(isWholeNumber(-7)).toBe(true);
    });

    test('returns false for floats', () => {
      expect(isWholeNumber(42.5)).toBe(false);
      expect(isWholeNumber(0.1)).toBe(false);
    });

    test('returns false for string numbers', () => {
      expect(isWholeNumber('42')).toBe(false);
    });

    test('returns false for NaN', () => {
      expect(isWholeNumber(NaN)).toBe(false);
    });

    test('returns false for Infinity', () => {
      expect(isWholeNumber(Infinity)).toBe(false);
    });
  });

  describe('isNotANumber', () => {
    test('returns true for NaN', () => {
      expect(isNotANumber(NaN)).toBe(true);
    });

    test('returns false for regular numbers', () => {
      expect(isNotANumber(42)).toBe(false);
      expect(isNotANumber(0)).toBe(false);
    });

    test('returns false for strings (Number.isNaN, not global isNaN)', () => {
      expect(isNotANumber('hello')).toBe(false);
    });

    test('returns false for undefined', () => {
      expect(isNotANumber(undefined)).toBe(false);
    });

    test('returns false for null', () => {
      expect(isNotANumber(null)).toBe(false);
    });
  });

  describe('isTruthy', () => {
    test('returns true for truthy values', () => {
      expect(isTruthy('hello')).toBe(true);
      expect(isTruthy(42)).toBe(true);
      expect(isTruthy(true)).toBe(true);
      expect(isTruthy([])).toBe(true);
      expect(isTruthy({})).toBe(true);
      expect(isTruthy('0')).toBe(true);
    });

    test('returns false for falsy values', () => {
      expect(isTruthy(false)).toBe(false);
      expect(isTruthy(0)).toBe(false);
      expect(isTruthy('')).toBe(false);
      expect(isTruthy(null)).toBe(false);
      expect(isTruthy(undefined)).toBe(false);
      expect(isTruthy(NaN)).toBe(false);
    });
  });
});
