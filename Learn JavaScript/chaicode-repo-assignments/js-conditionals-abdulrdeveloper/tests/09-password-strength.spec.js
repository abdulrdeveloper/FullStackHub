import { checkPasswordStrength } from '../src/09-password-strength.js';

describe('09 - SecureApp: Password Strength Checker (9 pts)', () => {

  describe('Weak passwords (0–1 criteria)', () => {
    test('Empty string → "weak"', () => {
      expect(checkPasswordStrength('')).toBe('weak');
    });

    test('"abc" (only lowercase, short) → "weak"', () => {
      expect(checkPasswordStrength('abc')).toBe('weak');
    });

    test('"12345" (only numbers, short) → "weak"', () => {
      expect(checkPasswordStrength('12345')).toBe('weak');
    });

    test('Non-string input → "weak"', () => {
      expect(checkPasswordStrength(12345)).toBe('weak');
      expect(checkPasswordStrength(null)).toBe('weak');
    });
  });

  describe('Medium passwords (2–3 criteria)', () => {
    test('"abcdefgh" (8+ chars + lowercase) → "medium"', () => {
      expect(checkPasswordStrength('abcdefgh')).toBe('medium');
    });

    test('"Abcdefgh" (8+ chars + uppercase + lowercase) → "medium"', () => {
      expect(checkPasswordStrength('Abcdefgh')).toBe('medium');
    });

    test('"abc123!!" (lowercase + numbers + special, but short) → "medium"', () => {
      expect(checkPasswordStrength('ab1!')).toBe('medium');
    });
  });

  describe('Strong passwords (4 criteria)', () => {
    test('"Abcdef1!" (8+ chars, upper, lower, number, but checking 4 criteria) → "strong"', () => {
      expect(checkPasswordStrength('Abcdefg1')).toBe('strong');
    });

    test('"hello!World" (8+ chars, upper, lower, special - no number) → "strong"', () => {
      expect(checkPasswordStrength('hello!World')).toBe('strong');
    });
  });

  describe('Very strong passwords (all 5 criteria)', () => {
    test('"MyP@ss1!" (8+ chars, upper, lower, number, special) → "very strong"', () => {
      expect(checkPasswordStrength('MyP@ss1!')).toBe('very strong');
    });

    test('"Str0ng!Pass" → "very strong"', () => {
      expect(checkPasswordStrength('Str0ng!Pass')).toBe('very strong');
    });

    test('"C0mpl3x#Pwd" → "very strong"', () => {
      expect(checkPasswordStrength('C0mpl3x#Pwd')).toBe('very strong');
    });
  });
});
