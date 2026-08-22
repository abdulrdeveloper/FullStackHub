import { sabziMandiBill } from '../src/05-sabzi-mandi.js';

describe('05 - Amma ki Sabzi Mandi Shopping (8 pts)', () => {

  describe('Basic shopping', () => {
    test('Single item available and affordable', () => {
      expect(sabziMandiBill(
        [{ name: "aloo", qty: 2 }],
        { aloo: 30 }
      )).toEqual({
        items: [{ name: "aloo", qty: 2, cost: 60 }],
        totalBill: 60
      });
    });

    test('Multiple items all available and affordable', () => {
      expect(sabziMandiBill(
        [{ name: "aloo", qty: 2 }, { name: "pyaaz", qty: 1 }],
        { aloo: 30, pyaaz: 40 }
      )).toEqual({
        items: [
          { name: "aloo", qty: 2, cost: 60 },
          { name: "pyaaz", qty: 1, cost: 40 }
        ],
        totalBill: 100
      });
    });

    test('Item at exactly Rs 80/kg is included', () => {
      expect(sabziMandiBill(
        [{ name: "tamatar", qty: 3 }],
        { tamatar: 80 }
      )).toEqual({
        items: [{ name: "tamatar", qty: 3, cost: 240 }],
        totalBill: 240
      });
    });
  });

  describe('Skipping items', () => {
    test('Skips item not in priceList', () => {
      expect(sabziMandiBill(
        [{ name: "aloo", qty: 2 }, { name: "kela", qty: 1 }],
        { aloo: 30 }
      )).toEqual({
        items: [{ name: "aloo", qty: 2, cost: 60 }],
        totalBill: 60
      });
    });

    test('Skips item priced above Rs 80/kg', () => {
      expect(sabziMandiBill(
        [{ name: "aloo", qty: 2 }, { name: "shimla_mirch", qty: 1 }],
        { aloo: 30, shimla_mirch: 90 }
      )).toEqual({
        items: [{ name: "aloo", qty: 2, cost: 60 }],
        totalBill: 60
      });
    });

    test('All items too expensive', () => {
      expect(sabziMandiBill(
        [{ name: "bhindi", qty: 1 }, { name: "capsicum", qty: 2 }],
        { bhindi: 100, capsicum: 120 }
      )).toEqual({
        items: [],
        totalBill: 0
      });
    });

    test('All items not in priceList', () => {
      expect(sabziMandiBill(
        [{ name: "dragonfruit", qty: 1 }],
        { aloo: 30 }
      )).toEqual({
        items: [],
        totalBill: 0
      });
    });

    test('Mix of available, unavailable, and expensive items', () => {
      expect(sabziMandiBill(
        [
          { name: "aloo", qty: 2 },
          { name: "bhindi", qty: 1 },
          { name: "tamatar", qty: 3 },
          { name: "kela", qty: 1 }
        ],
        { aloo: 30, bhindi: 85, tamatar: 50 }
      )).toEqual({
        items: [
          { name: "aloo", qty: 2, cost: 60 },
          { name: "tamatar", qty: 3, cost: 150 }
        ],
        totalBill: 210
      });
    });
  });

  describe('Edge cases', () => {
    test('Empty shopping list', () => {
      expect(sabziMandiBill([], { aloo: 30 })).toEqual({
        items: [],
        totalBill: 0
      });
    });

    test('Empty price list', () => {
      expect(sabziMandiBill([{ name: "aloo", qty: 2 }], {})).toEqual({
        items: [],
        totalBill: 0
      });
    });
  });
});
