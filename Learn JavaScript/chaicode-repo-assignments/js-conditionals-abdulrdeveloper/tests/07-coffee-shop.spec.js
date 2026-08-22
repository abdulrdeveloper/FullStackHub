import { calculateCoffeePrice } from '../src/07-coffee-shop.js';

describe('07 - Bean & Brew: Coffee Order (9 pts)', () => {

  describe('Base prices by size', () => {
    test('Small regular coffee → $3.00', () => {
      expect(calculateCoffeePrice('small', 'regular')).toBe(3.00);
    });

    test('Medium regular coffee → $4.00', () => {
      expect(calculateCoffeePrice('medium', 'regular')).toBe(4.00);
    });

    test('Large regular coffee → $5.00', () => {
      expect(calculateCoffeePrice('large', 'regular')).toBe(5.00);
    });
  });

  describe('Coffee type add-ons', () => {
    test('Small latte → $3.00 + $1.00 = $4.00', () => {
      expect(calculateCoffeePrice('small', 'latte')).toBe(4.00);
    });

    test('Medium cappuccino → $4.00 + $1.50 = $5.50', () => {
      expect(calculateCoffeePrice('medium', 'cappuccino')).toBe(5.50);
    });

    test('Large mocha → $5.00 + $2.00 = $7.00', () => {
      expect(calculateCoffeePrice('large', 'mocha')).toBe(7.00);
    });
  });

  describe('Extras', () => {
    test('Small regular + whipped cream → $3.50', () => {
      expect(calculateCoffeePrice('small', 'regular', { whippedCream: true })).toBe(3.50);
    });

    test('Medium latte + extra shot → $4.00 + $1.00 + $0.75 = $5.75', () => {
      expect(calculateCoffeePrice('medium', 'latte', { extraShot: true })).toBe(5.75);
    });

    test('Large mocha + whipped cream + extra shot → $5.00 + $2.00 + $0.50 + $0.75 = $8.25', () => {
      expect(calculateCoffeePrice('large', 'mocha', { whippedCream: true, extraShot: true })).toBe(8.25);
    });

    test('No extras object passed → just base + type', () => {
      expect(calculateCoffeePrice('small', 'mocha')).toBe(5.00);
    });
  });

  describe('Invalid input', () => {
    test('Invalid size "huge" → -1', () => {
      expect(calculateCoffeePrice('huge', 'regular')).toBe(-1);
    });

    test('Invalid type "espresso" → -1', () => {
      expect(calculateCoffeePrice('small', 'espresso')).toBe(-1);
    });

    test('Both invalid → -1', () => {
      expect(calculateCoffeePrice('tiny', 'flat white')).toBe(-1);
    });
  });
});
