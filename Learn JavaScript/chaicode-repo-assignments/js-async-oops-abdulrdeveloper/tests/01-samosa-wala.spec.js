import { createSamosaCart, demonstrateThisLoss, fixWithBind } from '../src/01-samosa-wala.js';

describe('01 - Samosa Wala: this Keyword Basics (7 pts)', () => {
  describe('Cart creation and properties', () => {
    test('createSamosaCart returns object with correct owner and location', () => {
      const cart = createSamosaCart('Ramu', 'Station Road');
      expect(cart.owner).toBe('Ramu');
      expect(cart.location).toBe('Station Road');
    });

    test('cart has correct menu with samosa, jalebi, kachori prices', () => {
      const cart = createSamosaCart('Ramu', 'Station Road');
      expect(cart.menu).toEqual({ samosa: 15, jalebi: 20, kachori: 25 });
    });

    test('cart starts with empty sales array', () => {
      const cart = createSamosaCart('Ramu', 'Station Road');
      expect(cart.sales).toEqual([]);
    });
  });

  describe('sellItem method', () => {
    test('sellItem returns total price for valid item and quantity', () => {
      const cart = createSamosaCart('Ramu', 'Station Road');
      expect(cart.sellItem('samosa', 3)).toBe(45);
    });

    test('sellItem pushes sale record to sales array', () => {
      const cart = createSamosaCart('Ramu', 'Station Road');
      cart.sellItem('samosa', 3);
      expect(cart.sales).toEqual([{ item: 'samosa', quantity: 3, total: 45 }]);
    });

    test('sellItem returns -1 for invalid item', () => {
      const cart = createSamosaCart('Ramu', 'Station Road');
      expect(cart.sellItem('pizza', 2)).toBe(-1);
    });

    test('sellItem returns -1 for quantity <= 0', () => {
      const cart = createSamosaCart('Ramu', 'Station Road');
      expect(cart.sellItem('samosa', 0)).toBe(-1);
      expect(cart.sellItem('samosa', -1)).toBe(-1);
    });

    test('sellItem handles multiple sales correctly', () => {
      const cart = createSamosaCart('Ramu', 'Station Road');
      cart.sellItem('samosa', 2);
      cart.sellItem('jalebi', 3);
      expect(cart.sales.length).toBe(2);
    });
  });

  describe('getDailySales method', () => {
    test('getDailySales returns sum of all sale totals', () => {
      const cart = createSamosaCart('Ramu', 'Station Road');
      cart.sellItem('samosa', 3);
      cart.sellItem('jalebi', 2);
      expect(cart.getDailySales()).toBe(85);
    });

    test('getDailySales returns 0 when no sales', () => {
      const cart = createSamosaCart('Ramu', 'Station Road');
      expect(cart.getDailySales()).toBe(0);
    });
  });

  describe('getPopularItem method', () => {
    test('getPopularItem returns item with highest total quantity', () => {
      const cart = createSamosaCart('Ramu', 'Station Road');
      cart.sellItem('samosa', 5);
      cart.sellItem('jalebi', 2);
      cart.sellItem('samosa', 3);
      expect(cart.getPopularItem()).toBe('samosa');
    });

    test('getPopularItem returns null when no sales', () => {
      const cart = createSamosaCart('Ramu', 'Station Road');
      expect(cart.getPopularItem()).toBeNull();
    });
  });

  describe('moveTo and resetDay methods', () => {
    test('moveTo updates location and returns correct string', () => {
      const cart = createSamosaCart('Ramu', 'Station Road');
      const result = cart.moveTo('College Gate');
      expect(cart.location).toBe('College Gate');
      expect(result).toBe('Ramu ka cart ab College Gate pe hai!');
    });

    test('resetDay clears sales and returns correct string', () => {
      const cart = createSamosaCart('Ramu', 'Station Road');
      cart.sellItem('samosa', 2);
      const result = cart.resetDay();
      expect(cart.sales).toEqual([]);
      expect(result).toBe('Ramu ka naya din shuru!');
    });
  });

  describe('this context: demonstrateThisLoss and fixWithBind', () => {
    test('demonstrateThisLoss returns an unbound function reference', () => {
      const cart = createSamosaCart('Ramu', 'Station Road');
      const lostFn = demonstrateThisLoss(cart);
      expect(typeof lostFn).toBe('function');
    });

    test('fixWithBind returns a function that works correctly', () => {
      const cart = createSamosaCart('Ramu', 'Station Road');
      const boundFn = fixWithBind(cart);
      expect(typeof boundFn).toBe('function');
      expect(boundFn('samosa', 2)).toBe(30);
      expect(cart.sales.length).toBe(1);
    });
  });
});
