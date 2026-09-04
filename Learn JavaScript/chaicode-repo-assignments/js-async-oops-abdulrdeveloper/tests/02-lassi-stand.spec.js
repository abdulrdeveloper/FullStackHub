import { LassiStand, isLassiStand } from '../src/02-lassi-stand.js';

describe('02 - Lassi Stand: Constructor Functions & Prototype (7 pts)', () => {
  describe('Constructor and initial properties', () => {
    test('LassiStand creates instance with correct name and city', () => {
      const stand = new LassiStand('Sardar ji', 'Amritsar');
      expect(stand.name).toBe('Sardar ji');
      expect(stand.city).toBe('Amritsar');
    });

    test('LassiStand starts with empty menu and orders', () => {
      const stand = new LassiStand('Sardar ji', 'Amritsar');
      expect(stand.menu).toEqual([]);
      expect(stand.orders).toEqual([]);
    });

    test('methods are on the prototype, not on the instance', () => {
      const stand = new LassiStand('Sardar ji', 'Amritsar');
      expect(stand.hasOwnProperty('addFlavor')).toBe(false);
      expect(typeof LassiStand.prototype.addFlavor).toBe('function');
    });
  });

  describe('addFlavor method', () => {
    test('addFlavor adds a flavor and returns menu length', () => {
      const stand = new LassiStand('Sardar ji', 'Amritsar');
      expect(stand.addFlavor('mango', 40)).toBe(1);
      expect(stand.addFlavor('rose', 35)).toBe(2);
    });

    test('addFlavor rejects duplicate flavors with -1', () => {
      const stand = new LassiStand('Sardar ji', 'Amritsar');
      stand.addFlavor('mango', 40);
      expect(stand.addFlavor('mango', 45)).toBe(-1);
    });

    test('addFlavor rejects non-positive price with -1', () => {
      const stand = new LassiStand('Sardar ji', 'Amritsar');
      expect(stand.addFlavor('plain', 0)).toBe(-1);
      expect(stand.addFlavor('plain', -10)).toBe(-1);
    });
  });

  describe('takeOrder method', () => {
    test('takeOrder creates order and returns auto-incremented id', () => {
      const stand = new LassiStand('Sardar ji', 'Amritsar');
      stand.addFlavor('mango', 40);
      expect(stand.takeOrder('Rahul', 'mango', 2)).toBe(1);
      expect(stand.takeOrder('Priya', 'mango', 1)).toBe(2);
    });

    test('takeOrder calculates correct total', () => {
      const stand = new LassiStand('Sardar ji', 'Amritsar');
      stand.addFlavor('mango', 40);
      stand.takeOrder('Rahul', 'mango', 2);
      expect(stand.orders[0].total).toBe(80);
    });

    test('takeOrder returns -1 for invalid flavor', () => {
      const stand = new LassiStand('Sardar ji', 'Amritsar');
      expect(stand.takeOrder('Rahul', 'mango', 1)).toBe(-1);
    });

    test('takeOrder returns -1 for quantity <= 0', () => {
      const stand = new LassiStand('Sardar ji', 'Amritsar');
      stand.addFlavor('mango', 40);
      expect(stand.takeOrder('Rahul', 'mango', 0)).toBe(-1);
    });
  });

  describe('completeOrder and getRevenue', () => {
    test('completeOrder marks order as completed and returns true', () => {
      const stand = new LassiStand('Sardar ji', 'Amritsar');
      stand.addFlavor('mango', 40);
      stand.takeOrder('Rahul', 'mango', 2);
      expect(stand.completeOrder(1)).toBe(true);
      expect(stand.orders[0].status).toBe('completed');
    });

    test('completeOrder returns false for non-existent order', () => {
      const stand = new LassiStand('Sardar ji', 'Amritsar');
      expect(stand.completeOrder(99)).toBe(false);
    });

    test('completeOrder returns false for already completed order', () => {
      const stand = new LassiStand('Sardar ji', 'Amritsar');
      stand.addFlavor('mango', 40);
      stand.takeOrder('Rahul', 'mango', 2);
      stand.completeOrder(1);
      expect(stand.completeOrder(1)).toBe(false);
    });

    test('getRevenue sums only completed order totals', () => {
      const stand = new LassiStand('Sardar ji', 'Amritsar');
      stand.addFlavor('mango', 40);
      stand.addFlavor('rose', 35);
      stand.takeOrder('Rahul', 'mango', 2);
      stand.takeOrder('Priya', 'rose', 1);
      stand.completeOrder(1);
      expect(stand.getRevenue()).toBe(80);
    });
  });

  describe('getMenu returns a copy', () => {
    test('getMenu returns array matching internal menu', () => {
      const stand = new LassiStand('Sardar ji', 'Amritsar');
      stand.addFlavor('mango', 40);
      const menu = stand.getMenu();
      expect(menu).toEqual([{ flavor: 'mango', price: 40 }]);
    });

    test('modifying getMenu result does not affect internal menu', () => {
      const stand = new LassiStand('Sardar ji', 'Amritsar');
      stand.addFlavor('mango', 40);
      const menu = stand.getMenu();
      menu.push({ flavor: 'kesar', price: 50 });
      expect(stand.getMenu().length).toBe(1);
    });
  });

  describe('isLassiStand function', () => {
    test('isLassiStand returns true for LassiStand instance', () => {
      const stand = new LassiStand('Sardar ji', 'Amritsar');
      expect(isLassiStand(stand)).toBe(true);
    });

    test('isLassiStand returns false for plain object', () => {
      expect(isLassiStand({})).toBe(false);
      expect(isLassiStand({ name: 'fake' })).toBe(false);
    });
  });
});
