import { createDabbawala } from '../src/05-dabbawala-tracker.js';

describe('05 - Dabbawala Tracker: Closures (8 pts)', () => {
  let ram;

  beforeEach(() => {
    ram = createDabbawala('Ram', 'Dadar');
  });

  describe('addDelivery', () => {
    test('returns auto-incremented id starting from 1', () => {
      expect(ram.addDelivery('Andheri', 'Churchgate')).toBe(1);
    });

    test('second delivery returns id 2', () => {
      ram.addDelivery('Andheri', 'Churchgate');
      expect(ram.addDelivery('Bandra', 'CST')).toBe(2);
    });

    test('third delivery returns id 3', () => {
      ram.addDelivery('Andheri', 'Churchgate');
      ram.addDelivery('Bandra', 'CST');
      expect(ram.addDelivery('Dadar', 'Parel')).toBe(3);
    });

    test('empty from returns -1', () => {
      expect(ram.addDelivery('', 'Churchgate')).toBe(-1);
    });

    test('empty to returns -1', () => {
      expect(ram.addDelivery('Andheri', '')).toBe(-1);
    });

    test('missing from returns -1', () => {
      expect(ram.addDelivery(undefined, 'Churchgate')).toBe(-1);
    });

    test('missing to returns -1', () => {
      expect(ram.addDelivery('Andheri')).toBe(-1);
    });
  });

  describe('completeDelivery', () => {
    test('returns true for valid pending delivery', () => {
      ram.addDelivery('Andheri', 'Churchgate');
      expect(ram.completeDelivery(1)).toBe(true);
    });

    test('returns false for invalid id', () => {
      expect(ram.completeDelivery(999)).toBe(false);
    });

    test('returns false for already completed delivery', () => {
      ram.addDelivery('Andheri', 'Churchgate');
      ram.completeDelivery(1);
      expect(ram.completeDelivery(1)).toBe(false);
    });
  });

  describe('getActiveDeliveries', () => {
    test('returns only pending deliveries', () => {
      ram.addDelivery('Andheri', 'Churchgate');
      ram.addDelivery('Bandra', 'CST');
      ram.completeDelivery(1);
      const active = ram.getActiveDeliveries();
      expect(active).toHaveLength(1);
      expect(active[0].id).toBe(2);
      expect(active[0].status).toBe('pending');
    });

    test('returns empty array when all completed', () => {
      ram.addDelivery('Andheri', 'Churchgate');
      ram.completeDelivery(1);
      expect(ram.getActiveDeliveries()).toEqual([]);
    });

    test('returns empty array when no deliveries', () => {
      expect(ram.getActiveDeliveries()).toEqual([]);
    });
  });

  describe('getStats', () => {
    test('correct counts after mixed operations', () => {
      ram.addDelivery('Andheri', 'Churchgate');
      ram.addDelivery('Bandra', 'CST');
      ram.completeDelivery(1);
      const stats = ram.getStats();
      expect(stats.name).toBe('Ram');
      expect(stats.area).toBe('Dadar');
      expect(stats.total).toBe(2);
      expect(stats.completed).toBe(1);
      expect(stats.pending).toBe(1);
    });

    test('successRate formatted as "XX.XX%"', () => {
      ram.addDelivery('Andheri', 'Churchgate');
      ram.addDelivery('Bandra', 'CST');
      ram.completeDelivery(1);
      expect(ram.getStats().successRate).toBe('50.00%');
    });

    test('successRate is "0.00%" when no deliveries', () => {
      expect(ram.getStats().successRate).toBe('0.00%');
    });

    test('successRate is "100.00%" when all completed', () => {
      ram.addDelivery('Andheri', 'Churchgate');
      ram.completeDelivery(1);
      expect(ram.getStats().successRate).toBe('100.00%');
    });
  });

  describe('reset', () => {
    test('clears all deliveries', () => {
      ram.addDelivery('Andheri', 'Churchgate');
      ram.addDelivery('Bandra', 'CST');
      ram.reset();
      expect(ram.getStats().total).toBe(0);
      expect(ram.getActiveDeliveries()).toEqual([]);
    });

    test('ids restart from 1 after reset', () => {
      ram.addDelivery('Andheri', 'Churchgate');
      ram.addDelivery('Bandra', 'CST');
      ram.reset();
      expect(ram.addDelivery('Dadar', 'Parel')).toBe(1);
    });

    test('reset returns true', () => {
      expect(ram.reset()).toBe(true);
    });
  });

  describe('Closure test: private state', () => {
    test('deliveries property is not accessible on the object', () => {
      ram.addDelivery('Andheri', 'Churchgate');
      expect(ram.deliveries).toBeUndefined();
    });

    test('nextId is not accessible on the object', () => {
      expect(ram.nextId).toBeUndefined();
    });
  });

  describe('Independence test: two instances do not share state', () => {
    test('separate dabbawalas have independent deliveries', () => {
      const shyam = createDabbawala('Shyam', 'Andheri');
      ram.addDelivery('A', 'B');
      ram.addDelivery('C', 'D');
      shyam.addDelivery('X', 'Y');
      expect(ram.getStats().total).toBe(2);
      expect(shyam.getStats().total).toBe(1);
    });

    test('separate dabbawalas have independent id counters', () => {
      const shyam = createDabbawala('Shyam', 'Andheri');
      ram.addDelivery('A', 'B');
      ram.addDelivery('C', 'D');
      expect(shyam.addDelivery('X', 'Y')).toBe(1);
    });
  });
});
