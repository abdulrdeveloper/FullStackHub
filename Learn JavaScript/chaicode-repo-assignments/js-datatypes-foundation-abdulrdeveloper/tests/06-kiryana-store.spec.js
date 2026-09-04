import { getItemNames, getAffordableItems, calculateTotal, sortByPrice, formatBill } from '../src/06-kiryana-store.js';

describe('06 - Kiryana Store Bill: Array Transform (9 pts)', () => {
  const items = [
    { name: 'Atta', price: 40, qty: 2 },
    { name: 'Daal', price: 80, qty: 1 },
    { name: 'Ghee', price: 500, qty: 1 },
    { name: 'Cheeni', price: 45, qty: 3 },
  ];

  describe('getItemNames', () => {
    test('returns array of names', () => {
      expect(getItemNames(items)).toEqual(['Atta', 'Daal', 'Ghee', 'Cheeni']);
    });

    test('returns single name', () => {
      expect(getItemNames([{ name: 'Atta', price: 40, qty: 1 }])).toEqual(['Atta']);
    });

    test('returns [] for empty array', () => {
      expect(getItemNames([])).toEqual([]);
    });

    test('returns [] for non-array', () => {
      expect(getItemNames('not array')).toEqual([]);
      expect(getItemNames(null)).toEqual([]);
    });
  });

  describe('getAffordableItems', () => {
    test('filters items by maxPrice', () => {
      const result = getAffordableItems(items, 50);
      expect(result).toHaveLength(2);
      expect(result[0].name).toBe('Atta');
      expect(result[1].name).toBe('Cheeni');
    });

    test('returns all when maxPrice is very high', () => {
      expect(getAffordableItems(items, 1000)).toHaveLength(4);
    });

    test('returns none when maxPrice is very low', () => {
      expect(getAffordableItems(items, 10)).toHaveLength(0);
    });

    test('includes items with exact maxPrice', () => {
      expect(getAffordableItems(items, 40)).toHaveLength(1);
    });

    test('returns [] for non-array', () => {
      expect(getAffordableItems('not array', 100)).toEqual([]);
    });

    test('returns [] for non-number maxPrice', () => {
      expect(getAffordableItems(items, 'abc')).toEqual([]);
    });
  });

  describe('calculateTotal', () => {
    test('calculates total of price * qty', () => {
      expect(calculateTotal(items)).toBe(40 * 2 + 80 * 1 + 500 * 1 + 45 * 3);
    });

    test('calculates for single item', () => {
      expect(calculateTotal([{ name: 'Atta', price: 40, qty: 3 }])).toBe(120);
    });

    test('returns 0 for empty array', () => {
      expect(calculateTotal([])).toBe(0);
    });

    test('returns 0 for non-array', () => {
      expect(calculateTotal('not array')).toBe(0);
      expect(calculateTotal(null)).toBe(0);
    });
  });

  describe('sortByPrice', () => {
    test('sorts ascending (low to high)', () => {
      const sorted = sortByPrice(items, true);
      expect(sorted[0].name).toBe('Atta');
      expect(sorted[sorted.length - 1].name).toBe('Ghee');
    });

    test('sorts descending (high to low)', () => {
      const sorted = sortByPrice(items, false);
      expect(sorted[0].name).toBe('Ghee');
      expect(sorted[sorted.length - 1].name).toBe('Atta');
    });

    test('does NOT mutate original array', () => {
      const original = [...items];
      sortByPrice(items, true);
      expect(items).toEqual(original);
    });

    test('returns [] for non-array', () => {
      expect(sortByPrice('not array', true)).toEqual([]);
      expect(sortByPrice(null, true)).toEqual([]);
    });
  });

  describe('formatBill', () => {
    test('formats single item', () => {
      expect(formatBill([{ name: 'Atta', price: 40, qty: 2 }])).toBe('Atta x 2 = Rs.80');
    });

    test('formats multiple items with newlines', () => {
      const bill = formatBill([
        { name: 'Atta', price: 40, qty: 2 },
        { name: 'Daal', price: 80, qty: 1 },
      ]);
      expect(bill).toBe('Atta x 2 = Rs.80\nDaal x 1 = Rs.80');
    });

    test('returns "" for empty array', () => {
      expect(formatBill([])).toBe('');
    });

    test('returns "" for non-array', () => {
      expect(formatBill('not array')).toBe('');
      expect(formatBill(null)).toBe('');
    });
  });
});
