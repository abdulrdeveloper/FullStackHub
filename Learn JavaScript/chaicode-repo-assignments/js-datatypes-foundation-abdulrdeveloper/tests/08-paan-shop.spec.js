import { createPaanOrder, freezeMenu, updatePrices, mergeDailySpecials } from '../src/08-paan-shop.js';

describe('08 - Paan Shop Menu: Object Transform (8 pts)', () => {
  describe('createPaanOrder', () => {
    test('merges basePaan with customizations', () => {
      const result = createPaanOrder({ type: 'meetha', price: 30 }, { extra: 'gulkand', price: 50 });
      expect(result).toEqual({ type: 'meetha', price: 50, extra: 'gulkand' });
    });

    test('does NOT mutate basePaan', () => {
      const base = { type: 'meetha', price: 30 };
      createPaanOrder(base, { price: 50 });
      expect(base.price).toBe(30);
    });

    test('returns copy of basePaan when customizations is not object', () => {
      const base = { type: 'meetha', price: 30 };
      const result = createPaanOrder(base, 'invalid');
      expect(result).toEqual({ type: 'meetha', price: 30 });
      expect(result).not.toBe(base);
    });

    test('returns {} for null basePaan', () => {
      expect(createPaanOrder(null, { extra: 'gulkand' })).toEqual({});
    });

    test('returns {} for non-object basePaan', () => {
      expect(createPaanOrder('not object', { extra: 'gulkand' })).toEqual({});
    });
  });

  describe('freezeMenu', () => {
    test('returns a frozen object', () => {
      const menu = { meetha: 30, saada: 20 };
      const frozen = freezeMenu(menu);
      expect(Object.isFrozen(frozen)).toBe(true);
    });

    test('frozen object cannot be modified', () => {
      const frozen = freezeMenu({ meetha: 30, saada: 20 });
      expect(() => { frozen.meetha = 100; }).toThrow(TypeError);
      expect(frozen.meetha).toBe(30);
    });

    test('returns {} for null', () => {
      expect(freezeMenu(null)).toEqual({});
    });

    test('returns {} for non-object', () => {
      expect(freezeMenu('not object')).toEqual({});
      expect(freezeMenu(42)).toEqual({});
    });
  });

  describe('updatePrices', () => {
    test('increases all prices by given amount', () => {
      expect(updatePrices({ meetha: 30, saada: 20 }, 10)).toEqual({ meetha: 40, saada: 30 });
    });

    test('works with zero increase', () => {
      expect(updatePrices({ meetha: 30 }, 0)).toEqual({ meetha: 30 });
    });

    test('works with negative increase (discount)', () => {
      expect(updatePrices({ meetha: 30, saada: 20 }, -5)).toEqual({ meetha: 25, saada: 15 });
    });

    test('does NOT mutate original menu', () => {
      const menu = { meetha: 30, saada: 20 };
      updatePrices(menu, 10);
      expect(menu.meetha).toBe(30);
    });

    test('returns {} for non-object menu', () => {
      expect(updatePrices('not object', 10)).toEqual({});
      expect(updatePrices(null, 10)).toEqual({});
    });

    test('returns {} for non-number increase', () => {
      expect(updatePrices({ meetha: 30 }, 'abc')).toEqual({});
    });
  });

  describe('mergeDailySpecials', () => {
    test('merges two menus', () => {
      expect(mergeDailySpecials({ meetha: 30 }, { chocolate: 60 })).toEqual({ meetha: 30, chocolate: 60 });
    });

    test('specials override regular prices', () => {
      expect(mergeDailySpecials({ meetha: 30, saada: 20 }, { meetha: 40 })).toEqual({ meetha: 40, saada: 20 });
    });

    test('does NOT mutate originals', () => {
      const regular = { meetha: 30 };
      const specials = { chocolate: 60 };
      mergeDailySpecials(regular, specials);
      expect(regular).toEqual({ meetha: 30 });
      expect(specials).toEqual({ chocolate: 60 });
    });

    test('treats non-object as empty {}', () => {
      expect(mergeDailySpecials(null, { meetha: 30 })).toEqual({ meetha: 30 });
      expect(mergeDailySpecials({ meetha: 30 }, null)).toEqual({ meetha: 30 });
    });

    test('returns {} when both are non-objects', () => {
      expect(mergeDailySpecials(null, 'abc')).toEqual({});
    });
  });
});
