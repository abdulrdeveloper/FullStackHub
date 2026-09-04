import { TempleQueue } from '../src/11-temple-queue.js';

describe('11 - Temple Queue: Static Methods, Getters/Setters, Symbol.iterator (9 pts)', () => {
  describe('Constructor and getters', () => {
    test('TempleQueue initializes with templeName and empty queue', () => {
      const queue = new TempleQueue('Kashi Vishwanath', 50);
      expect(queue.templeName).toBe('Kashi Vishwanath');
      expect(queue.length).toBe(0);
      expect(queue.isEmpty).toBe(true);
    });

    test('vipEnabled getter returns false by default', () => {
      const queue = new TempleQueue('Kashi Vishwanath', 50);
      expect(queue.vipEnabled).toBe(false);
    });
  });

  describe('vipEnabled setter', () => {
    test('vipEnabled setter accepts boolean values', () => {
      const queue = new TempleQueue('Kashi Vishwanath', 50);
      queue.vipEnabled = true;
      expect(queue.vipEnabled).toBe(true);
      queue.vipEnabled = false;
      expect(queue.vipEnabled).toBe(false);
    });

    test('vipEnabled setter throws TypeError for non-boolean', () => {
      const queue = new TempleQueue('Kashi Vishwanath', 50);
      expect(() => { queue.vipEnabled = 'yes'; }).toThrow(TypeError);
      expect(() => { queue.vipEnabled = 1; }).toThrow(TypeError);
    });
  });

  describe('enqueue method', () => {
    test('enqueue adds regular devotee to back of queue', () => {
      const queue = new TempleQueue('Kashi Vishwanath', 50);
      const devotee = queue.enqueue('Ram', 'regular');
      expect(devotee.name).toBe('Ram');
      expect(devotee.type).toBe('regular');
      expect(devotee).toHaveProperty('joinedAt');
      expect(queue.length).toBe(1);
    });

    test('enqueue adds VIP to front when vipEnabled is true', () => {
      const queue = new TempleQueue('Kashi Vishwanath', 50);
      queue.enqueue('Ram', 'regular');
      queue.enqueue('Shyam', 'regular');
      queue.vipEnabled = true;
      queue.enqueue('VIP Sharma', 'vip');
      expect(queue.peek().name).toBe('VIP Sharma');
    });

    test('enqueue adds VIP to back when vipEnabled is false', () => {
      const queue = new TempleQueue('Kashi Vishwanath', 50);
      queue.enqueue('Ram', 'regular');
      queue.enqueue('VIP Sharma', 'vip');
      expect(queue.peek().name).toBe('Ram');
    });

    test('enqueue returns null for invalid type', () => {
      const queue = new TempleQueue('Kashi Vishwanath', 50);
      expect(queue.enqueue('Ram', 'premium')).toBeNull();
    });

    test('enqueue returns null for empty/falsy name', () => {
      const queue = new TempleQueue('Kashi Vishwanath', 50);
      expect(queue.enqueue('', 'regular')).toBeNull();
      expect(queue.enqueue(null, 'regular')).toBeNull();
    });

    test('enqueue returns null when queue is full', () => {
      const queue = new TempleQueue('Kashi Vishwanath', 2);
      queue.enqueue('Ram', 'regular');
      queue.enqueue('Shyam', 'regular');
      expect(queue.enqueue('Mohan', 'regular')).toBeNull();
    });
  });

  describe('dequeue and peek methods', () => {
    test('dequeue removes and returns first devotee', () => {
      const queue = new TempleQueue('Kashi Vishwanath', 50);
      queue.enqueue('Ram', 'regular');
      queue.enqueue('Shyam', 'regular');
      const devotee = queue.dequeue();
      expect(devotee.name).toBe('Ram');
      expect(queue.length).toBe(1);
    });

    test('dequeue returns null for empty queue', () => {
      const queue = new TempleQueue('Kashi Vishwanath', 50);
      expect(queue.dequeue()).toBeNull();
    });

    test('peek returns first devotee without removing', () => {
      const queue = new TempleQueue('Kashi Vishwanath', 50);
      queue.enqueue('Ram', 'regular');
      expect(queue.peek().name).toBe('Ram');
      expect(queue.length).toBe(1);
    });

    test('peek returns null for empty queue', () => {
      const queue = new TempleQueue('Kashi Vishwanath', 50);
      expect(queue.peek()).toBeNull();
    });
  });

  describe('contains and toArray methods', () => {
    test('contains returns true for existing devotee', () => {
      const queue = new TempleQueue('Kashi Vishwanath', 50);
      queue.enqueue('Ram', 'regular');
      expect(queue.contains('Ram')).toBe(true);
    });

    test('contains returns false for non-existent devotee', () => {
      const queue = new TempleQueue('Kashi Vishwanath', 50);
      expect(queue.contains('Ghost')).toBe(false);
    });

    test('toArray returns a copy of the devotees array', () => {
      const queue = new TempleQueue('Kashi Vishwanath', 50);
      queue.enqueue('Ram', 'regular');
      const arr = queue.toArray();
      arr.push({ name: 'Fake' });
      expect(queue.length).toBe(1);
    });
  });

  describe('Static methods', () => {
    test('TempleQueue.fromArray creates queue from name array', () => {
      const queue = TempleQueue.fromArray('Test Mandir', 10, ['A', 'B', 'C']);
      expect(queue.length).toBe(3);
      expect(queue.templeName).toBe('Test Mandir');
      expect(queue.peek().name).toBe('A');
      expect(queue.peek().type).toBe('regular');
    });

    test('TempleQueue.fromArray returns empty queue for non-array input', () => {
      const queue = TempleQueue.fromArray('Test Mandir', 10, 'not-array');
      expect(queue.length).toBe(0);
    });

    test('TempleQueue.merge combines two queues', () => {
      const q1 = new TempleQueue('Mandir 1', 10);
      q1.enqueue('A', 'regular');
      q1.enqueue('B', 'regular');
      const q2 = new TempleQueue('Mandir 2', 10);
      q2.enqueue('C', 'regular');
      const merged = TempleQueue.merge(q1, q2);
      expect(merged.templeName).toBe('Mandir 1-Mandir 2');
      expect(merged.length).toBe(3);
    });
  });

  describe('Symbol.iterator', () => {
    test('queue is iterable with for...of', () => {
      const queue = new TempleQueue('Mandir', 10);
      queue.enqueue('A', 'regular');
      queue.enqueue('B', 'regular');
      const names = [];
      for (const devotee of queue) {
        names.push(devotee.name);
      }
      expect(names).toEqual(['A', 'B']);
    });

    test('iteration is non-destructive', () => {
      const queue = new TempleQueue('Mandir', 10);
      queue.enqueue('A', 'regular');
      queue.enqueue('B', 'regular');
      const spread = [...queue];
      expect(spread.length).toBe(2);
      expect(queue.length).toBe(2);
    });
  });
});
