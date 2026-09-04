import { chaiTapriRevenue } from '../src/01-chai-tapri.js';

describe('01 - Raju ki Chai Tapri: Revenue Calculator (7 pts)', () => {

  describe('Basic revenue calculation', () => {
    test('1 customer gets cutting chai (Rs 10)', () => {
      expect(chaiTapriRevenue(1)).toEqual({ totalChai: 1, totalRevenue: 10 });
    });

    test('2 customers both get cutting chai (Rs 20)', () => {
      expect(chaiTapriRevenue(2)).toEqual({ totalChai: 2, totalRevenue: 20 });
    });

    test('3 customers: 2 cutting + 1 adrak = Rs 35', () => {
      expect(chaiTapriRevenue(3)).toEqual({ totalChai: 3, totalRevenue: 35 });
    });

    test('6 customers: 4 cutting + 2 adrak = Rs 70', () => {
      expect(chaiTapriRevenue(6)).toEqual({ totalChai: 6, totalRevenue: 70 });
    });

    test('10 customers: 7 cutting (70) + 3 adrak (45) = Rs 115', () => {
      expect(chaiTapriRevenue(10)).toEqual({ totalChai: 10, totalRevenue: 115 });
    });

    test('9 customers: 6 cutting (60) + 3 adrak (45) = Rs 105', () => {
      expect(chaiTapriRevenue(9)).toEqual({ totalChai: 9, totalRevenue: 105 });
    });
  });

  describe('Large numbers', () => {
    test('100 customers: 67 cutting (670) + 33 adrak (495) = Rs 1165', () => {
      expect(chaiTapriRevenue(100)).toEqual({ totalChai: 100, totalRevenue: 1165 });
    });
  });

  describe('Validation - invalid inputs', () => {
    test('0 customers returns zeroed object', () => {
      expect(chaiTapriRevenue(0)).toEqual({ totalChai: 0, totalRevenue: 0 });
    });

    test('Negative number returns zeroed object', () => {
      expect(chaiTapriRevenue(-5)).toEqual({ totalChai: 0, totalRevenue: 0 });
    });

    test('Decimal number returns zeroed object', () => {
      expect(chaiTapriRevenue(3.5)).toEqual({ totalChai: 0, totalRevenue: 0 });
    });

    test('String returns zeroed object', () => {
      expect(chaiTapriRevenue("ten")).toEqual({ totalChai: 0, totalRevenue: 0 });
    });

    test('undefined returns zeroed object', () => {
      expect(chaiTapriRevenue(undefined)).toEqual({ totalChai: 0, totalRevenue: 0 });
    });

    test('null returns zeroed object', () => {
      expect(chaiTapriRevenue(null)).toEqual({ totalChai: 0, totalRevenue: 0 });
    });
  });
});
