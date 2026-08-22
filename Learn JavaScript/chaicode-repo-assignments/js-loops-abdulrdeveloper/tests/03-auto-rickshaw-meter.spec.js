import { calculateAutoFare } from '../src/03-auto-rickshaw-meter.js';

describe('03 - Pappu ka Auto Rickshaw Meter (8 pts)', () => {

  describe('Distance-only fares', () => {
    test('Exactly 1 km = Rs 30 (minimum fare)', () => {
      expect(calculateAutoFare(1)).toBe(30);
    });

    test('Less than 1 km rounds up to 1 km = Rs 30', () => {
      expect(calculateAutoFare(0.5)).toBe(30);
    });

    test('2 km = 30 + 15 = Rs 45', () => {
      expect(calculateAutoFare(2)).toBe(45);
    });

    test('3 km = 30 + 15 + 15 = Rs 60', () => {
      expect(calculateAutoFare(3)).toBe(60);
    });

    test('5 km = 30 + 15*4 = Rs 90', () => {
      expect(calculateAutoFare(5)).toBe(90);
    });

    test('7 km = 30 + 15*4 + 10*2 = Rs 110', () => {
      expect(calculateAutoFare(7)).toBe(110);
    });

    test('10 km = 30 + 60 + 50 = Rs 140', () => {
      expect(calculateAutoFare(10)).toBe(140);
    });

    test('3.2 km ceils to 4 km = 30 + 15*3 = Rs 75', () => {
      expect(calculateAutoFare(3.2)).toBe(75);
    });

    test('5.1 km ceils to 6 km = 30 + 60 + 10 = Rs 100', () => {
      expect(calculateAutoFare(5.1)).toBe(100);
    });
  });

  describe('With waiting charges', () => {
    test('2 km + 2 min waiting = 45 + 5 = Rs 50', () => {
      expect(calculateAutoFare(2, 2)).toBe(50);
    });

    test('3 km + 3 min waiting = 60 + 10 = Rs 70 (3 min = ceil(3/2) = 2 pairs)', () => {
      expect(calculateAutoFare(3, 3)).toBe(70);
    });

    test('5 km + 5 min waiting = 90 + 15 = Rs 105 (5 min = ceil(5/2) = 3 pairs)', () => {
      expect(calculateAutoFare(5, 5)).toBe(105);
    });

    test('1 km + 1 min waiting = 30 + 5 = Rs 35 (1 min = ceil(1/2) = 1 pair)', () => {
      expect(calculateAutoFare(1, 1)).toBe(35);
    });

    test('7 km + 4 min waiting = 110 + 10 = Rs 120', () => {
      expect(calculateAutoFare(7, 4)).toBe(120);
    });

    test('0 waiting minutes means no waiting charge', () => {
      expect(calculateAutoFare(3, 0)).toBe(60);
    });
  });

  describe('Validation', () => {
    test('Zero distance returns -1', () => {
      expect(calculateAutoFare(0)).toBe(-1);
    });

    test('Negative distance returns -1', () => {
      expect(calculateAutoFare(-5)).toBe(-1);
    });

    test('String distance returns -1', () => {
      expect(calculateAutoFare("three")).toBe(-1);
    });

    test('Negative waiting minutes returns -1', () => {
      expect(calculateAutoFare(3, -2)).toBe(-1);
    });

    test('undefined distance returns -1', () => {
      expect(calculateAutoFare(undefined)).toBe(-1);
    });
  });
});
