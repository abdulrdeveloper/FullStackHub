import { createFestivalManager } from '../src/11-festival-planner.js';

describe('11 - Festival Countdown Planner: Module Pattern (9 pts)', () => {
  let manager;

  beforeEach(() => {
    manager = createFestivalManager();
  });

  describe('addFestival', () => {
    test('adds a festival and returns new count', () => {
      expect(manager.addFestival('Diwali', '2025-10-20', 'religious')).toBe(1);
    });

    test('adds multiple festivals with correct counts', () => {
      expect(manager.addFestival('Diwali', '2025-10-20', 'religious')).toBe(1);
      expect(manager.addFestival('Republic Day', '2025-01-26', 'national')).toBe(2);
      expect(manager.addFestival('Holi', '2025-03-14', 'cultural')).toBe(3);
    });

    test('returns -1 for duplicate name', () => {
      manager.addFestival('Diwali', '2025-10-20', 'religious');
      expect(manager.addFestival('Diwali', '2025-11-01', 'cultural')).toBe(-1);
    });

    test('returns -1 for empty name', () => {
      expect(manager.addFestival('', '2025-01-01', 'national')).toBe(-1);
    });

    test('returns -1 for invalid type', () => {
      expect(manager.addFestival('Test', '2025-01-01', 'invalid')).toBe(-1);
    });

    test('accepts all valid types: religious, national, cultural', () => {
      expect(manager.addFestival('F1', '2025-01-01', 'religious')).toBe(1);
      expect(manager.addFestival('F2', '2025-02-01', 'national')).toBe(2);
      expect(manager.addFestival('F3', '2025-03-01', 'cultural')).toBe(3);
    });
  });

  describe('removeFestival', () => {
    test('returns true when festival is removed', () => {
      manager.addFestival('Diwali', '2025-10-20', 'religious');
      expect(manager.removeFestival('Diwali')).toBe(true);
    });

    test('returns false when festival is not found', () => {
      expect(manager.removeFestival('Unknown')).toBe(false);
    });

    test('after remove, getCount decreases', () => {
      manager.addFestival('Diwali', '2025-10-20', 'religious');
      manager.addFestival('Holi', '2025-03-14', 'cultural');
      expect(manager.getCount()).toBe(2);
      manager.removeFestival('Diwali');
      expect(manager.getCount()).toBe(1);
    });
  });

  describe('getAll', () => {
    test('returns all festivals', () => {
      manager.addFestival('Diwali', '2025-10-20', 'religious');
      manager.addFestival('Holi', '2025-03-14', 'cultural');
      const all = manager.getAll();
      expect(all).toHaveLength(2);
      expect(all[0]).toEqual({ name: 'Diwali', date: '2025-10-20', type: 'religious' });
    });

    test('returns a COPY - modifying returned array does not affect manager', () => {
      manager.addFestival('Diwali', '2025-10-20', 'religious');
      const copy = manager.getAll();
      copy.push({ name: 'Fake', date: '2025-01-01', type: 'national' });
      expect(manager.getAll()).toHaveLength(1);
    });
  });

  describe('getByType', () => {
    test('filters festivals by type', () => {
      manager.addFestival('Diwali', '2025-10-20', 'religious');
      manager.addFestival('Republic Day', '2025-01-26', 'national');
      manager.addFestival('Holi', '2025-03-14', 'religious');
      const religious = manager.getByType('religious');
      expect(religious).toHaveLength(2);
      expect(religious.every(f => f.type === 'religious')).toBe(true);
    });

    test('returns empty array when no match', () => {
      manager.addFestival('Diwali', '2025-10-20', 'religious');
      expect(manager.getByType('national')).toEqual([]);
    });
  });

  describe('getUpcoming', () => {
    test('returns next n festivals after given date, sorted by date', () => {
      manager.addFestival('Diwali', '2025-10-20', 'religious');
      manager.addFestival('Republic Day', '2025-01-26', 'national');
      manager.addFestival('Holi', '2025-03-14', 'cultural');
      manager.addFestival('Independence Day', '2025-08-15', 'national');

      const upcoming = manager.getUpcoming('2025-02-01', 2);
      expect(upcoming).toHaveLength(2);
      expect(upcoming[0].name).toBe('Holi');
      expect(upcoming[1].name).toBe('Independence Day');
    });

    test('defaults to n=3', () => {
      manager.addFestival('F1', '2025-01-01', 'national');
      manager.addFestival('F2', '2025-02-01', 'national');
      manager.addFestival('F3', '2025-03-01', 'national');
      manager.addFestival('F4', '2025-04-01', 'national');

      const upcoming = manager.getUpcoming('2024-12-01');
      expect(upcoming).toHaveLength(3);
    });

    test('returns fewer if not enough upcoming festivals', () => {
      manager.addFestival('Diwali', '2025-10-20', 'religious');
      const upcoming = manager.getUpcoming('2025-11-01', 5);
      expect(upcoming).toHaveLength(0);
    });
  });

  describe('getCount', () => {
    test('returns correct count', () => {
      expect(manager.getCount()).toBe(0);
      manager.addFestival('Diwali', '2025-10-20', 'religious');
      expect(manager.getCount()).toBe(1);
    });
  });

  describe('Encapsulation', () => {
    test('manager.festivals is undefined (private state)', () => {
      manager.addFestival('Diwali', '2025-10-20', 'religious');
      expect(manager.festivals).toBeUndefined();
    });
  });

  describe('Independence', () => {
    test('two managers do not share state', () => {
      const manager2 = createFestivalManager();
      manager.addFestival('Diwali', '2025-10-20', 'religious');
      expect(manager.getCount()).toBe(1);
      expect(manager2.getCount()).toBe(0);
    });
  });
});
