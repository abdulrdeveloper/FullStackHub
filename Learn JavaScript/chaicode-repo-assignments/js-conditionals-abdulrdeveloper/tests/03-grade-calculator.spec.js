import { calculateGrade } from '../src/03-grade-calculator.js';

describe('03 - Ms. Parker: Grade Calculator (8 pts)', () => {

  describe('Basic grading without extra credit', () => {
    test('Score 95 should be "A"', () => {
      expect(calculateGrade(95, false)).toBe('A');
    });

    test('Score 85 should be "B"', () => {
      expect(calculateGrade(85, false)).toBe('B');
    });

    test('Score 75 should be "C"', () => {
      expect(calculateGrade(75, false)).toBe('C');
    });

    test('Score 65 should be "D"', () => {
      expect(calculateGrade(65, false)).toBe('D');
    });

    test('Score 50 should be "F"', () => {
      expect(calculateGrade(50, false)).toBe('F');
    });
  });

  describe('Boundary values', () => {
    test('Score 90 should be "A"', () => {
      expect(calculateGrade(90, false)).toBe('A');
    });

    test('Score 89 should be "B"', () => {
      expect(calculateGrade(89, false)).toBe('B');
    });

    test('Score 80 should be "B"', () => {
      expect(calculateGrade(80, false)).toBe('B');
    });

    test('Score 70 should be "C"', () => {
      expect(calculateGrade(70, false)).toBe('C');
    });

    test('Score 60 should be "D"', () => {
      expect(calculateGrade(60, false)).toBe('D');
    });

    test('Score 59 should be "F"', () => {
      expect(calculateGrade(59, false)).toBe('F');
    });

    test('Score 0 should be "F"', () => {
      expect(calculateGrade(0, false)).toBe('F');
    });

    test('Score 100 should be "A"', () => {
      expect(calculateGrade(100, false)).toBe('A');
    });
  });

  describe('Extra credit (+5 points, capped at 100)', () => {
    test('Score 86 with extra credit → 91 → "A"', () => {
      expect(calculateGrade(86, true)).toBe('A');
    });

    test('Score 76 with extra credit → 81 → "B"', () => {
      expect(calculateGrade(76, true)).toBe('B');
    });

    test('Score 56 with extra credit → 61 → "D"', () => {
      expect(calculateGrade(56, true)).toBe('D');
    });

    test('Score 98 with extra credit should cap at 100 → "A"', () => {
      expect(calculateGrade(98, true)).toBe('A');
    });

    test('Score 100 with extra credit should still be "A" (capped at 100)', () => {
      expect(calculateGrade(100, true)).toBe('A');
    });
  });

  describe('Invalid scores', () => {
    test('Score -1 should return "INVALID"', () => {
      expect(calculateGrade(-1, false)).toBe('INVALID');
    });

    test('Score 101 should return "INVALID"', () => {
      expect(calculateGrade(101, false)).toBe('INVALID');
    });

    test('Score 150 with extra credit should still return "INVALID"', () => {
      expect(calculateGrade(150, true)).toBe('INVALID');
    });
  });
});
