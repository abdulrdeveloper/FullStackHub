import { calculateParkingFee } from '../src/11-parking-fee.js';

describe('11 - City Central: Parking Fee Calculator (9 pts)', () => {

  describe('Car rates', () => {
    test('Car, 1 hour → $5', () => {
      expect(calculateParkingFee(1, 'car')).toBe(5);
    });

    test('Car, 3 hours → $5 + $3 + $3 = $11', () => {
      expect(calculateParkingFee(3, 'car')).toBe(11);
    });

    test('Car, 5 hours → $5 + 4×$3 = $17', () => {
      expect(calculateParkingFee(5, 'car')).toBe(17);
    });

    test('Car, 10 hours → $5 + 9×$3 = $32 → capped at $30', () => {
      expect(calculateParkingFee(10, 'car')).toBe(30);
    });
  });

  describe('Motorcycle rates', () => {
    test('Motorcycle, 1 hour → $3', () => {
      expect(calculateParkingFee(1, 'motorcycle')).toBe(3);
    });

    test('Motorcycle, 4 hours → $3 + 3×$2 = $9', () => {
      expect(calculateParkingFee(4, 'motorcycle')).toBe(9);
    });

    test('Motorcycle, 12 hours → $3 + 11×$2 = $25 → capped at $18', () => {
      expect(calculateParkingFee(12, 'motorcycle')).toBe(18);
    });
  });

  describe('Bus rates', () => {
    test('Bus, 1 hour → $10', () => {
      expect(calculateParkingFee(1, 'bus')).toBe(10);
    });

    test('Bus, 3 hours → $10 + 2×$7 = $24', () => {
      expect(calculateParkingFee(3, 'bus')).toBe(24);
    });

    test('Bus, 10 hours → $10 + 9×$7 = $73 → capped at $60', () => {
      expect(calculateParkingFee(10, 'bus')).toBe(60);
    });
  });

  describe('Partial hours (round up)', () => {
    test('Car, 0.5 hours → rounds up to 1 → $5', () => {
      expect(calculateParkingFee(0.5, 'car')).toBe(5);
    });

    test('Car, 1.1 hours → rounds up to 2 → $5 + $3 = $8', () => {
      expect(calculateParkingFee(1.1, 'car')).toBe(8);
    });

    test('Motorcycle, 2.5 hours → rounds up to 3 → $3 + 2×$2 = $7', () => {
      expect(calculateParkingFee(2.5, 'motorcycle')).toBe(7);
    });
  });

  describe('Invalid input', () => {
    test('0 hours → -1', () => {
      expect(calculateParkingFee(0, 'car')).toBe(-1);
    });

    test('Negative hours → -1', () => {
      expect(calculateParkingFee(-2, 'car')).toBe(-1);
    });

    test('Unknown vehicle "truck" → -1', () => {
      expect(calculateParkingFee(3, 'truck')).toBe(-1);
    });
  });
});
