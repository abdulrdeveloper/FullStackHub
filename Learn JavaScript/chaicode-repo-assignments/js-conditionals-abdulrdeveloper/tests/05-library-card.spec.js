import { canBorrowBook } from '../src/05-library-card.js';

describe('05 - Maple Town Library: Book Borrowing (8 pts)', () => {

  describe('All conditions met', () => {
    test('Age 10, valid card, 0 overdue → allowed', () => {
      const result = canBorrowBook(10, true, 0);
      expect(result.allowed).toBe(true);
      expect(result.message).toBe('You may borrow up to 3 books');
    });

    test('Age 6 (minimum), valid card, 0 overdue → allowed', () => {
      const result = canBorrowBook(6, true, 0);
      expect(result.allowed).toBe(true);
      expect(result.message).toBe('You may borrow up to 3 books');
    });

    test('Age 65, valid card, 0 overdue → allowed', () => {
      const result = canBorrowBook(65, true, 0);
      expect(result.allowed).toBe(true);
      expect(result.message).toBe('You may borrow up to 3 books');
    });
  });

  describe('Too young', () => {
    test('Age 5 → too young', () => {
      const result = canBorrowBook(5, true, 0);
      expect(result.allowed).toBe(false);
      expect(result.message).toBe('Too young - must be at least 6 years old');
    });

    test('Age 3, no card, 2 overdue → too young (checked first)', () => {
      const result = canBorrowBook(3, false, 2);
      expect(result.allowed).toBe(false);
      expect(result.message).toBe('Too young - must be at least 6 years old');
    });
  });

  describe('Invalid library card', () => {
    test('Age 12, invalid card → invalid card message', () => {
      const result = canBorrowBook(12, false, 0);
      expect(result.allowed).toBe(false);
      expect(result.message).toBe('Invalid library card - please renew at the front desk');
    });

    test('Age 20, invalid card, 3 overdue → invalid card (checked before overdue)', () => {
      const result = canBorrowBook(20, false, 3);
      expect(result.allowed).toBe(false);
      expect(result.message).toBe('Invalid library card - please renew at the front desk');
    });
  });

  describe('Overdue books', () => {
    test('Age 15, valid card, 2 overdue → return overdue books', () => {
      const result = canBorrowBook(15, true, 2);
      expect(result.allowed).toBe(false);
      expect(result.message).toBe('Please return your 2 overdue book(s) first');
    });

    test('Age 30, valid card, 1 overdue → return overdue book', () => {
      const result = canBorrowBook(30, true, 1);
      expect(result.allowed).toBe(false);
      expect(result.message).toBe('Please return your 1 overdue book(s) first');
    });

    test('Age 40, valid card, 5 overdue → return 5 overdue books', () => {
      const result = canBorrowBook(40, true, 5);
      expect(result.allowed).toBe(false);
      expect(result.message).toBe('Please return your 5 overdue book(s) first');
    });
  });
});
