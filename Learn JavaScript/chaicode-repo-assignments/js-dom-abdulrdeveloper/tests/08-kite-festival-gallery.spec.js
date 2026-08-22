import {
  renderKiteCard,
  renderGallery,
  filterKites,
  sortAndRender,
  renderEmptyState,
} from '../src/08-kite-festival-gallery.js';

const KITE_A = { name: 'Patang Raja', color: 'Red', size: 'Large', maker: 'Ali', image: 'raja.jpg' };
const KITE_B = { name: 'Guddi Rani', color: 'Blue', size: 'Medium', maker: 'Bano', image: 'rani.jpg' };
const KITE_C = { name: 'Tukkal', color: 'Red', size: 'Small', maker: 'Khan', image: 'tukkal.jpg' };

describe('08 - Kite Festival Gallery: Dynamic Rendering from Data Arrays (8 pts)', () => {

  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  // ── renderKiteCard ──────────────────────────────────────────────
  describe('renderKiteCard', () => {
    it('should create a div.kite-card with correct inner elements', () => {
      const card = renderKiteCard(KITE_A);
      expect(card).not.toBeNull();
      expect(card.classList.contains('kite-card')).toBe(true);
      expect(card.querySelector('img').src).toContain('raja.jpg');
      expect(card.querySelector('img').alt).toBe('Patang Raja');
      expect(card.querySelector('h3.kite-name').textContent).toBe('Patang Raja');
      expect(card.querySelector('p.kite-maker').textContent).toBe('by Ali');
      expect(card.querySelector('p.kite-info').textContent).toBe('Large - Red');
    });

    it('should return null for null input', () => {
      expect(renderKiteCard(null)).toBeNull();
    });

    it('should return null when required fields are missing', () => {
      expect(renderKiteCard({ name: 'X' })).toBeNull();
      expect(renderKiteCard({ name: 'X', color: 'Y' })).toBeNull();
    });
  });

  // ── renderGallery ───────────────────────────────────────────────
  describe('renderGallery', () => {
    it('should render kite cards into the container', () => {
      const count = renderGallery(container, [KITE_A, KITE_B]);
      expect(count).toBe(2);
      expect(container.children.length).toBe(2);
    });

    it('should clear existing content before rendering', () => {
      container.innerHTML = '<p>old</p>';
      renderGallery(container, [KITE_A]);
      expect(container.querySelector('p')?.textContent).not.toBe('old');
      expect(container.children.length).toBe(1);
      expect(container.children[0].classList.contains('kite-card')).toBe(true);
    });

    it('should skip invalid kites', () => {
      const count = renderGallery(container, [KITE_A, { name: 'bad' }, KITE_B]);
      expect(count).toBe(2);
    });

    it('should return -1 for null container', () => {
      expect(renderGallery(null, [KITE_A])).toBe(-1);
    });

    it('should return -1 when kites is not an array', () => {
      expect(renderGallery(container, 'bad')).toBe(-1);
    });
  });

  // ── filterKites ─────────────────────────────────────────────────
  describe('filterKites', () => {
    it('should render only filtered kites', () => {
      const count = filterKites(container, [KITE_A, KITE_B, KITE_C], k => k.color === 'Red');
      expect(count).toBe(2);
      expect(container.children.length).toBe(2);
    });

    it('should return -1 when container is null', () => {
      expect(filterKites(null, [KITE_A], () => true)).toBe(-1);
    });

    it('should return -1 when filterFn is not a function', () => {
      expect(filterKites(container, [KITE_A], 'notfn')).toBe(-1);
    });
  });

  // ── sortAndRender ───────────────────────────────────────────────
  describe('sortAndRender', () => {
    it('should sort ascending by default and render', () => {
      const sorted = sortAndRender(container, [KITE_B, KITE_A, KITE_C], 'name');
      expect(sorted[0].name).toBe('Guddi Rani');
      expect(sorted[1].name).toBe('Patang Raja');
      expect(sorted[2].name).toBe('Tukkal');
      expect(container.children.length).toBe(3);
    });

    it('should sort descending when order is "desc"', () => {
      const sorted = sortAndRender(container, [KITE_A, KITE_B, KITE_C], 'name', 'desc');
      expect(sorted[0].name).toBe('Tukkal');
    });

    it('should not mutate the original array', () => {
      const original = [KITE_B, KITE_A];
      sortAndRender(container, original, 'name');
      expect(original[0]).toBe(KITE_B);
    });

    it('should return [] when container is null', () => {
      expect(sortAndRender(null, [KITE_A], 'name')).toEqual([]);
    });
  });

  // ── renderEmptyState ────────────────────────────────────────────
  describe('renderEmptyState', () => {
    it('should render empty-state message when container is empty', () => {
      const result = renderEmptyState(container, 'No kites found');
      expect(result).toBe(true);
      const p = container.querySelector('p.empty-state');
      expect(p.textContent).toBe('No kites found');
    });

    it('should not render when container already has children', () => {
      container.innerHTML = '<div>child</div>';
      const result = renderEmptyState(container, 'No kites');
      expect(result).toBe(false);
    });

    it('should return false when container is null', () => {
      expect(renderEmptyState(null, 'msg')).toBe(false);
    });
  });
});
