import { createThaliDescription, getThaliStats, searchThaliMenu, generateThaliReceipt } from '../src/12-thali-combo.js';

describe('12 - Thali Combo Platter: Mixed Methods Capstone (9 pts)', () => {
  const thalis = [
    { name: 'Rajasthani Thali', items: ['dal baati', 'churma', 'papad'], price: 250, isVeg: true },
    { name: 'Punjabi Thali', items: ['butter chicken', 'naan', 'dal makhani'], price: 350, isVeg: false },
    { name: 'Gujarati Thali', items: ['dhokla', 'thepla', 'dal', 'kadhi'], price: 200, isVeg: true },
    { name: 'South Indian Thali', items: ['dosa', 'sambar', 'chutney', 'rice'], price: 180, isVeg: true },
  ];

  describe('createThaliDescription', () => {
    test('creates formatted description for veg thali', () => {
      expect(createThaliDescription(thalis[0])).toBe(
        'RAJASTHANI THALI (Veg) - Items: dal baati, churma, papad - Rs.250.00'
      );
    });

    test('creates formatted description for non-veg thali', () => {
      expect(createThaliDescription(thalis[1])).toBe(
        'PUNJABI THALI (Non-Veg) - Items: butter chicken, naan, dal makhani - Rs.350.00'
      );
    });

    test('returns "" for non-object', () => {
      expect(createThaliDescription('not object')).toBe('');
      expect(createThaliDescription(null)).toBe('');
    });

    test('returns "" for missing required fields', () => {
      expect(createThaliDescription({ name: 'Test' })).toBe('');
      expect(createThaliDescription({ name: 'Test', items: [], price: 100 })).toBe('');
    });
  });

  describe('getThaliStats', () => {
    test('returns correct stats', () => {
      const stats = getThaliStats(thalis);
      expect(stats.totalThalis).toBe(4);
      expect(stats.vegCount).toBe(3);
      expect(stats.nonVegCount).toBe(1);
      expect(stats.cheapest).toBe(180);
      expect(stats.costliest).toBe(350);
      expect(stats.names).toEqual(['Rajasthani Thali', 'Punjabi Thali', 'Gujarati Thali', 'South Indian Thali']);
    });

    test('calculates correct average price', () => {
      const stats = getThaliStats(thalis);
      expect(stats.avgPrice).toBe('245.00');
    });

    test('returns null for empty array', () => {
      expect(getThaliStats([])).toBeNull();
    });

    test('returns null for non-array', () => {
      expect(getThaliStats('not array')).toBeNull();
      expect(getThaliStats(null)).toBeNull();
    });

    test('works with single thali', () => {
      const stats = getThaliStats([thalis[0]]);
      expect(stats.totalThalis).toBe(1);
      expect(stats.cheapest).toBe(250);
      expect(stats.costliest).toBe(250);
    });
  });

  describe('searchThaliMenu', () => {
    test('finds thali by name', () => {
      const result = searchThaliMenu(thalis, 'rajasthani');
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('Rajasthani Thali');
    });

    test('finds thali by item', () => {
      const result = searchThaliMenu(thalis, 'dal');
      expect(result).toHaveLength(3);
    });

    test('search is case-insensitive', () => {
      expect(searchThaliMenu(thalis, 'DOSA')).toHaveLength(1);
    });

    test('returns [] when no match', () => {
      expect(searchThaliMenu(thalis, 'pizza')).toEqual([]);
    });

    test('returns [] for non-array thalis', () => {
      expect(searchThaliMenu('not array', 'dal')).toEqual([]);
    });

    test('returns [] for non-string query', () => {
      expect(searchThaliMenu(thalis, 123)).toEqual([]);
    });
  });

  describe('generateThaliReceipt', () => {
    test('generates formatted receipt', () => {
      const receipt = generateThaliReceipt('Guddu', [thalis[0], thalis[2]]);
      expect(receipt).toContain('THALI RECEIPT');
      expect(receipt).toContain('Customer: GUDDU');
      expect(receipt).toContain('- Rajasthani Thali x Rs.250');
      expect(receipt).toContain('- Gujarati Thali x Rs.200');
      expect(receipt).toContain('Total: Rs.450');
      expect(receipt).toContain('Items: 2');
    });

    test('generates receipt for single thali', () => {
      const receipt = generateThaliReceipt('Ravi', [thalis[0]]);
      expect(receipt).toContain('Customer: RAVI');
      expect(receipt).toContain('Total: Rs.250');
      expect(receipt).toContain('Items: 1');
    });

    test('returns "" for non-string customerName', () => {
      expect(generateThaliReceipt(123, [thalis[0]])).toBe('');
    });

    test('returns "" for non-array thalis', () => {
      expect(generateThaliReceipt('Guddu', 'not array')).toBe('');
    });

    test('returns "" for empty thalis', () => {
      expect(generateThaliReceipt('Guddu', [])).toBe('');
    });
  });
});
