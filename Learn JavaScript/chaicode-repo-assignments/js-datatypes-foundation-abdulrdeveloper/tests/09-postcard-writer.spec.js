import { writePostcard, isValidPincode, formatPostcardField, isFromState, countVowels } from '../src/09-postcard-writer.js';

describe('09 - Indian Postcard Writer: String Advanced (9 pts)', () => {
  describe('writePostcard', () => {
    test('creates formatted postcard', () => {
      const result = writePostcard('Guddu', 'Dadi ji', 'Hum theek hain');
      expect(result).toBe('Priy Dadi ji,\n\nHum theek hain\n\nAapka/Aapki,\nGuddu');
    });

    test('works with different names', () => {
      const result = writePostcard('Ravi', 'Mummy', 'Miss you');
      expect(result).toContain('Priy Mummy,');
      expect(result).toContain('Miss you');
      expect(result).toContain('Ravi');
    });

    test('returns "" for non-string sender', () => {
      expect(writePostcard(123, 'Dadi', 'hello')).toBe('');
    });

    test('returns "" for non-string receiver', () => {
      expect(writePostcard('Guddu', null, 'hello')).toBe('');
    });

    test('returns "" for non-string message', () => {
      expect(writePostcard('Guddu', 'Dadi', 42)).toBe('');
    });

    test('returns "" for empty string after trim', () => {
      expect(writePostcard('', 'Dadi', 'hello')).toBe('');
      expect(writePostcard('Guddu', '  ', 'hello')).toBe('');
      expect(writePostcard('Guddu', 'Dadi', '  ')).toBe('');
    });
  });

  describe('isValidPincode', () => {
    test('returns true for valid pincode', () => {
      expect(isValidPincode('400001')).toBe(true);
      expect(isValidPincode('110001')).toBe(true);
    });

    test('returns false for pincode starting with 0', () => {
      expect(isValidPincode('012345')).toBe(false);
    });

    test('returns false for wrong length', () => {
      expect(isValidPincode('12345')).toBe(false);
      expect(isValidPincode('1234567')).toBe(false);
    });

    test('returns false for non-digit characters', () => {
      expect(isValidPincode('12345a')).toBe(false);
      expect(isValidPincode('abcdef')).toBe(false);
    });

    test('returns false for non-string', () => {
      expect(isValidPincode(400001)).toBe(false);
      expect(isValidPincode(null)).toBe(false);
    });
  });

  describe('formatPostcardField', () => {
    test('formats with default width (12)', () => {
      const result = formatPostcardField('From', 'Guddu');
      expect(result).toBe('From        : Guddu');
    });

    test('formats with custom width', () => {
      const result = formatPostcardField('To', 'Dadi ji', 8);
      expect(result).toBe('To      : Dadi ji');
    });

    test('returns "" for non-string label', () => {
      expect(formatPostcardField(123, 'value')).toBe('');
    });

    test('returns "" for non-string value', () => {
      expect(formatPostcardField('label', 123)).toBe('');
    });
  });

  describe('isFromState', () => {
    test('returns true when address ends with state code', () => {
      expect(isFromState('Guddu, Lucknow, UP', 'UP')).toBe(true);
    });

    test('returns false when state code does not match', () => {
      expect(isFromState('Priya, Mumbai, MH', 'UP')).toBe(false);
    });

    test('returns false for non-string address', () => {
      expect(isFromState(123, 'UP')).toBe(false);
    });

    test('returns false for non-string stateCode', () => {
      expect(isFromState('address, UP', 123)).toBe(false);
    });
  });

  describe('countVowels', () => {
    test('counts vowels in a string', () => {
      expect(countVowels('Namaste India')).toBe(6);
    });

    test('counts uppercase vowels too', () => {
      expect(countVowels('AEIOU')).toBe(5);
    });

    test('returns 0 for no vowels', () => {
      expect(countVowels('xyz')).toBe(0);
    });

    test('returns 0 for empty string', () => {
      expect(countVowels('')).toBe(0);
    });

    test('returns 0 for non-string', () => {
      expect(countVowels(123)).toBe(0);
      expect(countVowels(null)).toBe(0);
    });
  });
});
