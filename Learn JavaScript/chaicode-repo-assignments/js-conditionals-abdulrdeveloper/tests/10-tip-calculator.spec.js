import { calculateTip } from '../src/10-tip-calculator.js';

describe('10 - TipEasy: Restaurant Tip Calculator (8 pts)', () => {

  describe('Tip calculations by service rating', () => {
    test('Rating 1 (terrible) on $100 bill → 5% tip', () => {
      const result = calculateTip(100, 1);
      expect(result.tipPercentage).toBe(5);
      expect(result.tipAmount).toBe(5.00);
      expect(result.totalAmount).toBe(105.00);
    });

    test('Rating 2 (poor) on $80 bill → 10% tip', () => {
      const result = calculateTip(80, 2);
      expect(result.tipPercentage).toBe(10);
      expect(result.tipAmount).toBe(8.00);
      expect(result.totalAmount).toBe(88.00);
    });

    test('Rating 3 (okay) on $45.50 bill → 15% tip', () => {
      const result = calculateTip(45.50, 3);
      expect(result.tipPercentage).toBe(15);
      expect(result.tipAmount).toBeCloseTo(6.83, 2);
      expect(result.totalAmount).toBeCloseTo(52.33, 2);
    });

    test('Rating 4 (good) on $50 bill → 20% tip', () => {
      const result = calculateTip(50, 4);
      expect(result.tipPercentage).toBe(20);
      expect(result.tipAmount).toBe(10.00);
      expect(result.totalAmount).toBe(60.00);
    });

    test('Rating 5 (excellent) on $120 bill → 25% tip', () => {
      const result = calculateTip(120, 5);
      expect(result.tipPercentage).toBe(25);
      expect(result.tipAmount).toBe(30.00);
      expect(result.totalAmount).toBe(150.00);
    });
  });

  describe('Rounding', () => {
    test('$33.33 bill, rating 3 → tipAmount rounded to 2 decimals', () => {
      const result = calculateTip(33.33, 3);
      expect(result.tipAmount).toBeCloseTo(5.00, 2);
      expect(result.totalAmount).toBeCloseTo(38.33, 2);
    });
  });

  describe('Invalid input', () => {
    test('Bill of $0 → null', () => {
      expect(calculateTip(0, 3)).toBeNull();
    });

    test('Negative bill → null', () => {
      expect(calculateTip(-20, 4)).toBeNull();
    });

    test('Rating 0 → null', () => {
      expect(calculateTip(50, 0)).toBeNull();
    });

    test('Rating 6 → null', () => {
      expect(calculateTip(50, 6)).toBeNull();
    });

    test('Rating 3.5 (not integer) → null', () => {
      expect(calculateTip(50, 3.5)).toBeNull();
    });
  });
});
