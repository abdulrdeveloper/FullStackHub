import { orderChai, checkIngredients, prepareChaiWithTimeout, processChaiQueue } from '../src/06-chai-promise.js';

describe('06 - Chai Promise: Promise Creation (9 pts)', () => {
  describe('orderChai function', () => {
    test('orderChai resolves with correct object for valid order', async () => {
      const result = await orderChai('masala', 2);
      expect(result).toEqual({ type: 'masala', quantity: 2, total: 50 });
    });

    test('orderChai resolves for all valid chai types', async () => {
      expect((await orderChai('cutting', 1)).total).toBe(10);
      expect((await orderChai('special', 1)).total).toBe(20);
      expect((await orderChai('ginger', 1)).total).toBe(15);
      expect((await orderChai('masala', 1)).total).toBe(25);
    });

    test('orderChai rejects for invalid chai type', async () => {
      await expect(orderChai('green', 1)).rejects.toThrow('Yeh chai available nahi hai!');
    });

    test('orderChai rejects for quantity <= 0', async () => {
      await expect(orderChai('masala', 0)).rejects.toThrow('Kitni chai chahiye bhai?');
      await expect(orderChai('masala', -1)).rejects.toThrow('Kitni chai chahiye bhai?');
    });

    test('orderChai rejects for non-number quantity', async () => {
      await expect(orderChai('masala', 'two')).rejects.toThrow('Kitni chai chahiye bhai?');
    });
  });

  describe('checkIngredients function', () => {
    test('checkIngredients resolves for valid ingredient', async () => {
      const result = await checkIngredients('milk');
      expect(result).toEqual({ ingredient: 'milk', available: true });
    });

    test('checkIngredients resolves for all valid ingredients', async () => {
      for (const ing of ['tea', 'milk', 'sugar', 'ginger', 'cardamom']) {
        const result = await checkIngredients(ing);
        expect(result.available).toBe(true);
      }
    });

    test('checkIngredients rejects for unavailable ingredient', async () => {
      await expect(checkIngredients('saffron')).rejects.toThrow('saffron khatam ho gaya!');
    });
  });

  describe('prepareChaiWithTimeout function', () => {
    test('prepareChaiWithTimeout resolves when chai is ready before timeout', async () => {
      const result = await prepareChaiWithTimeout('masala', 500);
      expect(result.type).toBe('masala');
    });

    test('prepareChaiWithTimeout rejects when timeout fires first', async () => {
      await expect(prepareChaiWithTimeout('masala', 10)).rejects.toThrow(
        'Bahut der ho gayi, chai nahi bani!'
      );
    });

    test('prepareChaiWithTimeout rejects for invalid chai type even with long timeout', async () => {
      await expect(prepareChaiWithTimeout('green', 5000)).rejects.toThrow(
        'Yeh chai available nahi hai!'
      );
    });
  });

  describe('processChaiQueue function', () => {
    test('processChaiQueue resolves with results for all orders', async () => {
      const results = await processChaiQueue([
        { type: 'masala', quantity: 1 },
        { type: 'cutting', quantity: 2 },
      ]);
      expect(results.length).toBe(2);
      expect(results[0].status).toBe('fulfilled');
      expect(results[0].value).toEqual({ type: 'masala', quantity: 1, total: 25 });
      expect(results[1].status).toBe('fulfilled');
      expect(results[1].value).toEqual({ type: 'cutting', quantity: 2, total: 20 });
    });

    test('processChaiQueue handles mixed valid and invalid orders', async () => {
      const results = await processChaiQueue([
        { type: 'masala', quantity: 1 },
        { type: 'invalid', quantity: 2 },
      ]);
      expect(results.length).toBe(2);
      expect(results[0].status).toBe('fulfilled');
      expect(results[1].status).toBe('rejected');
      expect(results[1].reason).toBe('Yeh chai available nahi hai!');
    });

    test('processChaiQueue returns empty array for empty input', async () => {
      const results = await processChaiQueue([]);
      expect(results).toEqual([]);
    });

    test('processChaiQueue handles all invalid orders', async () => {
      const results = await processChaiQueue([
        { type: 'invalid1', quantity: 1 },
        { type: 'invalid2', quantity: 1 },
      ]);
      expect(results.every(r => r.status === 'rejected')).toBe(true);
    });
  });
});
