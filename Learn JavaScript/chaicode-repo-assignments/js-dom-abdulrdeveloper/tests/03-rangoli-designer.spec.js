import {
  addColors,
  removeColors,
  togglePattern,
  hasDesign,
  replaceDesign,
  getActiveColors,
} from '../src/03-rangoli-designer.js';

describe('03 - Rangoli Designer: classList add, remove, toggle, contains (8 pts)', () => {

  let cell;

  beforeEach(() => {
    cell = document.createElement('div');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  // ── addColors ────────────────────────────────────────────────────
  describe('addColors', () => {
    it('should add multiple color classes and return count of new classes', () => {
      const count = addColors(cell, 'red', 'blue', 'green');
      expect(count).toBe(3);
      expect(cell.classList.contains('red')).toBe(true);
      expect(cell.classList.contains('blue')).toBe(true);
      expect(cell.classList.contains('green')).toBe(true);
    });

    it('should skip duplicates already present and only count new ones', () => {
      cell.classList.add('red');
      const count = addColors(cell, 'red', 'blue', 'red');
      expect(count).toBe(1); // only blue is new
    });

    it('should return -1 when element is null', () => {
      expect(addColors(null, 'red')).toBe(-1);
    });

    it('should return -1 when element is undefined', () => {
      expect(addColors(undefined, 'blue')).toBe(-1);
    });
  });

  // ── removeColors ────────────────────────────────────────────────
  describe('removeColors', () => {
    it('should remove existing classes and return count removed', () => {
      cell.classList.add('red', 'blue', 'green');
      const count = removeColors(cell, 'red', 'green');
      expect(count).toBe(2);
      expect(cell.classList.contains('red')).toBe(false);
      expect(cell.classList.contains('green')).toBe(false);
    });

    it('should not count classes that were not present', () => {
      cell.classList.add('red');
      const count = removeColors(cell, 'red', 'yellow');
      expect(count).toBe(1);
    });

    it('should return -1 when element is null', () => {
      expect(removeColors(null, 'red')).toBe(-1);
    });
  });

  // ── togglePattern ────────────────────────────────────────────────
  describe('togglePattern', () => {
    it('should add pattern class if not present and return true', () => {
      const result = togglePattern(cell, 'floral');
      expect(result).toBe(true);
      expect(cell.classList.contains('pattern-floral')).toBe(true);
    });

    it('should remove pattern class if already present and return false', () => {
      cell.classList.add('pattern-floral');
      const result = togglePattern(cell, 'floral');
      expect(result).toBe(false);
      expect(cell.classList.contains('pattern-floral')).toBe(false);
    });

    it('should return null when element is null', () => {
      expect(togglePattern(null, 'floral')).toBeNull();
    });
  });

  // ── hasDesign ────────────────────────────────────────────────────
  describe('hasDesign', () => {
    it('should return true when design class exists', () => {
      cell.classList.add('design-peacock');
      expect(hasDesign(cell, 'peacock')).toBe(true);
    });

    it('should return false when design class does not exist', () => {
      expect(hasDesign(cell, 'peacock')).toBe(false);
    });

    it('should return false when element is null', () => {
      expect(hasDesign(null, 'peacock')).toBe(false);
    });
  });

  // ── replaceDesign ───────────────────────────────────────────────
  describe('replaceDesign', () => {
    it('should replace old design with new design and return true', () => {
      cell.classList.add('design-peacock');
      const result = replaceDesign(cell, 'peacock', 'lotus');
      expect(result).toBe(true);
      expect(cell.classList.contains('design-peacock')).toBe(false);
      expect(cell.classList.contains('design-lotus')).toBe(true);
    });

    it('should add new design and return false when old design not found', () => {
      const result = replaceDesign(cell, 'peacock', 'lotus');
      expect(result).toBe(false);
      expect(cell.classList.contains('design-lotus')).toBe(true);
    });

    it('should return false when element is null', () => {
      expect(replaceDesign(null, 'a', 'b')).toBe(false);
    });
  });

  // ── getActiveColors ──────────────────────────────────────────────
  describe('getActiveColors', () => {
    it('should return array of color names from color-* classes', () => {
      cell.classList.add('color-red', 'color-blue', 'other');
      const colors = getActiveColors(cell);
      expect(colors).toEqual(['red', 'blue']);
    });

    it('should return empty array when no color classes present', () => {
      cell.classList.add('other', 'another');
      expect(getActiveColors(cell)).toEqual([]);
    });

    it('should return empty array when element is null', () => {
      expect(getActiveColors(null)).toEqual([]);
    });
  });
});
