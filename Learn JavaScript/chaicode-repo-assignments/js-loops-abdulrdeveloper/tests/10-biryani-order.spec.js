import { biryaniBatchProcessor } from '../src/10-biryani-order.js';

describe('10 - Paradise Biryani Batch System (8 pts)', () => {

  describe('Basic batch processing', () => {
    test('Single order within one batch', () => {
      expect(biryaniBatchProcessor([3])).toEqual({
        totalBatches: 1, totalPlates: 3, ordersProcessed: 1
      });
    });

    test('Single order exactly one batch (5 plates)', () => {
      expect(biryaniBatchProcessor([5])).toEqual({
        totalBatches: 1, totalPlates: 5, ordersProcessed: 1
      });
    });

    test('Single order needs multiple batches', () => {
      expect(biryaniBatchProcessor([12])).toEqual({
        totalBatches: 3, totalPlates: 12, ordersProcessed: 1
      });
    });

    test('Multiple small orders', () => {
      expect(biryaniBatchProcessor([3, 2, 4])).toEqual({
        totalBatches: 3, totalPlates: 9, ordersProcessed: 3
      });
    });

    test('Multiple orders requiring multiple batches', () => {
      expect(biryaniBatchProcessor([3, 7, 2])).toEqual({
        totalBatches: 4, totalPlates: 12, ordersProcessed: 3
      });
    });

    test('Order of exactly 10 plates', () => {
      expect(biryaniBatchProcessor([10])).toEqual({
        totalBatches: 2, totalPlates: 10, ordersProcessed: 1
      });
    });

    test('Two large orders', () => {
      expect(biryaniBatchProcessor([5, 10])).toEqual({
        totalBatches: 3, totalPlates: 15, ordersProcessed: 2
      });
    });
  });

  describe('Skipping invalid orders', () => {
    test('Skips zero-plate orders', () => {
      expect(biryaniBatchProcessor([3, 0, 2])).toEqual({
        totalBatches: 2, totalPlates: 5, ordersProcessed: 2
      });
    });

    test('Skips negative orders', () => {
      expect(biryaniBatchProcessor([5, -3, 2])).toEqual({
        totalBatches: 2, totalPlates: 7, ordersProcessed: 2
      });
    });

    test('Skips decimal orders', () => {
      expect(biryaniBatchProcessor([4, 2.5, 6])).toEqual({
        totalBatches: 3, totalPlates: 10, ordersProcessed: 2
      });
    });

    test('Skips non-number orders', () => {
      expect(biryaniBatchProcessor([3, "five", 2])).toEqual({
        totalBatches: 2, totalPlates: 5, ordersProcessed: 2
      });
    });

    test('All invalid orders', () => {
      expect(biryaniBatchProcessor([0, -1, 2.5, "abc"])).toEqual({
        totalBatches: 0, totalPlates: 0, ordersProcessed: 0
      });
    });
  });

  describe('Edge cases', () => {
    test('Single plate order', () => {
      expect(biryaniBatchProcessor([1])).toEqual({
        totalBatches: 1, totalPlates: 1, ordersProcessed: 1
      });
    });

    test('Order of 6 plates = 2 batches', () => {
      expect(biryaniBatchProcessor([6])).toEqual({
        totalBatches: 2, totalPlates: 6, ordersProcessed: 1
      });
    });
  });

  describe('Validation', () => {
    test('Empty array returns zeroed object', () => {
      expect(biryaniBatchProcessor([])).toEqual({
        totalBatches: 0, totalPlates: 0, ordersProcessed: 0
      });
    });

    test('Non-array returns zeroed object', () => {
      expect(biryaniBatchProcessor("orders")).toEqual({
        totalBatches: 0, totalPlates: 0, ordersProcessed: 0
      });
    });

    test('null returns zeroed object', () => {
      expect(biryaniBatchProcessor(null)).toEqual({
        totalBatches: 0, totalPlates: 0, ordersProcessed: 0
      });
    });
  });
});
