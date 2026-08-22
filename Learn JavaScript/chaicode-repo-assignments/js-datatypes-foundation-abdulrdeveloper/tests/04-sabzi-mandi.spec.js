import { addToCart, addUrgentItem, removeLastItem, isInCart, mergeCarts } from '../src/04-sabzi-mandi.js';

describe('04 - Sabzi Mandi Shopping Cart: Array Basics (8 pts)', () => {
  describe('addToCart', () => {
    test('adds item and returns new length', () => {
      const cart = ['tamatar', 'pyaaz'];
      expect(addToCart(cart, 'mirchi')).toBe(3);
    });

    test('item is added at the end', () => {
      const cart = ['tamatar', 'pyaaz'];
      addToCart(cart, 'mirchi');
      expect(cart[2]).toBe('mirchi');
    });

    test('returns -1 for non-array cart', () => {
      expect(addToCart('not array', 'mirchi')).toBe(-1);
      expect(addToCart(null, 'mirchi')).toBe(-1);
    });

    test('does not add empty string item', () => {
      const cart = ['tamatar'];
      expect(addToCart(cart, '')).toBe(1);
      expect(cart).toEqual(['tamatar']);
    });

    test('does not add non-string item', () => {
      const cart = ['tamatar'];
      expect(addToCart(cart, 123)).toBe(1);
    });
  });

  describe('addUrgentItem', () => {
    test('adds item at the beginning', () => {
      const cart = ['pyaaz', 'mirchi'];
      const result = addUrgentItem(cart, 'dhaniya');
      expect(result[0]).toBe('dhaniya');
      expect(result).toEqual(['dhaniya', 'pyaaz', 'mirchi']);
    });

    test('returns [] for non-array cart', () => {
      expect(addUrgentItem('not array', 'item')).toEqual([]);
    });

    test('returns cart unchanged for invalid item', () => {
      const cart = ['tamatar'];
      expect(addUrgentItem(cart, 123)).toEqual(['tamatar']);
      expect(addUrgentItem(cart, '')).toEqual(['tamatar']);
    });
  });

  describe('removeLastItem', () => {
    test('removes and returns last item', () => {
      const cart = ['tamatar', 'pyaaz', 'mirchi'];
      expect(removeLastItem(cart)).toBe('mirchi');
      expect(cart).toEqual(['tamatar', 'pyaaz']);
    });

    test('returns undefined for empty array', () => {
      expect(removeLastItem([])).toBeUndefined();
    });

    test('returns undefined for non-array', () => {
      expect(removeLastItem('not array')).toBeUndefined();
      expect(removeLastItem(null)).toBeUndefined();
    });
  });

  describe('isInCart', () => {
    test('returns true when item is in cart', () => {
      expect(isInCart(['tamatar', 'pyaaz'], 'pyaaz')).toBe(true);
    });

    test('returns false when item is not in cart', () => {
      expect(isInCart(['tamatar', 'pyaaz'], 'mirchi')).toBe(false);
    });

    test('returns false for non-array cart', () => {
      expect(isInCart('not array', 'item')).toBe(false);
      expect(isInCart(null, 'item')).toBe(false);
    });

    test('returns false for empty cart', () => {
      expect(isInCart([], 'tamatar')).toBe(false);
    });
  });

  describe('mergeCarts', () => {
    test('merges two carts', () => {
      expect(mergeCarts(['tamatar'], ['mirchi', 'adrak'])).toEqual(['tamatar', 'mirchi', 'adrak']);
    });

    test('merges with empty cart', () => {
      expect(mergeCarts(['tamatar'], [])).toEqual(['tamatar']);
    });

    test('treats non-array as empty', () => {
      expect(mergeCarts('not array', ['mirchi'])).toEqual(['mirchi']);
      expect(mergeCarts(['tamatar'], null)).toEqual(['tamatar']);
    });

    test('treats both non-arrays as empty', () => {
      expect(mergeCarts(null, undefined)).toEqual([]);
    });
  });
});
