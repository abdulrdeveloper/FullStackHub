import {
  prepareOrder,
  prepareBatch,
  getFirstReady,
  prepareSafeBatch,
  deliverWithTimeout,
  batchWithRetry,
} from '../src/09-swiggy-batch.js';

describe('09 - Swiggy Batch: Promise.all, Promise.race, Promise.allSettled (9 pts)', () => {
  describe('prepareOrder function', () => {
    test('prepareOrder resolves with prepared item object', async () => {
      const result = await prepareOrder('Biryani', 100);
      expect(result).toEqual({ item: 'Biryani', ready: true, prepTime: 100 });
    });

    test('prepareOrder rejects for empty item name', async () => {
      await expect(prepareOrder('', 100)).rejects.toThrow('Item name required!');
      await expect(prepareOrder(null, 100)).rejects.toThrow('Item name required!');
      await expect(prepareOrder(undefined, 100)).rejects.toThrow('Item name required!');
    });

    test('prepareOrder rejects for invalid prep time', async () => {
      await expect(prepareOrder('Biryani', 0)).rejects.toThrow('Invalid prep time!');
      await expect(prepareOrder('Biryani', -5)).rejects.toThrow('Invalid prep time!');
      await expect(prepareOrder('Biryani', 'fast')).rejects.toThrow('Invalid prep time!');
    });
  });

  describe('prepareBatch function (Promise.all)', () => {
    test('prepareBatch resolves with array of all prepared items', async () => {
      const items = [
        { name: 'Dosa', prepTime: 50 },
        { name: 'Idli', prepTime: 30 },
      ];
      const result = await prepareBatch(items);
      expect(result).toEqual([
        { item: 'Dosa', ready: true, prepTime: 50 },
        { item: 'Idli', ready: true, prepTime: 30 },
      ]);
    });

    test('prepareBatch rejects if any item fails', async () => {
      const items = [
        { name: 'Dosa', prepTime: 50 },
        { name: '', prepTime: 30 },
      ];
      await expect(prepareBatch(items)).rejects.toThrow('Item name required!');
    });

    test('prepareBatch resolves with empty array for empty input', async () => {
      const result = await prepareBatch([]);
      expect(result).toEqual([]);
    });
  });

  describe('getFirstReady function (Promise.race)', () => {
    test('getFirstReady resolves with fastest item', async () => {
      const items = [
        { name: 'Dosa', prepTime: 200 },
        { name: 'Maggi', prepTime: 50 },
      ];
      const result = await getFirstReady(items);
      expect(result).toEqual({ item: 'Maggi', ready: true, prepTime: 50 });
    });

    test('getFirstReady rejects for empty items array', async () => {
      await expect(getFirstReady([])).rejects.toThrow('No items to prepare!');
    });
  });

  describe('prepareSafeBatch function (Promise.allSettled)', () => {
    test('prepareSafeBatch resolves with all results including failures', async () => {
      const items = [
        { name: 'Pizza', prepTime: 50 },
        { name: '', prepTime: 50 },
      ];
      const results = await prepareSafeBatch(items);
      expect(results.length).toBe(2);
      expect(results[0].status).toBe('fulfilled');
      expect(results[0].value).toEqual({ item: 'Pizza', ready: true, prepTime: 50 });
      expect(results[1].status).toBe('rejected');
      expect(results[1].reason).toBe('Item name required!');
    });

    test('prepareSafeBatch never rejects', async () => {
      const items = [
        { name: '', prepTime: 50 },
        { name: null, prepTime: 0 },
      ];
      const results = await prepareSafeBatch(items);
      expect(results.every(r => r.status === 'rejected')).toBe(true);
    });

    test('prepareSafeBatch resolves with empty array for empty input', async () => {
      const results = await prepareSafeBatch([]);
      expect(results).toEqual([]);
    });
  });

  describe('deliverWithTimeout function', () => {
    test('deliverWithTimeout resolves when order completes before timeout', async () => {
      const orderPromise = prepareOrder('Biryani', 50);
      const result = await deliverWithTimeout(orderPromise, 500);
      expect(result).toEqual({ item: 'Biryani', ready: true, prepTime: 50 });
    });

    test('deliverWithTimeout rejects when timeout fires first', async () => {
      const orderPromise = prepareOrder('Biryani', 500);
      await expect(deliverWithTimeout(orderPromise, 10)).rejects.toThrow('Delivery timeout!');
    });

    test('deliverWithTimeout rejects for invalid timeout value', async () => {
      const orderPromise = prepareOrder('Biryani', 50);
      await expect(deliverWithTimeout(orderPromise, 0)).rejects.toThrow('Invalid timeout!');
      await expect(deliverWithTimeout(orderPromise, -1)).rejects.toThrow('Invalid timeout!');
    });
  });

  describe('batchWithRetry function', () => {
    test('batchWithRetry succeeds on first attempt for valid items', async () => {
      const items = [
        { name: 'Dosa', prepTime: 30 },
        { name: 'Idli', prepTime: 20 },
      ];
      const result = await batchWithRetry(items, 2);
      expect(result.length).toBe(2);
    });

    test('batchWithRetry throws after all retries fail', async () => {
      const items = [
        { name: '', prepTime: 50 },
      ];
      await expect(batchWithRetry(items, 2)).rejects.toThrow('Item name required!');
    });

    test('batchWithRetry with 0 retries means just one attempt', async () => {
      const items = [
        { name: '', prepTime: 50 },
      ];
      await expect(batchWithRetry(items, 0)).rejects.toThrow('Item name required!');
    });
  });
});
