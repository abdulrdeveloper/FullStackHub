import { calculateDosaOrder } from '../src/01-dosa-counter.js';

describe('01 - Dosa Counter: Order Calculator (7 pts)', () => {
  describe('Basic orders with correct prices', () => {
    test('plain dosa costs Rs 40', () => {
      const result = calculateDosaOrder('plain');
      expect(result.pricePerDosa).toBe(40);
      expect(result.total).toBe(40);
    });

    test('masala dosa costs Rs 60', () => {
      const result = calculateDosaOrder('masala');
      expect(result.pricePerDosa).toBe(60);
      expect(result.total).toBe(60);
    });

    test('onion dosa costs Rs 50', () => {
      const result = calculateDosaOrder('onion');
      expect(result.pricePerDosa).toBe(50);
      expect(result.total).toBe(50);
    });

    test('butter dosa costs Rs 70', () => {
      const result = calculateDosaOrder('butter');
      expect(result.pricePerDosa).toBe(70);
      expect(result.total).toBe(70);
    });

    test('paper dosa costs Rs 90', () => {
      const result = calculateDosaOrder('paper');
      expect(result.pricePerDosa).toBe(90);
      expect(result.total).toBe(90);
    });

    test('cheese dosa costs Rs 80', () => {
      const result = calculateDosaOrder('cheese');
      expect(result.pricePerDosa).toBe(80);
      expect(result.total).toBe(80);
    });
  });

  describe('Default parameters', () => {
    test('quantity defaults to 1 when not provided', () => {
      const result = calculateDosaOrder('plain');
      expect(result.quantity).toBe(1);
    });

    test('isSpicy defaults to false when not provided', () => {
      const result = calculateDosaOrder('plain');
      expect(result.pricePerDosa).toBe(40);
    });

    test('plain dosa with defaults returns correct full object', () => {
      expect(calculateDosaOrder('plain')).toEqual({
        type: 'plain',
        quantity: 1,
        pricePerDosa: 40,
        total: 40,
      });
    });
  });

  describe('Spicy modifier adds Rs 10 per dosa', () => {
    test('spicy plain dosa costs Rs 50 per dosa', () => {
      const result = calculateDosaOrder('plain', 1, true);
      expect(result.pricePerDosa).toBe(50);
      expect(result.total).toBe(50);
    });

    test('spicy masala dosa costs Rs 70 per dosa', () => {
      const result = calculateDosaOrder('masala', 1, true);
      expect(result.pricePerDosa).toBe(70);
    });

    test('non-spicy dosa does not add extra Rs 10', () => {
      const result = calculateDosaOrder('masala', 1, false);
      expect(result.pricePerDosa).toBe(60);
    });
  });

  describe('Multiple quantities calculated correctly', () => {
    test('3 masala dosas total Rs 180', () => {
      const result = calculateDosaOrder('masala', 3);
      expect(result.total).toBe(180);
    });

    test('2 spicy masala dosas: pricePerDosa=70, total=140', () => {
      const result = calculateDosaOrder('masala', 2, true);
      expect(result).toEqual({
        type: 'masala',
        quantity: 2,
        pricePerDosa: 70,
        total: 140,
      });
    });

    test('5 cheese dosas total Rs 400', () => {
      const result = calculateDosaOrder('cheese', 5);
      expect(result.total).toBe(400);
    });
  });

  describe('Return object shape', () => {
    test('returned object has exactly type, quantity, pricePerDosa, total', () => {
      const result = calculateDosaOrder('butter', 2, true);
      expect(result).toEqual({
        type: 'butter',
        quantity: 2,
        pricePerDosa: 80,
        total: 160,
      });
    });
  });

  describe('Validation returns null', () => {
    test('unknown dosa type returns null', () => {
      expect(calculateDosaOrder('paneer')).toBeNull();
    });

    test('quantity <= 0 returns null', () => {
      expect(calculateDosaOrder('plain', 0)).toBeNull();
      expect(calculateDosaOrder('plain', -2)).toBeNull();
    });

    test('non-string type returns null', () => {
      expect(calculateDosaOrder(123)).toBeNull();
      expect(calculateDosaOrder(true)).toBeNull();
    });

    test('null type returns null', () => {
      expect(calculateDosaOrder(null)).toBeNull();
    });

    test('undefined type returns null', () => {
      expect(calculateDosaOrder(undefined)).toBeNull();
    });
  });
});
