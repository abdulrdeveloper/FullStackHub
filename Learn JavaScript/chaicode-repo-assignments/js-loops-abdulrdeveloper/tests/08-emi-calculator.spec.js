import { calculateEMI } from '../src/08-emi-calculator.js';

describe('08 - Rohit ka Phone EMI Calculator (9 pts)', () => {

  describe('Basic EMI calculation', () => {
    test('Simple loan pays off in a few months', () => {
      const result = calculateEMI(10000, 0.01, 2000);
      expect(result.months).toBeGreaterThan(0);
      expect(result.totalPaid).toBeGreaterThan(10000);
      expect(result.totalInterest).toBe(
        Math.round((result.totalPaid - 10000) * 100) / 100
      );
    });

    test('Loan with 0% interest pays off exactly', () => {
      // With 0% rate this is edge - but spec says positive numbers
      // Let's use a very small rate instead
      const result = calculateEMI(5000, 0.001, 1000);
      expect(result.months).toBeGreaterThan(0);
      expect(result.totalPaid).toBeGreaterThanOrEqual(5000);
    });

    test('Large EMI pays off quickly', () => {
      const result = calculateEMI(10000, 0.02, 5000);
      expect(result.months).toBeLessThanOrEqual(3);
      expect(result.totalPaid).toBeGreaterThan(10000);
    });

    test('Small EMI takes longer', () => {
      const result = calculateEMI(10000, 0.01, 500);
      expect(result.months).toBeGreaterThan(20);
    });
  });

  describe('Last month partial payment', () => {
    test('Total paid should not overshoot by a full EMI', () => {
      const result = calculateEMI(1000, 0.01, 600);
      // Month 1: 1000 + 10 = 1010, pay 600, rem = 410
      // Month 2: 410 + 4.10 = 414.10, pay 414.10 (last month, rem < emi)
      expect(result.months).toBe(2);
      expect(result.totalPaid).toBeCloseTo(1014.10, 1);
    });
  });

  describe('Infinite loop protection', () => {
    test('EMI less than first month interest returns error', () => {
      expect(calculateEMI(10000, 0.05, 400)).toEqual({
        months: -1, totalPaid: -1, totalInterest: -1
      });
    });

    test('EMI equal to first month interest returns error', () => {
      expect(calculateEMI(10000, 0.05, 500)).toEqual({
        months: -1, totalPaid: -1, totalInterest: -1
      });
    });

    test('EMI just above first month interest works', () => {
      const result = calculateEMI(10000, 0.05, 501);
      expect(result.months).toBeGreaterThan(0);
    });
  });

  describe('totalInterest calculation', () => {
    test('totalInterest = totalPaid - principal', () => {
      const result = calculateEMI(20000, 0.02, 3000);
      expect(result.totalInterest).toBeCloseTo(result.totalPaid - 20000, 1);
    });
  });

  describe('Validation', () => {
    test('Negative principal returns error', () => {
      expect(calculateEMI(-5000, 0.01, 1000)).toEqual({
        months: -1, totalPaid: -1, totalInterest: -1
      });
    });

    test('Zero principal returns error', () => {
      expect(calculateEMI(0, 0.01, 1000)).toEqual({
        months: -1, totalPaid: -1, totalInterest: -1
      });
    });

    test('Negative rate returns error', () => {
      expect(calculateEMI(10000, -0.01, 1000)).toEqual({
        months: -1, totalPaid: -1, totalInterest: -1
      });
    });

    test('Zero EMI returns error', () => {
      expect(calculateEMI(10000, 0.01, 0)).toEqual({
        months: -1, totalPaid: -1, totalInterest: -1
      });
    });

    test('String parameter returns error', () => {
      expect(calculateEMI("ten thousand", 0.01, 1000)).toEqual({
        months: -1, totalPaid: -1, totalInterest: -1
      });
    });
  });
});
