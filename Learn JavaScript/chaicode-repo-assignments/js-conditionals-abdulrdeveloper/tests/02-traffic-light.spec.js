import { getTrafficAction } from '../src/02-traffic-light.js';

describe('02 - SafeDrive: Traffic Light Simulator (8 pts)', () => {

  describe('Standard signals', () => {
    test('"green" should return "GO"', () => {
      expect(getTrafficAction('green')).toBe('GO');
    });

    test('"yellow" should return "SLOW DOWN"', () => {
      expect(getTrafficAction('yellow')).toBe('SLOW DOWN');
    });

    test('"red" should return "STOP"', () => {
      expect(getTrafficAction('red')).toBe('STOP');
    });

    test('"flashing red" should return "STOP AND PROCEED WITH CAUTION"', () => {
      expect(getTrafficAction('flashing red')).toBe('STOP AND PROCEED WITH CAUTION');
    });
  });

  describe('Case insensitivity', () => {
    test('"GREEN" (uppercase) should still return "GO"', () => {
      expect(getTrafficAction('GREEN')).toBe('GO');
    });

    test('"Yellow" (mixed case) should return "SLOW DOWN"', () => {
      expect(getTrafficAction('Yellow')).toBe('SLOW DOWN');
    });

    test('"RED" (uppercase) should return "STOP"', () => {
      expect(getTrafficAction('RED')).toBe('STOP');
    });

    test('"FLASHING RED" (uppercase) should return "STOP AND PROCEED WITH CAUTION"', () => {
      expect(getTrafficAction('FLASHING RED')).toBe('STOP AND PROCEED WITH CAUTION');
    });
  });

  describe('Invalid signals', () => {
    test('"blue" should return "INVALID SIGNAL"', () => {
      expect(getTrafficAction('blue')).toBe('INVALID SIGNAL');
    });

    test('"go" should return "INVALID SIGNAL"', () => {
      expect(getTrafficAction('go')).toBe('INVALID SIGNAL');
    });

    test('empty string should return "INVALID SIGNAL"', () => {
      expect(getTrafficAction('')).toBe('INVALID SIGNAL');
    });
  });
});
