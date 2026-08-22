import { findPassenger, getPassengerIndex, isAnyWaitlisted, areAllConfirmed, getWaitlistedPassengers } from '../src/05-train-coach.js';

describe('05 - Train Coach Finder: Array Search & Check (8 pts)', () => {
  const passengers = [
    { name: 'Rahul', coach: 'S5', seat: 42, status: 'confirmed' },
    { name: 'Priya', coach: 'S3', seat: 15, status: 'waitlisted' },
    { name: 'Amit', coach: 'B1', seat: 8, status: 'confirmed' },
    { name: 'Neha', coach: 'S3', seat: 22, status: 'rac' },
  ];

  describe('findPassenger', () => {
    test('finds passenger by exact name', () => {
      expect(findPassenger(passengers, 'Rahul')).toEqual({ name: 'Rahul', coach: 'S5', seat: 42, status: 'confirmed' });
    });

    test('finds passenger case-insensitively', () => {
      expect(findPassenger(passengers, 'rahul')).toEqual({ name: 'Rahul', coach: 'S5', seat: 42, status: 'confirmed' });
      expect(findPassenger(passengers, 'PRIYA')).toEqual({ name: 'Priya', coach: 'S3', seat: 15, status: 'waitlisted' });
    });

    test('returns undefined when not found', () => {
      expect(findPassenger(passengers, 'Vikas')).toBeUndefined();
    });

    test('returns undefined for non-array passengers', () => {
      expect(findPassenger('not array', 'Rahul')).toBeUndefined();
    });

    test('returns undefined for non-string name', () => {
      expect(findPassenger(passengers, 42)).toBeUndefined();
    });
  });

  describe('getPassengerIndex', () => {
    test('returns correct index', () => {
      expect(getPassengerIndex(passengers, 'Rahul')).toBe(0);
      expect(getPassengerIndex(passengers, 'Priya')).toBe(1);
      expect(getPassengerIndex(passengers, 'Neha')).toBe(3);
    });

    test('finds index case-insensitively', () => {
      expect(getPassengerIndex(passengers, 'amit')).toBe(2);
    });

    test('returns -1 when not found', () => {
      expect(getPassengerIndex(passengers, 'Vikas')).toBe(-1);
    });

    test('returns -1 for non-array', () => {
      expect(getPassengerIndex('not array', 'Rahul')).toBe(-1);
    });

    test('returns -1 for non-string name', () => {
      expect(getPassengerIndex(passengers, null)).toBe(-1);
    });
  });

  describe('isAnyWaitlisted', () => {
    test('returns true when some are waitlisted', () => {
      expect(isAnyWaitlisted(passengers)).toBe(true);
    });

    test('returns false when none are waitlisted', () => {
      expect(isAnyWaitlisted([
        { name: 'A', status: 'confirmed' },
        { name: 'B', status: 'confirmed' },
      ])).toBe(false);
    });

    test('returns false for empty array', () => {
      expect(isAnyWaitlisted([])).toBe(false);
    });

    test('returns false for non-array', () => {
      expect(isAnyWaitlisted('not array')).toBe(false);
      expect(isAnyWaitlisted(null)).toBe(false);
    });
  });

  describe('areAllConfirmed', () => {
    test('returns false when not all are confirmed', () => {
      expect(areAllConfirmed(passengers)).toBe(false);
    });

    test('returns true when all are confirmed', () => {
      expect(areAllConfirmed([
        { name: 'A', status: 'confirmed' },
        { name: 'B', status: 'confirmed' },
      ])).toBe(true);
    });

    test('returns false for empty array', () => {
      expect(areAllConfirmed([])).toBe(false);
    });

    test('returns false for non-array', () => {
      expect(areAllConfirmed('not array')).toBe(false);
      expect(areAllConfirmed(null)).toBe(false);
    });
  });

  describe('getWaitlistedPassengers', () => {
    test('returns only waitlisted passengers', () => {
      const result = getWaitlistedPassengers(passengers);
      expect(result).toHaveLength(1);
      expect(result[0].name).toBe('Priya');
    });

    test('returns empty array when none waitlisted', () => {
      expect(getWaitlistedPassengers([{ name: 'A', status: 'confirmed' }])).toEqual([]);
    });

    test('returns all when all waitlisted', () => {
      const all = [{ name: 'A', status: 'waitlisted' }, { name: 'B', status: 'waitlisted' }];
      expect(getWaitlistedPassengers(all)).toHaveLength(2);
    });

    test('returns [] for non-array', () => {
      expect(getWaitlistedPassengers('not array')).toEqual([]);
      expect(getWaitlistedPassengers(null)).toEqual([]);
    });
  });
});
