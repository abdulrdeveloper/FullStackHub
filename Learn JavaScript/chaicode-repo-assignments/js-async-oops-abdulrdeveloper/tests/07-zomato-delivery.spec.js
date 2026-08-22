import {
  placeOrder,
  confirmOrder,
  assignRider,
  deliverOrder,
  processDelivery,
  processMultipleOrders,
} from '../src/07-zomato-delivery.js';

describe('07 - Zomato Delivery: Promise Chaining (9 pts)', () => {
  describe('placeOrder function', () => {
    test('placeOrder resolves with order object for valid inputs', async () => {
      const order = await placeOrder('Biryani House', ['biryani', 'raita']);
      expect(order.restaurant).toBe('Biryani House');
      expect(order.items).toEqual(['biryani', 'raita']);
      expect(order.status).toBe('placed');
      expect(order).toHaveProperty('orderId');
      expect(order).toHaveProperty('timestamp');
    });

    test('placeOrder rejects for empty restaurant name', async () => {
      await expect(placeOrder('', ['biryani'])).rejects.toThrow('Invalid order details!');
    });

    test('placeOrder rejects for empty items array', async () => {
      await expect(placeOrder('Biryani House', [])).rejects.toThrow('Invalid order details!');
    });
  });

  describe('confirmOrder function', () => {
    test('confirmOrder changes status to confirmed and adds estimatedTime', async () => {
      const order = await placeOrder('Biryani House', ['biryani']);
      const confirmed = await confirmOrder(order);
      expect(confirmed.status).toBe('confirmed');
      expect(confirmed.estimatedTime).toBe(30);
    });

    test('confirmOrder rejects for order without placed status', async () => {
      await expect(confirmOrder({ orderId: 1, status: 'confirmed' })).rejects.toThrow(
        'Order cannot be confirmed!'
      );
    });

    test('confirmOrder rejects for order without orderId', async () => {
      await expect(confirmOrder({ status: 'placed' })).rejects.toThrow(
        'Order cannot be confirmed!'
      );
    });
  });

  describe('assignRider function', () => {
    test('assignRider sets status to assigned and adds rider', async () => {
      const order = await placeOrder('Biryani House', ['biryani']);
      const confirmed = await confirmOrder(order);
      const assigned = await assignRider(confirmed);
      expect(assigned.status).toBe('assigned');
      expect(assigned).toHaveProperty('rider');
      expect(['Rahul', 'Priya', 'Amit', 'Neha', 'Vikram']).toContain(assigned.rider);
    });

    test('assignRider rejects if order is not confirmed', async () => {
      await expect(assignRider({ status: 'placed' })).rejects.toThrow('Order not confirmed yet!');
    });
  });

  describe('deliverOrder function', () => {
    test('deliverOrder sets status to delivered with deliveredAt', async () => {
      const order = await placeOrder('Biryani House', ['biryani']);
      const confirmed = await confirmOrder(order);
      const assigned = await assignRider(confirmed);
      const delivered = await deliverOrder(assigned);
      expect(delivered.status).toBe('delivered');
      expect(delivered).toHaveProperty('deliveredAt');
    });

    test('deliverOrder rejects if no rider assigned', async () => {
      await expect(deliverOrder({ status: 'confirmed' })).rejects.toThrow('No rider assigned!');
    });
  });

  describe('processDelivery full pipeline', () => {
    test('processDelivery returns delivered order for valid inputs', async () => {
      const result = await processDelivery('Pizza Palace', ['pizza']);
      expect(result.status).toBe('delivered');
      expect(result.restaurant).toBe('Pizza Palace');
      expect(result).toHaveProperty('rider');
      expect(result).toHaveProperty('deliveredAt');
    });

    test('processDelivery returns error object for invalid inputs', async () => {
      const result = await processDelivery('', []);
      expect(result.status).toBe('failed');
      expect(result.error).toBe('Invalid order details!');
    });
  });

  describe('processMultipleOrders function', () => {
    test('processMultipleOrders handles multiple valid orders', async () => {
      const results = await processMultipleOrders([
        { restaurant: 'Dosa Corner', items: ['dosa'] },
        { restaurant: 'Pizza Place', items: ['pizza'] },
      ]);
      expect(results.length).toBe(2);
      expect(results[0].status).toBe('fulfilled');
      expect(results[0].value.status).toBe('delivered');
    });

    test('processMultipleOrders handles mixed valid/invalid orders', async () => {
      const results = await processMultipleOrders([
        { restaurant: 'Dosa Corner', items: ['dosa'] },
        { restaurant: '', items: [] },
      ]);
      expect(results.length).toBe(2);
      expect(results[0].status).toBe('fulfilled');
      expect(results[1].status).toBe('fulfilled');
      expect(results[1].value.status).toBe('failed');
    });
  });
});
