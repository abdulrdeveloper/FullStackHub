import { getFamilyNames, getAllFamilies, getRationCardEntries, hasRationCard, removeRationCard } from '../src/07-ration-card.js';

describe('07 - Ration Card Registry: Object Basics (9 pts)', () => {
  const registry = {
    'RC001': { head: 'Ram Prasad', members: 4, type: 'BPL' },
    'RC002': { head: 'Sita Devi', members: 3, type: 'APL' },
    'RC003': { head: 'Mohan Lal', members: 5, type: 'BPL' },
  };

  describe('getFamilyNames', () => {
    test('returns all ration card IDs', () => {
      expect(getFamilyNames(registry)).toEqual(['RC001', 'RC002', 'RC003']);
    });

    test('returns empty array for empty object', () => {
      expect(getFamilyNames({})).toEqual([]);
    });

    test('returns [] for null', () => {
      expect(getFamilyNames(null)).toEqual([]);
    });

    test('returns [] for non-object', () => {
      expect(getFamilyNames('not object')).toEqual([]);
      expect(getFamilyNames(42)).toEqual([]);
    });

    test('returns [] for array (arrays are not valid registries)', () => {
      expect(getFamilyNames([1, 2, 3])).toEqual([]);
    });
  });

  describe('getAllFamilies', () => {
    test('returns all family objects', () => {
      const families = getAllFamilies(registry);
      expect(families).toHaveLength(3);
      expect(families[0].head).toBe('Ram Prasad');
    });

    test('returns [] for empty object', () => {
      expect(getAllFamilies({})).toEqual([]);
    });

    test('returns [] for null', () => {
      expect(getAllFamilies(null)).toEqual([]);
    });

    test('returns [] for non-object', () => {
      expect(getAllFamilies(123)).toEqual([]);
    });
  });

  describe('getRationCardEntries', () => {
    test('returns [key, value] pairs', () => {
      const entries = getRationCardEntries(registry);
      expect(entries).toHaveLength(3);
      expect(entries[0]).toEqual(['RC001', { head: 'Ram Prasad', members: 4, type: 'BPL' }]);
    });

    test('returns [] for empty object', () => {
      expect(getRationCardEntries({})).toEqual([]);
    });

    test('returns [] for null', () => {
      expect(getRationCardEntries(null)).toEqual([]);
    });

    test('returns [] for non-object', () => {
      expect(getRationCardEntries('string')).toEqual([]);
    });
  });

  describe('hasRationCard', () => {
    test('returns true when card exists', () => {
      expect(hasRationCard(registry, 'RC001')).toBe(true);
    });

    test('returns false when card does not exist', () => {
      expect(hasRationCard(registry, 'RC999')).toBe(false);
    });

    test('returns false for non-object registry', () => {
      expect(hasRationCard('not object', 'RC001')).toBe(false);
      expect(hasRationCard(null, 'RC001')).toBe(false);
    });

    test('returns false for non-string cardId', () => {
      expect(hasRationCard(registry, 123)).toBe(false);
      expect(hasRationCard(registry, null)).toBe(false);
    });
  });

  describe('removeRationCard', () => {
    test('removes existing card and returns true', () => {
      const testReg = { 'RC001': { head: 'Ram' }, 'RC002': { head: 'Sita' } };
      expect(removeRationCard(testReg, 'RC001')).toBe(true);
      expect(testReg).not.toHaveProperty('RC001');
    });

    test('returns false for non-existent card', () => {
      const testReg = { 'RC001': { head: 'Ram' } };
      expect(removeRationCard(testReg, 'RC999')).toBe(false);
    });

    test('returns false for non-object registry', () => {
      expect(removeRationCard('not object', 'RC001')).toBe(false);
      expect(removeRationCard(null, 'RC001')).toBe(false);
    });

    test('returns false for non-string cardId', () => {
      expect(removeRationCard(registry, 123)).toBe(false);
    });

    test('registry has fewer keys after removal', () => {
      const testReg = { 'A': 1, 'B': 2, 'C': 3 };
      removeRationCard(testReg, 'B');
      expect(Object.keys(testReg)).toHaveLength(2);
    });
  });
});
