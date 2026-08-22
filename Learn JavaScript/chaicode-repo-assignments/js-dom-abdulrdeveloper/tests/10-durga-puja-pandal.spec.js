import {
  createPandalElement,
  getPandalInfo,
  updatePandalRating,
  filterPandalsByZone,
  getPandalsByBudgetRange,
  sortPandalsByRating,
} from '../src/10-durga-puja-pandal.js';

const PANDAL_A = { name: 'Baghbazar', zone: 'North', theme: 'Traditional', budget: 5000000, rating: 4.5 };
const PANDAL_B = { name: 'Deshapriya', zone: 'South', theme: 'Modern', budget: 8000000, rating: 4.8 };
const PANDAL_C = { name: 'Hatibagan', zone: 'North', theme: 'Artistic', budget: 3000000, rating: 4.2 };

describe('10 - Durga Puja Pandal: data-* Attributes & dataset (9 pts)', () => {

  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  // ── createPandalElement ─────────────────────────────────────────
  describe('createPandalElement', () => {
    it('should create div.pandal with correct data attributes', () => {
      const el = createPandalElement(PANDAL_A);
      expect(el).not.toBeNull();
      expect(el.classList.contains('pandal')).toBe(true);
      expect(el.dataset.name).toBe('Baghbazar');
      expect(el.dataset.zone).toBe('North');
      expect(el.dataset.theme).toBe('Traditional');
      expect(el.dataset.budget).toBe('5000000');
      expect(el.dataset.rating).toBe('4.5');
      expect(el.textContent).toBe('Baghbazar');
    });

    it('should return null for null input', () => {
      expect(createPandalElement(null)).toBeNull();
    });

    it('should return null when required fields are missing', () => {
      expect(createPandalElement({ name: 'X' })).toBeNull();
    });

    it('should return null when budget is not a number', () => {
      expect(createPandalElement({ ...PANDAL_A, budget: 'big' })).toBeNull();
    });

    it('should return null when rating is not a number', () => {
      expect(createPandalElement({ ...PANDAL_A, rating: 'high' })).toBeNull();
    });
  });

  // ── getPandalInfo ───────────────────────────────────────────────
  describe('getPandalInfo', () => {
    it('should return pandal info object with numeric budget and rating', () => {
      const el = createPandalElement(PANDAL_A);
      expect(getPandalInfo(el)).toEqual({
        name: 'Baghbazar',
        zone: 'North',
        theme: 'Traditional',
        budget: 5000000,
        rating: 4.5,
      });
    });

    it('should return null when element is null', () => {
      expect(getPandalInfo(null)).toBeNull();
    });
  });

  // ── updatePandalRating ──────────────────────────────────────────
  describe('updatePandalRating', () => {
    it('should update rating and return old rating', () => {
      const el = createPandalElement(PANDAL_A);
      const old = updatePandalRating(el, 4.9);
      expect(old).toBe(4.5);
      expect(el.dataset.rating).toBe('4.9');
    });

    it('should return null for rating above 5', () => {
      const el = createPandalElement(PANDAL_A);
      expect(updatePandalRating(el, 6)).toBeNull();
    });

    it('should return null for negative rating', () => {
      const el = createPandalElement(PANDAL_A);
      expect(updatePandalRating(el, -1)).toBeNull();
    });

    it('should return null when element is null', () => {
      expect(updatePandalRating(null, 4)).toBeNull();
    });
  });

  // ── filterPandalsByZone ─────────────────────────────────────────
  describe('filterPandalsByZone', () => {
    beforeEach(() => {
      container.appendChild(createPandalElement(PANDAL_A));
      container.appendChild(createPandalElement(PANDAL_B));
      container.appendChild(createPandalElement(PANDAL_C));
    });

    it('should return only pandals matching the zone', () => {
      const result = filterPandalsByZone(container, 'North');
      expect(result.length).toBe(2);
    });

    it('should return empty array for non-matching zone', () => {
      expect(filterPandalsByZone(container, 'East').length).toBe(0);
    });

    it('should return [] when container is null', () => {
      expect(filterPandalsByZone(null, 'North')).toEqual([]);
    });
  });

  // ── getPandalsByBudgetRange ─────────────────────────────────────
  describe('getPandalsByBudgetRange', () => {
    beforeEach(() => {
      container.appendChild(createPandalElement(PANDAL_A));
      container.appendChild(createPandalElement(PANDAL_B));
      container.appendChild(createPandalElement(PANDAL_C));
    });

    it('should return pandals within the budget range (inclusive)', () => {
      const result = getPandalsByBudgetRange(container, 3000000, 5000000);
      expect(result.length).toBe(2); // PANDAL_A and PANDAL_C
    });

    it('should return [] when no pandals in range', () => {
      expect(getPandalsByBudgetRange(container, 100, 200).length).toBe(0);
    });

    it('should return [] when min or max is not a number', () => {
      expect(getPandalsByBudgetRange(container, 'a', 5000000)).toEqual([]);
    });
  });

  // ── sortPandalsByRating ─────────────────────────────────────────
  describe('sortPandalsByRating', () => {
    beforeEach(() => {
      container.appendChild(createPandalElement(PANDAL_C)); // 4.2
      container.appendChild(createPandalElement(PANDAL_A)); // 4.5
      container.appendChild(createPandalElement(PANDAL_B)); // 4.8
    });

    it('should sort pandals by rating descending in the DOM', () => {
      const sorted = sortPandalsByRating(container);
      expect(sorted.length).toBe(3);
      expect(sorted[0].dataset.rating).toBe('4.8');
      expect(sorted[1].dataset.rating).toBe('4.5');
      expect(sorted[2].dataset.rating).toBe('4.2');
      // Verify DOM order matches
      expect(container.children[0].dataset.rating).toBe('4.8');
    });

    it('should return [] when container is null', () => {
      expect(sortPandalsByRating(null)).toEqual([]);
    });
  });
});
