import { DabbaService } from '../src/03-dabba-delivery.js';

describe('03 - Dabba Delivery: ES6 Classes (8 pts)', () => {
  describe('Constructor and initial state', () => {
    test('DabbaService initializes with correct serviceName and area', () => {
      const service = new DabbaService('Raju Dabba', 'Dadar');
      expect(service.serviceName).toBe('Raju Dabba');
      expect(service.area).toBe('Dadar');
    });

    test('DabbaService is an instance of DabbaService class', () => {
      const service = new DabbaService('Raju Dabba', 'Dadar');
      expect(service instanceof DabbaService).toBe(true);
    });
  });

  describe('addCustomer method', () => {
    test('addCustomer creates customer with correct fields', () => {
      const service = new DabbaService('Raju Dabba', 'Dadar');
      const customer = service.addCustomer('Amit', 'Andheri West', 'veg');
      expect(customer.id).toBe(1);
      expect(customer.name).toBe('Amit');
      expect(customer.address).toBe('Andheri West');
      expect(customer.mealPreference).toBe('veg');
      expect(customer.active).toBe(true);
      expect(customer.delivered).toBe(false);
    });

    test('addCustomer auto-increments ids', () => {
      const service = new DabbaService('Raju Dabba', 'Dadar');
      const c1 = service.addCustomer('Amit', 'Andheri', 'veg');
      const c2 = service.addCustomer('Priya', 'Bandra', 'jain');
      expect(c1.id).toBe(1);
      expect(c2.id).toBe(2);
    });

    test('addCustomer returns null for invalid meal preference', () => {
      const service = new DabbaService('Raju Dabba', 'Dadar');
      expect(service.addCustomer('Amit', 'Andheri', 'vegan')).toBeNull();
    });

    test('addCustomer returns null for duplicate name', () => {
      const service = new DabbaService('Raju Dabba', 'Dadar');
      service.addCustomer('Amit', 'Andheri', 'veg');
      expect(service.addCustomer('Amit', 'Bandra', 'nonveg')).toBeNull();
    });
  });

  describe('removeCustomer method', () => {
    test('removeCustomer sets active to false and returns true', () => {
      const service = new DabbaService('Raju Dabba', 'Dadar');
      service.addCustomer('Amit', 'Andheri', 'veg');
      expect(service.removeCustomer('Amit')).toBe(true);
      expect(service.getCustomer('Amit').active).toBe(false);
    });

    test('removeCustomer returns false for non-existent customer', () => {
      const service = new DabbaService('Raju Dabba', 'Dadar');
      expect(service.removeCustomer('Ghost')).toBe(false);
    });

    test('removeCustomer returns false for already inactive customer', () => {
      const service = new DabbaService('Raju Dabba', 'Dadar');
      service.addCustomer('Amit', 'Andheri', 'veg');
      service.removeCustomer('Amit');
      expect(service.removeCustomer('Amit')).toBe(false);
    });
  });

  describe('createDeliveryBatch method', () => {
    test('createDeliveryBatch returns deliveries for active customers', () => {
      const service = new DabbaService('Raju Dabba', 'Dadar');
      service.addCustomer('Amit', 'Andheri', 'veg');
      service.addCustomer('Priya', 'Bandra', 'jain');
      const batch = service.createDeliveryBatch();
      expect(batch.length).toBe(2);
      expect(batch[0].customerId).toBe(1);
      expect(batch[0].name).toBe('Amit');
      expect(batch[0].mealPreference).toBe('veg');
      expect(batch[0]).toHaveProperty('batchTime');
    });

    test('createDeliveryBatch excludes inactive customers', () => {
      const service = new DabbaService('Raju Dabba', 'Dadar');
      service.addCustomer('Amit', 'Andheri', 'veg');
      service.addCustomer('Priya', 'Bandra', 'jain');
      service.removeCustomer('Amit');
      const batch = service.createDeliveryBatch();
      expect(batch.length).toBe(1);
      expect(batch[0].name).toBe('Priya');
    });

    test('createDeliveryBatch returns empty array if no active customers', () => {
      const service = new DabbaService('Raju Dabba', 'Dadar');
      expect(service.createDeliveryBatch()).toEqual([]);
    });
  });

  describe('markDelivered and getDailyReport', () => {
    test('markDelivered returns true for active customer', () => {
      const service = new DabbaService('Raju Dabba', 'Dadar');
      service.addCustomer('Amit', 'Andheri', 'veg');
      expect(service.markDelivered(1)).toBe(true);
    });

    test('markDelivered returns false for non-existent or inactive customer', () => {
      const service = new DabbaService('Raju Dabba', 'Dadar');
      expect(service.markDelivered(99)).toBe(false);
    });

    test('getDailyReport returns correct counts for active customers', () => {
      const service = new DabbaService('Raju Dabba', 'Dadar');
      service.addCustomer('Amit', 'Andheri', 'veg');
      service.addCustomer('Priya', 'Bandra', 'jain');
      service.markDelivered(1);
      const report = service.getDailyReport();
      expect(report).toEqual({
        totalCustomers: 2,
        delivered: 1,
        pending: 1,
        mealBreakdown: { veg: 1, nonveg: 0, jain: 1 },
      });
    });

    test('getDailyReport excludes inactive customers from all counts', () => {
      const service = new DabbaService('Raju Dabba', 'Dadar');
      service.addCustomer('Amit', 'Andheri', 'veg');
      service.addCustomer('Priya', 'Bandra', 'jain');
      service.removeCustomer('Amit');
      const report = service.getDailyReport();
      expect(report.totalCustomers).toBe(1);
      expect(report.mealBreakdown.veg).toBe(0);
    });
  });

  describe('getCustomer method', () => {
    test('getCustomer returns customer object by name', () => {
      const service = new DabbaService('Raju Dabba', 'Dadar');
      service.addCustomer('Amit', 'Andheri', 'veg');
      const customer = service.getCustomer('Amit');
      expect(customer.name).toBe('Amit');
      expect(customer.id).toBe(1);
    });

    test('getCustomer returns null for non-existent customer', () => {
      const service = new DabbaService('Raju Dabba', 'Dadar');
      expect(service.getCustomer('Ghost')).toBeNull();
    });

    test('getCustomer returns inactive customers too', () => {
      const service = new DabbaService('Raju Dabba', 'Dadar');
      service.addCustomer('Amit', 'Andheri', 'veg');
      service.removeCustomer('Amit');
      const customer = service.getCustomer('Amit');
      expect(customer).not.toBeNull();
      expect(customer.active).toBe(false);
    });
  });
});
