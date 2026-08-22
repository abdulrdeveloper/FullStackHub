import { getChaiOrderLength, shoutChaiOrder, whisperChaiOrder, hasSpecialIngredient, getFirstAndLastChar } from '../src/01-chai-order.js';

describe('01 - Chai Tapri Order System: String Basics (7 pts)', () => {
  describe('getChaiOrderLength', () => {
    test('returns length of trimmed order', () => {
      expect(getChaiOrderLength('masala chai')).toBe(11);
    });

    test('trims spaces before counting', () => {
      expect(getChaiOrderLength('  masala chai  ')).toBe(11);
    });

    test('returns 0 for whitespace-only string', () => {
      expect(getChaiOrderLength('   ')).toBe(0);
    });

    test('returns -1 for non-string input', () => {
      expect(getChaiOrderLength(123)).toBe(-1);
      expect(getChaiOrderLength(null)).toBe(-1);
      expect(getChaiOrderLength(undefined)).toBe(-1);
    });
  });

  describe('shoutChaiOrder', () => {
    test('converts order to uppercase', () => {
      expect(shoutChaiOrder('masala chai')).toBe('MASALA CHAI');
    });

    test('trims before converting', () => {
      expect(shoutChaiOrder('  adrak chai  ')).toBe('ADRAK CHAI');
    });

    test('returns "" for non-string', () => {
      expect(shoutChaiOrder(42)).toBe('');
      expect(shoutChaiOrder(null)).toBe('');
    });

    test('returns "" for empty or whitespace-only string', () => {
      expect(shoutChaiOrder('')).toBe('');
      expect(shoutChaiOrder('   ')).toBe('');
    });
  });

  describe('whisperChaiOrder', () => {
    test('converts order to lowercase', () => {
      expect(whisperChaiOrder('ADRAK CHAI')).toBe('adrak chai');
    });

    test('trims before converting', () => {
      expect(whisperChaiOrder('  ELAICHI CHAI  ')).toBe('elaichi chai');
    });

    test('returns "" for non-string', () => {
      expect(whisperChaiOrder(100)).toBe('');
      expect(whisperChaiOrder(undefined)).toBe('');
    });

    test('returns "" for empty or whitespace-only', () => {
      expect(whisperChaiOrder('')).toBe('');
      expect(whisperChaiOrder('  ')).toBe('');
    });
  });

  describe('hasSpecialIngredient', () => {
    test('finds ingredient (case-insensitive)', () => {
      expect(hasSpecialIngredient('Elaichi Masala Chai', 'elaichi')).toBe(true);
    });

    test('finds ingredient when order is lowercase', () => {
      expect(hasSpecialIngredient('adrak wali chai', 'ADRAK')).toBe(true);
    });

    test('returns false when ingredient not found', () => {
      expect(hasSpecialIngredient('masala chai', 'elaichi')).toBe(false);
    });

    test('returns false for non-string inputs', () => {
      expect(hasSpecialIngredient(123, 'chai')).toBe(false);
      expect(hasSpecialIngredient('chai', 123)).toBe(false);
      expect(hasSpecialIngredient(null, null)).toBe(false);
    });
  });

  describe('getFirstAndLastChar', () => {
    test('returns first and last characters', () => {
      expect(getFirstAndLastChar('masala chai')).toEqual({ first: 'm', last: 'i' });
    });

    test('trims before getting chars', () => {
      expect(getFirstAndLastChar('  adrak  ')).toEqual({ first: 'a', last: 'k' });
    });

    test('works for single character', () => {
      expect(getFirstAndLastChar('a')).toEqual({ first: 'a', last: 'a' });
    });

    test('returns null for non-string', () => {
      expect(getFirstAndLastChar(42)).toBeNull();
      expect(getFirstAndLastChar(null)).toBeNull();
    });

    test('returns null for empty or whitespace-only', () => {
      expect(getFirstAndLastChar('')).toBeNull();
      expect(getFirstAndLastChar('   ')).toBeNull();
    });
  });
});
