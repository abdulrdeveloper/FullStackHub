import { getSeasonActivity } from '../src/12-season-activity.js';

describe('12 - WanderLust: Season & Activity Planner (8 pts)', () => {

  describe('Winter (Dec, Jan, Feb)', () => {
    test('January, -5°C → Winter, skiing', () => {
      const result = getSeasonActivity(1, -5);
      expect(result.season).toBe('Winter');
      expect(result.activity).toBe('skiing');
    });

    test('February, 3°C → Winter, ice skating', () => {
      const result = getSeasonActivity(2, 3);
      expect(result.season).toBe('Winter');
      expect(result.activity).toBe('ice skating');
    });

    test('December, 0°C → Winter, ice skating (0 is >= 0)', () => {
      const result = getSeasonActivity(12, 0);
      expect(result.season).toBe('Winter');
      expect(result.activity).toBe('ice skating');
    });
  });

  describe('Spring (Mar, Apr, May)', () => {
    test('April, 22°C → Spring, hiking', () => {
      const result = getSeasonActivity(4, 22);
      expect(result.season).toBe('Spring');
      expect(result.activity).toBe('hiking');
    });

    test('March, 15°C → Spring, museum visit', () => {
      const result = getSeasonActivity(3, 15);
      expect(result.season).toBe('Spring');
      expect(result.activity).toBe('museum visit');
    });

    test('May, 20°C → Spring, museum visit (20 is <= 20)', () => {
      const result = getSeasonActivity(5, 20);
      expect(result.season).toBe('Spring');
      expect(result.activity).toBe('museum visit');
    });
  });

  describe('Summer (Jun, Jul, Aug)', () => {
    test('July, 38°C → Summer, swimming', () => {
      const result = getSeasonActivity(7, 38);
      expect(result.season).toBe('Summer');
      expect(result.activity).toBe('swimming');
    });

    test('June, 28°C → Summer, cycling', () => {
      const result = getSeasonActivity(6, 28);
      expect(result.season).toBe('Summer');
      expect(result.activity).toBe('cycling');
    });

    test('August, 35°C → Summer, cycling (35 is <= 35)', () => {
      const result = getSeasonActivity(8, 35);
      expect(result.season).toBe('Summer');
      expect(result.activity).toBe('cycling');
    });
  });

  describe('Autumn (Sep, Oct, Nov)', () => {
    test('October, 18°C → Autumn, nature walk', () => {
      const result = getSeasonActivity(10, 18);
      expect(result.season).toBe('Autumn');
      expect(result.activity).toBe('nature walk');
    });

    test('November, 10°C → Autumn, reading at a cafe', () => {
      const result = getSeasonActivity(11, 10);
      expect(result.season).toBe('Autumn');
      expect(result.activity).toBe('reading at a cafe');
    });

    test('September, 15°C → Autumn, reading at a cafe (15 is <= 15)', () => {
      const result = getSeasonActivity(9, 15);
      expect(result.season).toBe('Autumn');
      expect(result.activity).toBe('reading at a cafe');
    });
  });

  describe('Invalid month', () => {
    test('Month 0 → null', () => {
      expect(getSeasonActivity(0, 20)).toBeNull();
    });

    test('Month 13 → null', () => {
      expect(getSeasonActivity(13, 20)).toBeNull();
    });

    test('Month -1 → null', () => {
      expect(getSeasonActivity(-1, 15)).toBeNull();
    });
  });
});
