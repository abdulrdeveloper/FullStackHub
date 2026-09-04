import { calculateTax } from '../src/08-tax-calculator.js';

describe('08 - Sam\'s Tax Calculator: Progressive Brackets (9 pts)', () => {

  describe('Bracket 1: $0 – $10,000 (0% tax)', () => {
    test('Income $0 → tax $0', () => {
      expect(calculateTax(0)).toBe(0);
    });

    test('Income $5,000 → tax $0', () => {
      expect(calculateTax(5000)).toBe(0);
    });

    test('Income $10,000 → tax $0', () => {
      expect(calculateTax(10000)).toBe(0);
    });
  });

  describe('Bracket 2: $10,001 – $30,000 (10% on amount above $10k)', () => {
    test('Income $15,000 → 10% of $5,000 = $500', () => {
      expect(calculateTax(15000)).toBe(500);
    });

    test('Income $20,000 → 10% of $10,000 = $1,000', () => {
      expect(calculateTax(20000)).toBe(1000);
    });

    test('Income $30,000 → 10% of $20,000 = $2,000', () => {
      expect(calculateTax(30000)).toBe(2000);
    });
  });

  describe('Bracket 3: $30,001 – $70,000 ($2,000 + 20% on amount above $30k)', () => {
    test('Income $40,000 → $2,000 + 20% of $10,000 = $4,000', () => {
      expect(calculateTax(40000)).toBe(4000);
    });

    test('Income $50,000 → $2,000 + 20% of $20,000 = $6,000', () => {
      expect(calculateTax(50000)).toBe(6000);
    });

    test('Income $70,000 → $2,000 + 20% of $40,000 = $10,000', () => {
      expect(calculateTax(70000)).toBe(10000);
    });
  });

  describe('Bracket 4: Over $70,000 ($10,000 + 30% on amount above $70k)', () => {
    test('Income $80,000 → $10,000 + 30% of $10,000 = $13,000', () => {
      expect(calculateTax(80000)).toBe(13000);
    });

    test('Income $100,000 → $10,000 + 30% of $30,000 = $19,000', () => {
      expect(calculateTax(100000)).toBe(19000);
    });
  });

  describe('Edge cases', () => {
    test('Negative income → $0', () => {
      expect(calculateTax(-5000)).toBe(0);
    });

    test('Income $10,001 → 10% of $1 = $0.10', () => {
      expect(calculateTax(10001)).toBeCloseTo(0.10);
    });
  });
});
