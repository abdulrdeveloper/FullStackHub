import { jest } from '@jest/globals';
import {
  validateName,
  validateDate,
  validateAartiType,
  setupAartiForm,
  createBookingSummary,
} from '../src/07-aarti-form.js';

describe('07 - Aarti Form: Form Handling, preventDefault & Validation (9 pts)', () => {

  afterEach(() => {
    document.body.innerHTML = '';
  });

  // ── validateName ────────────────────────────────────────────────
  describe('validateName', () => {
    it('should validate a correct name', () => {
      expect(validateName('Rahul Sharma')).toEqual({ valid: true, error: null });
    });

    it('should reject non-string input', () => {
      expect(validateName(123)).toEqual({
        valid: false,
        error: 'Naam string hona chahiye',
      });
    });

    it('should reject names shorter than 2 characters', () => {
      expect(validateName('R')).toEqual({
        valid: false,
        error: 'Naam mein kam se kam 2 characters hone chahiye',
      });
    });

    it('should reject names longer than 50 characters', () => {
      const longName = 'A'.repeat(51);
      expect(validateName(longName)).toEqual({
        valid: false,
        error: 'Naam 50 characters se zyada nahi ho sakta',
      });
    });

    it('should reject names with invalid characters', () => {
      expect(validateName('Rahul123')).toEqual({
        valid: false,
        error: 'Naam mein sirf letters aur spaces allowed hain',
      });
    });
  });

  // ── validateDate ────────────────────────────────────────────────
  describe('validateDate', () => {
    it('should validate a future date', () => {
      const futureDate = '2099-12-25';
      expect(validateDate(futureDate)).toEqual({ valid: true, error: null });
    });

    it('should reject non-string input', () => {
      expect(validateDate(12345)).toEqual({
        valid: false,
        error: 'Date string honi chahiye',
      });
    });

    it('should reject invalid date format', () => {
      expect(validateDate('25-12-2025')).toEqual({
        valid: false,
        error: 'Date YYYY-MM-DD format mein honi chahiye',
      });
    });

    it('should reject past dates', () => {
      expect(validateDate('2000-01-01')).toEqual({
        valid: false,
        error: 'Date aaj ya future ki honi chahiye',
      });
    });
  });

  // ── validateAartiType ───────────────────────────────────────────
  describe('validateAartiType', () => {
    it('should validate morning, evening, and special', () => {
      expect(validateAartiType('morning')).toEqual({ valid: true, error: null });
      expect(validateAartiType('evening')).toEqual({ valid: true, error: null });
      expect(validateAartiType('special')).toEqual({ valid: true, error: null });
    });

    it('should reject non-string input', () => {
      expect(validateAartiType(42)).toEqual({
        valid: false,
        error: 'Aarti type string hona chahiye',
      });
    });

    it('should reject invalid types', () => {
      expect(validateAartiType('midnight')).toEqual({
        valid: false,
        error: 'Aarti type morning, evening, ya special mein se hona chahiye',
      });
    });
  });

  // ── setupAartiForm ──────────────────────────────────────────────
  describe('setupAartiForm', () => {
    let form;

    beforeEach(() => {
      form = document.createElement('form');
      form.innerHTML = `
        <input name="name" value="Rahul Sharma" />
        <input name="date" value="2099-12-25" />
        <select name="aartiType"><option value="morning" selected>Morning</option></select>
      `;
      document.body.appendChild(form);
    });

    it('should return null when form is null', () => {
      expect(setupAartiForm(null, () => {}, () => {})).toBeNull();
    });

    it('should return null when callbacks are not functions', () => {
      expect(setupAartiForm(form, 'nope', () => {})).toBeNull();
      expect(setupAartiForm(form, () => {}, 'nope')).toBeNull();
    });

    it('should call onSuccess with valid form data on submit', () => {
      const onSuccess = jest.fn();
      const onError = jest.fn();
      setupAartiForm(form, onSuccess, onError);
      form.dispatchEvent(new Event('submit', { cancelable: true }));
      expect(onSuccess).toHaveBeenCalledWith({
        name: 'Rahul Sharma',
        date: '2099-12-25',
        aartiType: 'morning',
      });
      expect(onError).not.toHaveBeenCalled();
    });

    it('should call onError with errors for invalid form data', () => {
      form.elements.name.value = '';
      form.elements.date.value = 'bad';
      const onSuccess = jest.fn();
      const onError = jest.fn();
      setupAartiForm(form, onSuccess, onError);
      form.dispatchEvent(new Event('submit', { cancelable: true }));
      expect(onSuccess).not.toHaveBeenCalled();
      expect(onError).toHaveBeenCalled();
      expect(onError.mock.calls[0][0].length).toBeGreaterThan(0);
    });

    it('should return a cleanup function that removes the listener', () => {
      const onSuccess = jest.fn();
      const cleanup = setupAartiForm(form, onSuccess, () => {});
      cleanup();
      form.dispatchEvent(new Event('submit', { cancelable: true }));
      expect(onSuccess).not.toHaveBeenCalled();
    });
  });

  // ── createBookingSummary ────────────────────────────────────────
  describe('createBookingSummary', () => {
    it('should create a div.booking-summary with correct children', () => {
      const el = createBookingSummary({
        name: 'Rahul',
        date: '2099-12-25',
        aartiType: 'morning',
      });
      expect(el).not.toBeNull();
      expect(el.classList.contains('booking-summary')).toBe(true);
      expect(el.querySelector('h3').textContent).toBe('Booking Confirmation');
      expect(el.querySelector('.booking-name').textContent).toBe('Bhakt: Rahul');
      expect(el.querySelector('.booking-date').textContent).toBe('Date: 2099-12-25');
      expect(el.querySelector('.booking-type').textContent).toBe('Aarti: morning');
    });

    it('should return null when booking is null', () => {
      expect(createBookingSummary(null)).toBeNull();
    });

    it('should return null when booking is missing required fields', () => {
      expect(createBookingSummary({ name: 'Rahul' })).toBeNull();
      expect(createBookingSummary({ name: 'Rahul', date: '2099-01-01' })).toBeNull();
    });
  });
});
