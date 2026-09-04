import { calculateShipping } from '../src/06-shipping-calculator.js';

describe('06 - ShopSwift: Shipping Calculator (9 pts)', () => {

  describe('Domestic shipping (US)', () => {
    test('0.5 kg, US, $20 order → $5', () => {
      expect(calculateShipping(0.5, 'US', 20)).toBe(5);
    });

    test('1 kg, US, $30 order → $5', () => {
      expect(calculateShipping(1, 'US', 30)).toBe(5);
    });

    test('3 kg, US, $40 order → $10', () => {
      expect(calculateShipping(3, 'US', 40)).toBe(10);
    });

    test('5 kg, US, $25 order → $10', () => {
      expect(calculateShipping(5, 'US', 25)).toBe(10);
    });

    test('8 kg, US, $30 order → $15', () => {
      expect(calculateShipping(8, 'US', 30)).toBe(15);
    });
  });

  describe('International shipping', () => {
    test('0.5 kg, UK, $20 order → $15', () => {
      expect(calculateShipping(0.5, 'UK', 20)).toBe(15);
    });

    test('3 kg, IN, $50 order → $25', () => {
      expect(calculateShipping(3, 'IN', 50)).toBe(25);
    });

    test('7 kg, DE, $80 order → $40', () => {
      expect(calculateShipping(7, 'DE', 80)).toBe(40);
    });
  });

  describe('Free shipping', () => {
    test('Domestic order over $50 → free shipping ($0)', () => {
      expect(calculateShipping(3, 'US', 51)).toBe(0);
    });

    test('Domestic order exactly $50 → NOT free ($10)', () => {
      expect(calculateShipping(3, 'US', 50)).toBe(10);
    });

    test('International order over $100 → free shipping ($0)', () => {
      expect(calculateShipping(5, 'UK', 101)).toBe(0);
    });

    test('International order exactly $100 → NOT free ($25)', () => {
      expect(calculateShipping(5, 'UK', 100)).toBe(25);
    });
  });

  describe('Invalid input', () => {
    test('Weight 0 → -1', () => {
      expect(calculateShipping(0, 'US', 30)).toBe(-1);
    });

    test('Negative weight → -1', () => {
      expect(calculateShipping(-2, 'US', 30)).toBe(-1);
    });

    test('Negative order total → -1', () => {
      expect(calculateShipping(2, 'US', -10)).toBe(-1);
    });
  });
});
