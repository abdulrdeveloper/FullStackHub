import {
  setupAddButton,
  setupRemoveButton,
  setupToggleItem,
  createThaliManager,
} from '../src/05-puja-thali-builder.js';

describe('05 - Puja Thali Builder: addEventListener & Click Events (8 pts)', () => {

  let button, thali, counter;

  beforeEach(() => {
    button = document.createElement('button');
    thali = document.createElement('ul');
    counter = document.createElement('span');
    document.body.appendChild(button);
    document.body.appendChild(thali);
    document.body.appendChild(counter);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  // ── setupAddButton ──────────────────────────────────────────────
  describe('setupAddButton', () => {
    it('should add an li to thali on each click', () => {
      setupAddButton(button, thali, 'Diya');
      button.click();
      expect(thali.children.length).toBe(1);
      expect(thali.children[0].textContent).toBe('Diya');
    });

    it('should add multiple items on multiple clicks', () => {
      setupAddButton(button, thali, 'Diya');
      button.click();
      button.click();
      button.click();
      expect(thali.children.length).toBe(3);
    });

    it('should return a cleanup function that removes the listener', () => {
      const cleanup = setupAddButton(button, thali, 'Diya');
      button.click();
      expect(thali.children.length).toBe(1);
      cleanup();
      button.click();
      expect(thali.children.length).toBe(1); // no new item added
    });

    it('should return null when any param is null', () => {
      expect(setupAddButton(null, thali, 'Diya')).toBeNull();
      expect(setupAddButton(button, null, 'Diya')).toBeNull();
      expect(setupAddButton(button, thali, null)).toBeNull();
    });
  });

  // ── setupRemoveButton ───────────────────────────────────────────
  describe('setupRemoveButton', () => {
    it('should remove the last child on click', () => {
      thali.innerHTML = '<li>Diya</li><li>Phool</li>';
      setupRemoveButton(button, thali);
      button.click();
      expect(thali.children.length).toBe(1);
      expect(thali.children[0].textContent).toBe('Diya');
    });

    it('should do nothing when thali is already empty', () => {
      setupRemoveButton(button, thali);
      button.click();
      expect(thali.children.length).toBe(0);
    });

    it('should return a cleanup function', () => {
      thali.innerHTML = '<li>A</li><li>B</li>';
      const cleanup = setupRemoveButton(button, thali);
      cleanup();
      button.click();
      expect(thali.children.length).toBe(2);
    });

    it('should return null when params are null', () => {
      expect(setupRemoveButton(null, thali)).toBeNull();
      expect(setupRemoveButton(button, null)).toBeNull();
    });
  });

  // ── setupToggleItem ──────────────────────────────────────────────
  describe('setupToggleItem', () => {
    it('should add item if not present', () => {
      setupToggleItem(button, thali, 'Kumkum');
      button.click();
      expect(thali.children.length).toBe(1);
      expect(thali.children[0].textContent).toBe('Kumkum');
    });

    it('should remove item if already present', () => {
      setupToggleItem(button, thali, 'Kumkum');
      button.click(); // add
      button.click(); // remove
      expect(thali.children.length).toBe(0);
    });

    it('should return null when any param is null', () => {
      expect(setupToggleItem(null, thali, 'K')).toBeNull();
      expect(setupToggleItem(button, null, 'K')).toBeNull();
      expect(setupToggleItem(button, thali, null)).toBeNull();
    });
  });

  // ── createThaliManager ──────────────────────────────────────────
  describe('createThaliManager', () => {
    it('should provide addItem that appends li and updates counter', () => {
      const mgr = createThaliManager(thali, counter);
      const li = mgr.addItem('Diya');
      expect(li.textContent).toBe('Diya');
      expect(thali.children.length).toBe(1);
      expect(counter.textContent).toBe('1');
    });

    it('should provide removeItem that removes matching li', () => {
      const mgr = createThaliManager(thali, counter);
      mgr.addItem('Diya');
      mgr.addItem('Phool');
      const removed = mgr.removeItem('Diya');
      expect(removed).toBe(true);
      expect(thali.children.length).toBe(1);
      expect(counter.textContent).toBe('1');
    });

    it('removeItem should return false when item not found', () => {
      const mgr = createThaliManager(thali, counter);
      expect(mgr.removeItem('Nope')).toBe(false);
    });

    it('getCount should return current child count', () => {
      const mgr = createThaliManager(thali, counter);
      mgr.addItem('A');
      mgr.addItem('B');
      expect(mgr.getCount()).toBe(2);
    });

    it('clear should remove all children and set counter to 0', () => {
      const mgr = createThaliManager(thali, counter);
      mgr.addItem('A');
      mgr.addItem('B');
      mgr.clear();
      expect(thali.children.length).toBe(0);
      expect(counter.textContent).toBe('0');
    });

    it('should return null when thaliElement or counterElement is null', () => {
      expect(createThaliManager(null, counter)).toBeNull();
      expect(createThaliManager(thali, null)).toBeNull();
    });
  });
});
