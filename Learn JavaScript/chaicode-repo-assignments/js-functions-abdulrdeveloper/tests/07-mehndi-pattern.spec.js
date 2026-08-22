import { repeatChar, sumNestedArray, flattenArray, isPalindrome, generatePattern } from '../src/07-mehndi-pattern.js';

describe('07 - Mehndi Pattern Maker: Recursion (9 pts)', () => {
  describe('repeatChar', () => {
    test('repeats "*" 4 times to produce "****"', () => {
      expect(repeatChar('*', 4)).toBe('****');
    });

    test('repeats "a" 0 times to produce ""', () => {
      expect(repeatChar('a', 0)).toBe('');
    });

    test('repeats "ab" 3 times to produce "ababab"', () => {
      expect(repeatChar('ab', 3)).toBe('ababab');
    });

    test('returns "" when char is not a string', () => {
      expect(repeatChar(123, 4)).toBe('');
      expect(repeatChar(null, 3)).toBe('');
      expect(repeatChar(undefined, 2)).toBe('');
    });

    test('returns "" when n is negative', () => {
      expect(repeatChar('*', -1)).toBe('');
    });
  });

  describe('sumNestedArray', () => {
    test('sums [1, [2, [3, 4]], 5] to 15', () => {
      expect(sumNestedArray([1, [2, [3, 4]], 5])).toBe(15);
    });

    test('returns 0 for empty array', () => {
      expect(sumNestedArray([])).toBe(0);
    });

    test('skips non-number values: [1, "two", [3]] => 4', () => {
      expect(sumNestedArray([1, 'two', [3]])).toBe(4);
    });

    test('returns 0 when input is not an array', () => {
      expect(sumNestedArray('hello')).toBe(0);
      expect(sumNestedArray(42)).toBe(0);
      expect(sumNestedArray(null)).toBe(0);
      expect(sumNestedArray(undefined)).toBe(0);
    });

    test('handles deeply nested arrays', () => {
      expect(sumNestedArray([[[[[10]]]]])).toBe(10);
    });
  });

  describe('flattenArray', () => {
    test('flattens [1, [2, [3, 4]], 5] to [1, 2, 3, 4, 5]', () => {
      expect(flattenArray([1, [2, [3, 4]], 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('returns [] for empty array', () => {
      expect(flattenArray([])).toEqual([]);
    });

    test('returns [] when input is not an array', () => {
      expect(flattenArray('hello')).toEqual([]);
      expect(flattenArray(42)).toEqual([]);
      expect(flattenArray(null)).toEqual([]);
    });

    test('handles already flat arrays', () => {
      expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('handles deeply nested arrays', () => {
      expect(flattenArray([[[['a']]]])).toEqual(['a']);
    });
  });

  describe('isPalindrome', () => {
    test('"madam" is a palindrome', () => {
      expect(isPalindrome('madam')).toBe(true);
    });

    test('"racecar" is a palindrome', () => {
      expect(isPalindrome('racecar')).toBe(true);
    });

    test('"Madam" is a palindrome (case insensitive)', () => {
      expect(isPalindrome('Madam')).toBe(true);
    });

    test('"hello" is not a palindrome', () => {
      expect(isPalindrome('hello')).toBe(false);
    });

    test('empty string is a palindrome', () => {
      expect(isPalindrome('')).toBe(true);
    });

    test('returns false for non-string input', () => {
      expect(isPalindrome(123)).toBe(false);
      expect(isPalindrome(null)).toBe(false);
      expect(isPalindrome(undefined)).toBe(false);
    });

    test('single character is a palindrome', () => {
      expect(isPalindrome('a')).toBe(true);
    });
  });

  describe('generatePattern', () => {
    test('n=1 produces ["*"]', () => {
      expect(generatePattern(1)).toEqual(['*']);
    });

    test('n=2 produces ["*", "**", "*"]', () => {
      expect(generatePattern(2)).toEqual(['*', '**', '*']);
    });

    test('n=3 produces ["*", "**", "***", "**", "*"]', () => {
      expect(generatePattern(3)).toEqual(['*', '**', '***', '**', '*']);
    });

    test('n=0 produces []', () => {
      expect(generatePattern(0)).toEqual([]);
    });

    test('negative n produces []', () => {
      expect(generatePattern(-3)).toEqual([]);
    });

    test('non-positive-integer n produces []', () => {
      expect(generatePattern(2.5)).toEqual([]);
    });
  });
});
