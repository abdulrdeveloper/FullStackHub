import { createFilter, createSorter, createMapper, applyOperations } from '../src/08-dhaba-rating.js';

describe('08 - Highway Dhaba Rating System: Higher-Order Functions (8 pts)', () => {
  const dhabas = [
    { name: 'Punjab Dhaba', rating: 4.5, price: 200, city: 'Delhi' },
    { name: 'Sharma Ji', rating: 3.8, price: 150, city: 'Jaipur' },
    { name: 'Highway King', rating: 4.0, price: 300, city: 'Delhi' },
    { name: 'Truck Stop', rating: 3.2, price: 100, city: 'Agra' },
  ];

  describe('createFilter', () => {
    test('returns a function', () => {
      const filterFn = createFilter('rating', '>=', 4);
      expect(typeof filterFn).toBe('function');
    });

    test('filters by rating >= 4', () => {
      const highRated = createFilter('rating', '>=', 4);
      const result = dhabas.filter(highRated);
      expect(result).toHaveLength(2);
      expect(result[0].name).toBe('Punjab Dhaba');
      expect(result[1].name).toBe('Highway King');
    });

    test('filters by city === "Delhi"', () => {
      const inDelhi = createFilter('city', '===', 'Delhi');
      const result = dhabas.filter(inDelhi);
      expect(result).toHaveLength(2);
      expect(result.every(d => d.city === 'Delhi')).toBe(true);
    });

    test('filters by price < 200', () => {
      const cheap = createFilter('price', '<', 200);
      const result = dhabas.filter(cheap);
      expect(result).toHaveLength(2);
      expect(result.every(d => d.price < 200)).toBe(true);
    });

    test('filters by rating > 4', () => {
      const above4 = createFilter('rating', '>', 4);
      const result = dhabas.filter(above4);
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('Punjab Dhaba');
    });

    test('filters by price <= 150', () => {
      const affordable = createFilter('price', '<=', 150);
      const result = dhabas.filter(affordable);
      expect(result).toHaveLength(2);
    });

    test('unknown operator returns function that always returns false', () => {
      const bad = createFilter('rating', '!=', 4);
      expect(typeof bad).toBe('function');
      const result = dhabas.filter(bad);
      expect(result).toHaveLength(0);
    });
  });

  describe('createSorter', () => {
    test('returns a function', () => {
      expect(typeof createSorter('rating')).toBe('function');
    });

    test('sorts by rating descending', () => {
      const byRatingDesc = createSorter('rating', 'desc');
      const sorted = [...dhabas].sort(byRatingDesc);
      expect(sorted[0].name).toBe('Punjab Dhaba');
      expect(sorted[sorted.length - 1].name).toBe('Truck Stop');
    });

    test('sorts by name ascending (alphabetical)', () => {
      const byNameAsc = createSorter('name', 'asc');
      const sorted = [...dhabas].sort(byNameAsc);
      expect(sorted[0].name).toBe('Highway King');
      expect(sorted[sorted.length - 1].name).toBe('Truck Stop');
    });

    test('sorts by price ascending by default', () => {
      const byPrice = createSorter('price');
      const sorted = [...dhabas].sort(byPrice);
      expect(sorted[0].price).toBe(100);
      expect(sorted[sorted.length - 1].price).toBe(300);
    });
  });

  describe('createMapper', () => {
    test('returns a function', () => {
      expect(typeof createMapper(['name'])).toBe('function');
    });

    test('picks only specified fields ["name", "rating"]', () => {
      const pickNameRating = createMapper(['name', 'rating']);
      const result = dhabas.map(pickNameRating);
      expect(result[0]).toEqual({ name: 'Punjab Dhaba', rating: 4.5 });
      expect(result[0]).not.toHaveProperty('price');
      expect(result[0]).not.toHaveProperty('city');
    });

    test('picks single field ["name"]', () => {
      const pickName = createMapper(['name']);
      const result = pickName(dhabas[0]);
      expect(result).toEqual({ name: 'Punjab Dhaba' });
    });
  });

  describe('applyOperations', () => {
    test('chains filter then sort then map operations', () => {
      const filterHighRated = arr => arr.filter(createFilter('rating', '>=', 4));
      const sortByRating = arr => [...arr].sort(createSorter('rating', 'desc'));
      const mapNames = arr => arr.map(createMapper(['name', 'rating']));

      const result = applyOperations(dhabas, filterHighRated, sortByRating, mapNames);
      expect(result).toHaveLength(2);
      expect(result[0]).toEqual({ name: 'Punjab Dhaba', rating: 4.5 });
      expect(result[1]).toEqual({ name: 'Highway King', rating: 4.0 });
    });

    test('returns [] when data is not an array', () => {
      expect(applyOperations('not array', x => x)).toEqual([]);
      expect(applyOperations(null)).toEqual([]);
      expect(applyOperations(123)).toEqual([]);
    });

    test('returns data as-is when no operations provided', () => {
      const result = applyOperations(dhabas);
      expect(result).toEqual(dhabas);
    });

    test('applies a single operation correctly', () => {
      const filterDelhi = arr => arr.filter(d => d.city === 'Delhi');
      const result = applyOperations(dhabas, filterDelhi);
      expect(result).toHaveLength(2);
    });
  });
});
