import {
  applyBaseStyle,
  setPatternStyle,
  getComputedStyles,
  toggleVisibility,
  animateElement,
} from '../src/04-mehndi-canvas.js';

describe('04 - Mehndi Canvas: style Property Manipulation (8 pts)', () => {

  let el;

  beforeEach(() => {
    el = document.createElement('div');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  // ── applyBaseStyle ──────────────────────────────────────────────
  describe('applyBaseStyle', () => {
    it('should set backgroundColor, width, height, and borderRadius', () => {
      const result = applyBaseStyle(el, 'brown', 100);
      expect(result).toBe(el);
      expect(el.style.backgroundColor).toBe('brown');
      expect(el.style.width).toBe('100px');
      expect(el.style.height).toBe('100px');
      expect(el.style.borderRadius).toBe('50%');
    });

    it('should return null when element is null', () => {
      expect(applyBaseStyle(null, 'brown', 100)).toBeNull();
    });

    it('should work with different color and size values', () => {
      applyBaseStyle(el, 'gold', 50);
      expect(el.style.backgroundColor).toBe('gold');
      expect(el.style.width).toBe('50px');
      expect(el.style.height).toBe('50px');
    });
  });

  // ── setPatternStyle ─────────────────────────────────────────────
  describe('setPatternStyle', () => {
    it('should apply all style properties from the object', () => {
      const count = setPatternStyle(el, { border: '2px solid gold', opacity: '0.9' });
      expect(count).toBe(2);
      expect(el.style.border).toBe('2px solid gold');
      expect(el.style.opacity).toBe('0.9');
    });

    it('should return -1 when element is null', () => {
      expect(setPatternStyle(null, { color: 'red' })).toBe(-1);
    });

    it('should return 0 when styles is null', () => {
      expect(setPatternStyle(el, null)).toBe(0);
    });

    it('should return 0 when styles is not an object', () => {
      expect(setPatternStyle(el, 'not-object')).toBe(0);
    });
  });

  // ── getComputedStyles ───────────────────────────────────────────
  describe('getComputedStyles', () => {
    it('should return an object with requested style properties', () => {
      el.style.backgroundColor = 'brown';
      el.style.opacity = '0.8';
      const result = getComputedStyles(el, ['backgroundColor', 'opacity']);
      expect(result).toEqual({ backgroundColor: 'brown', opacity: '0.8' });
    });

    it('should return empty strings for unset properties', () => {
      const result = getComputedStyles(el, ['color']);
      expect(result).toEqual({ color: '' });
    });

    it('should return null when element is null', () => {
      expect(getComputedStyles(null, ['color'])).toBeNull();
    });

    it('should return null when properties is not an array', () => {
      expect(getComputedStyles(el, 'color')).toBeNull();
    });
  });

  // ── toggleVisibility ────────────────────────────────────────────
  describe('toggleVisibility', () => {
    it('should hide element by setting display to "none"', () => {
      const result = toggleVisibility(el);
      expect(result).toBe('none');
      expect(el.style.display).toBe('none');
    });

    it('should show hidden element by setting display to ""', () => {
      el.style.display = 'none';
      const result = toggleVisibility(el);
      expect(result).toBe('');
      expect(el.style.display).toBe('');
    });

    it('should return null when element is null', () => {
      expect(toggleVisibility(null)).toBeNull();
    });
  });

  // ── animateElement ──────────────────────────────────────────────
  describe('animateElement', () => {
    it('should apply the last frame styles and return frame count', () => {
      const frames = [{ opacity: '0' }, { opacity: '0.5' }, { opacity: '1' }];
      const result = animateElement(el, frames);
      expect(result).toBe(3);
      expect(el.style.opacity).toBe('1');
    });

    it('should return -1 when element is null', () => {
      expect(animateElement(null, [{ opacity: '1' }])).toBe(-1);
    });

    it('should return -1 when frames is empty array', () => {
      expect(animateElement(el, [])).toBe(-1);
    });

    it('should return -1 when frames is not an array', () => {
      expect(animateElement(el, 'frames')).toBe(-1);
    });
  });
});
