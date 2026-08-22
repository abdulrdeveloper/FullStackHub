import {
  updateChaiPrice,
  getChaiPrice,
  updateStallName,
  highlightCheapestChai,
} from '../src/02-chai-stall-board.js';

const STALL_HTML = `
<div class="chai-stall">
  <h1 class="stall-name">Sharma Chai Wala</h1>
  <div class="price-board">
    <p id="price-masala" class="chai-price" data-chai="masala">₹15</p>
    <p id="price-cutting" class="chai-price" data-chai="cutting">₹10</p>
    <p id="price-adrak" class="chai-price" data-chai="adrak">₹20</p>
  </div>
</div>`;

describe('02 - Chai Stall Board: getElementById, querySelector, textContent (7 pts)', () => {

  beforeEach(() => {
    document.body.innerHTML = STALL_HTML;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  // ── updateChaiPrice ──────────────────────────────────────────────
  describe('updateChaiPrice', () => {
    it('should update the price of an existing chai type', () => {
      const result = updateChaiPrice(document, 'masala', 25);
      expect(result).toBe(true);
      expect(document.getElementById('price-masala').textContent).toBe('₹25');
    });

    it('should return false for a non-existent chai type', () => {
      expect(updateChaiPrice(document, 'green', 30)).toBe(false);
    });

    it('should return false when newPrice is not a number', () => {
      expect(updateChaiPrice(document, 'masala', '25')).toBe(false);
    });

    it('should return false when newPrice is 0 or negative', () => {
      expect(updateChaiPrice(document, 'masala', 0)).toBe(false);
      expect(updateChaiPrice(document, 'masala', -5)).toBe(false);
    });

    it('should return false when chaiType is empty string', () => {
      expect(updateChaiPrice(document, '', 25)).toBe(false);
    });
  });

  // ── getChaiPrice ────────────────────────────────────────────────
  describe('getChaiPrice', () => {
    it('should return the numeric price for an existing chai type', () => {
      expect(getChaiPrice(document, 'masala')).toBe(15);
      expect(getChaiPrice(document, 'cutting')).toBe(10);
      expect(getChaiPrice(document, 'adrak')).toBe(20);
    });

    it('should return null for a non-existent chai type', () => {
      expect(getChaiPrice(document, 'green')).toBeNull();
    });

    it('should reflect updated prices', () => {
      updateChaiPrice(document, 'masala', 25);
      expect(getChaiPrice(document, 'masala')).toBe(25);
    });
  });

  // ── updateStallName ─────────────────────────────────────────────
  describe('updateStallName', () => {
    it('should update the stall name and return the old name', () => {
      const old = updateStallName(document, 'Sharma Premium Chai');
      expect(old).toBe('Sharma Chai Wala');
      expect(document.querySelector('.stall-name').textContent).toBe('Sharma Premium Chai');
    });

    it('should return null when newName is empty string', () => {
      expect(updateStallName(document, '')).toBeNull();
    });

    it('should return null when newName is not a string', () => {
      expect(updateStallName(document, 42)).toBeNull();
    });
  });

  // ── highlightCheapestChai ────────────────────────────────────────
  describe('highlightCheapestChai', () => {
    it('should add "cheapest" class to the cheapest chai element', () => {
      const result = highlightCheapestChai(document);
      expect(result).toBe('cutting');
      expect(document.getElementById('price-cutting').classList.contains('cheapest')).toBe(true);
    });

    it('should remove "cheapest" class from other elements', () => {
      document.getElementById('price-masala').classList.add('cheapest');
      highlightCheapestChai(document);
      expect(document.getElementById('price-masala').classList.contains('cheapest')).toBe(false);
    });

    it('should return null when no chai-price elements exist', () => {
      document.body.innerHTML = '<div></div>';
      expect(highlightCheapestChai(document)).toBeNull();
    });
  });
});
