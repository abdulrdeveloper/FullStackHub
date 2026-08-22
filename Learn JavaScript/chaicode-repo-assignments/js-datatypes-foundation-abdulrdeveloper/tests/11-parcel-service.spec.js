import { parcelToJSON, jsonToParcel, convertToString, convertToNumber, stringToChars } from '../src/11-parcel-service.js';

describe('11 - Dak Ghar Parcel Service: JSON & Type Conversion (9 pts)', () => {
  describe('parcelToJSON', () => {
    test('converts object to JSON string', () => {
      expect(parcelToJSON({ id: 'P001', weight: 2.5 })).toBe('{"id":"P001","weight":2.5}');
    });

    test('converts nested object', () => {
      const parcel = { id: 'P001', address: { city: 'Delhi', pin: '110001' } };
      const result = JSON.parse(parcelToJSON(parcel));
      expect(result.address.city).toBe('Delhi');
    });

    test('converts array', () => {
      expect(parcelToJSON([1, 2, 3])).toBe('[1,2,3]');
    });

    test('returns "" for undefined', () => {
      expect(parcelToJSON(undefined)).toBe('');
    });

    test('converts null to "null"', () => {
      expect(parcelToJSON(null)).toBe('null');
    });

    test('converts number to string', () => {
      expect(parcelToJSON(42)).toBe('42');
    });
  });

  describe('jsonToParcel', () => {
    test('parses valid JSON object', () => {
      expect(jsonToParcel('{"id":"P001","weight":2.5}')).toEqual({ id: 'P001', weight: 2.5 });
    });

    test('parses valid JSON array', () => {
      expect(jsonToParcel('[1,2,3]')).toEqual([1, 2, 3]);
    });

    test('returns null for invalid JSON', () => {
      expect(jsonToParcel('{invalid}')).toBeNull();
      expect(jsonToParcel('not json')).toBeNull();
    });

    test('returns null for non-string', () => {
      expect(jsonToParcel(123)).toBeNull();
      expect(jsonToParcel(null)).toBeNull();
      expect(jsonToParcel(undefined)).toBeNull();
    });

    test('returns null for empty string', () => {
      expect(jsonToParcel('')).toBeNull();
    });
  });

  describe('convertToString', () => {
    test('converts number to string', () => {
      expect(convertToString(42)).toBe('42');
      expect(convertToString(3.14)).toBe('3.14');
    });

    test('converts boolean to string', () => {
      expect(convertToString(true)).toBe('true');
      expect(convertToString(false)).toBe('false');
    });

    test('converts null to "null"', () => {
      expect(convertToString(null)).toBe('null');
    });

    test('converts undefined to "undefined"', () => {
      expect(convertToString(undefined)).toBe('undefined');
    });

    test('converts NaN to "NaN"', () => {
      expect(convertToString(NaN)).toBe('NaN');
    });
  });

  describe('convertToNumber', () => {
    test('converts valid numeric string', () => {
      expect(convertToNumber('42.5')).toBe(42.5);
      expect(convertToNumber('100')).toBe(100);
    });

    test('converts boolean', () => {
      expect(convertToNumber(true)).toBe(1);
      expect(convertToNumber(false)).toBe(0);
    });

    test('converts empty string to 0', () => {
      expect(convertToNumber('')).toBe(0);
    });

    test('returns NaN for non-numeric string', () => {
      expect(convertToNumber('hello')).toBeNaN();
    });

    test('converts null to 0', () => {
      expect(convertToNumber(null)).toBe(0);
    });

    test('returns NaN for undefined', () => {
      expect(convertToNumber(undefined)).toBeNaN();
    });
  });

  describe('stringToChars', () => {
    test('converts string to array of chars', () => {
      expect(stringToChars('Dak')).toEqual(['D', 'a', 'k']);
    });

    test('returns empty array for empty string', () => {
      expect(stringToChars('')).toEqual([]);
    });

    test('single character string', () => {
      expect(stringToChars('A')).toEqual(['A']);
    });

    test('returns [] for non-string', () => {
      expect(stringToChars(123)).toEqual([]);
      expect(stringToChars(null)).toEqual([]);
      expect(stringToChars(undefined)).toEqual([]);
    });

    test('handles spaces', () => {
      expect(stringToChars('a b')).toEqual(['a', ' ', 'b']);
    });
  });
});
