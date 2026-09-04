import { getTicketPrice } from '../src/01-ticket-pricing.js';

describe('01 - Starlight Cinema: Ticket Pricing (8 pts)', () => {

  describe('Weekday prices by age group', () => {
    test('Child (age 5) on a weekday should cost $8', () => {
      expect(getTicketPrice(5, false)).toBe(8);
    });

    test('Child at boundary (age 12) on a weekday should cost $8', () => {
      expect(getTicketPrice(12, false)).toBe(8);
    });

    test('Teen (age 15) on a weekday should cost $12', () => {
      expect(getTicketPrice(15, false)).toBe(12);
    });

    test('Teen at boundary (age 13) on a weekday should cost $12', () => {
      expect(getTicketPrice(13, false)).toBe(12);
    });

    test('Adult (age 30) on a weekday should cost $15', () => {
      expect(getTicketPrice(30, false)).toBe(15);
    });

    test('Adult at boundaries (age 18 and 59) on a weekday should cost $15', () => {
      expect(getTicketPrice(18, false)).toBe(15);
      expect(getTicketPrice(59, false)).toBe(15);
    });

    test('Senior (age 70) on a weekday should cost $10', () => {
      expect(getTicketPrice(70, false)).toBe(10);
    });

    test('Senior at boundary (age 60) on a weekday should cost $10', () => {
      expect(getTicketPrice(60, false)).toBe(10);
    });

    test('Baby (age 0) on a weekday should cost $8', () => {
      expect(getTicketPrice(0, false)).toBe(8);
    });
  });

  describe('Weekend surcharge (+$3)', () => {
    test('Child on a weekend should cost $11', () => {
      expect(getTicketPrice(10, true)).toBe(11);
    });

    test('Teen on a weekend should cost $15', () => {
      expect(getTicketPrice(16, true)).toBe(15);
    });

    test('Adult on a weekend should cost $18', () => {
      expect(getTicketPrice(35, true)).toBe(18);
    });

    test('Senior on a weekend should cost $13', () => {
      expect(getTicketPrice(75, true)).toBe(13);
    });
  });

  describe('Invalid input', () => {
    test('Negative age should return -1', () => {
      expect(getTicketPrice(-1, false)).toBe(-1);
    });

    test('Negative age on a weekend should also return -1', () => {
      expect(getTicketPrice(-5, true)).toBe(-1);
    });
  });
});
