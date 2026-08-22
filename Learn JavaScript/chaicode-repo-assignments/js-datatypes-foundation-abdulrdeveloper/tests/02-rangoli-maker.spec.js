import { repeatPattern, extractRangoliCenter, splitAndJoinRangoli, replaceRangoliColor, makeRangoliBorder } from '../src/02-rangoli-maker.js';

describe('02 - Rangoli Border Maker: String Transform (7 pts)', () => {
  describe('repeatPattern', () => {
    test('repeats pattern given number of times', () => {
      expect(repeatPattern('*-', 4)).toBe('*-*-*-*-');
    });

    test('repeats single char', () => {
      expect(repeatPattern('*', 5)).toBe('*****');
    });

    test('returns "" for zero times', () => {
      expect(repeatPattern('*', 0)).toBe('');
    });

    test('returns "" for negative times', () => {
      expect(repeatPattern('*', -3)).toBe('');
    });

    test('returns "" for non-string pattern', () => {
      expect(repeatPattern(123, 3)).toBe('');
    });

    test('returns "" for non-integer times', () => {
      expect(repeatPattern('*', 2.5)).toBe('');
    });
  });

  describe('extractRangoliCenter', () => {
    test('extracts center portion using slice', () => {
      expect(extractRangoliCenter('***LOTUS***', 3, 8)).toBe('LOTUS');
    });

    test('extracts from beginning', () => {
      expect(extractRangoliCenter('HELLO world', 0, 5)).toBe('HELLO');
    });

    test('returns "" for non-string design', () => {
      expect(extractRangoliCenter(12345, 1, 3)).toBe('');
    });

    test('returns "" if start or end not numbers', () => {
      expect(extractRangoliCenter('hello', 'a', 'b')).toBe('');
    });
  });

  describe('splitAndJoinRangoli', () => {
    test('changes separator between colors', () => {
      expect(splitAndJoinRangoli('red,blue,green', ',', ' | ')).toBe('red | blue | green');
    });

    test('changes comma to dash', () => {
      expect(splitAndJoinRangoli('red,blue', ',', '-')).toBe('red-blue');
    });

    test('changes space to comma', () => {
      expect(splitAndJoinRangoli('red blue green', ' ', ',')).toBe('red,blue,green');
    });

    test('returns "" for non-string colorString', () => {
      expect(splitAndJoinRangoli(123, ',', '-')).toBe('');
    });
  });

  describe('replaceRangoliColor', () => {
    test('replaces all occurrences of a color', () => {
      expect(replaceRangoliColor('red-blue-red-green-red', 'red', 'pink')).toBe('pink-blue-pink-green-pink');
    });

    test('replaces when only one occurrence', () => {
      expect(replaceRangoliColor('red-blue-green', 'blue', 'yellow')).toBe('red-yellow-green');
    });

    test('no change when color not found', () => {
      expect(replaceRangoliColor('red-blue', 'pink', 'white')).toBe('red-blue');
    });

    test('returns "" for non-string params', () => {
      expect(replaceRangoliColor(123, 'a', 'b')).toBe('');
      expect(replaceRangoliColor('hello', 123, 'b')).toBe('');
      expect(replaceRangoliColor('hello', 'a', 123)).toBe('');
    });
  });

  describe('makeRangoliBorder', () => {
    test('creates border of exact length with single char', () => {
      expect(makeRangoliBorder('*', 5)).toBe('*****');
    });

    test('creates border of exact length with multi-char pattern', () => {
      expect(makeRangoliBorder('=-', 7)).toBe('=-=-=-=');
    });

    test('creates border when length equals pattern length', () => {
      expect(makeRangoliBorder('abc', 3)).toBe('abc');
    });

    test('returns "" for non-string char', () => {
      expect(makeRangoliBorder(123, 5)).toBe('');
    });

    test('returns "" for non-positive length', () => {
      expect(makeRangoliBorder('*', 0)).toBe('');
      expect(makeRangoliBorder('*', -3)).toBe('');
    });

    test('returns "" for non-number length', () => {
      expect(makeRangoliBorder('*', 'abc')).toBe('');
    });
  });
});
