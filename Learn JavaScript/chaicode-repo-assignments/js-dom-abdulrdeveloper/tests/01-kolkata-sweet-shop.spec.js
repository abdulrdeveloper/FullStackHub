import { createSweetItem, buildMenuBoard, addSpecialBadge } from '../src/01-kolkata-sweet-shop.js';

describe('01 - Kolkata Sweet Shop: createElement & appendChild (7 pts)', () => {

  afterEach(() => {
    document.body.innerHTML = '';
  });

  // ── createSweetItem ──────────────────────────────────────────────
  describe('createSweetItem', () => {
    it('should create a div with class "sweet-item"', () => {
      const item = createSweetItem('Rasgulla', 30, 'Bengali');
      expect(item).not.toBeNull();
      expect(item.tagName).toBe('DIV');
      expect(item.classList.contains('sweet-item')).toBe(true);
    });

    it('should contain an h3 with the sweet name', () => {
      const item = createSweetItem('Sandesh', 40, 'Bengali');
      const h3 = item.querySelector('h3');
      expect(h3).not.toBeNull();
      expect(h3.textContent).toBe('Sandesh');
    });

    it('should contain a p.price with rupee-formatted price', () => {
      const item = createSweetItem('Rasgulla', 30, 'Bengali');
      const price = item.querySelector('p.price');
      expect(price).not.toBeNull();
      expect(price.textContent).toBe('₹30');
    });

    it('should contain a span.category with category text', () => {
      const item = createSweetItem('Mishti Doi', 50, 'Bengali');
      const cat = item.querySelector('span.category');
      expect(cat).not.toBeNull();
      expect(cat.textContent).toBe('Bengali');
    });

    it('should return null when name is not a string', () => {
      expect(createSweetItem(123, 30, 'Bengali')).toBeNull();
    });

    it('should return null when price is not a number', () => {
      expect(createSweetItem('Rasgulla', '30', 'Bengali')).toBeNull();
    });

    it('should return null when category is not a string', () => {
      expect(createSweetItem('Rasgulla', 30, 42)).toBeNull();
    });

    it('should return null when a parameter is missing', () => {
      expect(createSweetItem('Rasgulla', 30)).toBeNull();
    });
  });

  // ── buildMenuBoard ───────────────────────────────────────────────
  describe('buildMenuBoard', () => {
    it('should create a div with id "menu-board"', () => {
      const board = buildMenuBoard([]);
      expect(board).not.toBeNull();
      expect(board.tagName).toBe('DIV');
      expect(board.id).toBe('menu-board');
    });

    it('should append one sweet-item for each valid sweet in array', () => {
      const sweets = [
        { name: 'Rasgulla', price: 30, category: 'Bengali' },
        { name: 'Sandesh', price: 40, category: 'Bengali' },
      ];
      const board = buildMenuBoard(sweets);
      expect(board.children.length).toBe(2);
      expect(board.children[0].classList.contains('sweet-item')).toBe(true);
    });

    it('should return an empty menu-board for an empty array', () => {
      const board = buildMenuBoard([]);
      expect(board.children.length).toBe(0);
    });

    it('should return null when argument is not an array', () => {
      expect(buildMenuBoard('not array')).toBeNull();
      expect(buildMenuBoard(42)).toBeNull();
    });
  });

  // ── addSpecialBadge ──────────────────────────────────────────────
  describe('addSpecialBadge', () => {
    it('should add a span.special-badge to the sweet element', () => {
      const item = createSweetItem('Rasgulla', 30, 'Bengali');
      const result = addSpecialBadge(item, 'Bestseller');
      expect(result).toBe(item);
      const badge = item.querySelector('span.special-badge');
      expect(badge).not.toBeNull();
      expect(badge.textContent).toBe('Bestseller');
    });

    it('should return null when sweetElement is null', () => {
      expect(addSpecialBadge(null, 'Bestseller')).toBeNull();
    });

    it('should return null when badgeText is empty string', () => {
      const item = createSweetItem('Rasgulla', 30, 'Bengali');
      expect(addSpecialBadge(item, '')).toBeNull();
    });

    it('should return null when badgeText is not a string', () => {
      const item = createSweetItem('Rasgulla', 30, 'Bengali');
      expect(addSpecialBadge(item, 123)).toBeNull();
    });
  });
});
