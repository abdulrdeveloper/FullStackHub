import {
  createContingent,
  setupParadeDashboard,
} from '../src/12-republic-day-parade.js';

describe('12 - Republic Day Parade: Capstone - All DOM Concepts Combined (9 pts)', () => {

  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  // ── createContingent ────────────────────────────────────────────
  describe('createContingent', () => {
    it('should create div.contingent with correct structure', () => {
      const el = createContingent('Punjab Regiment', 'military', 'Punjab', ['Col. Singh', 'Maj. Kaur']);
      expect(el).not.toBeNull();
      expect(el.classList.contains('contingent')).toBe(true);
      expect(el.dataset.name).toBe('Punjab Regiment');
      expect(el.dataset.type).toBe('military');
      expect(el.dataset.state).toBe('Punjab');
      expect(el.querySelector('h3').textContent).toBe('Punjab Regiment');
      expect(el.querySelector('span.type').textContent).toBe('military');
      expect(el.querySelector('span.state').textContent).toBe('Punjab');
    });

    it('should create ul with member li elements', () => {
      const el = createContingent('Test', 'cultural', 'Kerala', ['A', 'B', 'C']);
      const lis = el.querySelectorAll('ul li');
      expect(lis.length).toBe(3);
      expect(lis[0].textContent).toBe('A');
      expect(lis[2].textContent).toBe('C');
    });

    it('should return null for invalid params', () => {
      expect(createContingent(null, 'military', 'Punjab', ['A'])).toBeNull();
      expect(createContingent('X', 42, 'Punjab', ['A'])).toBeNull();
      expect(createContingent('X', 'military', 'Punjab', 'notarray')).toBeNull();
    });
  });

  // ── setupParadeDashboard ────────────────────────────────────────
  describe('setupParadeDashboard', () => {
    it('should return null when container is null', () => {
      expect(setupParadeDashboard(null)).toBeNull();
    });

    describe('addContingent', () => {
      it('should add a contingent to the container', () => {
        const db = setupParadeDashboard(container);
        const el = db.addContingent({ name: 'Punjab', type: 'military', state: 'Punjab', members: ['A'] });
        expect(el).not.toBeNull();
        expect(container.children.length).toBe(1);
      });

      it('should return null for invalid contingent data', () => {
        const db = setupParadeDashboard(container);
        expect(db.addContingent({ name: 'X' })).toBeNull();
      });
    });

    describe('removeContingent', () => {
      it('should remove a contingent by name', () => {
        const db = setupParadeDashboard(container);
        db.addContingent({ name: 'Punjab', type: 'military', state: 'Punjab', members: ['A'] });
        expect(db.removeContingent('Punjab')).toBe(true);
        expect(container.children.length).toBe(0);
      });

      it('should return false when contingent not found', () => {
        const db = setupParadeDashboard(container);
        expect(db.removeContingent('Nobody')).toBe(false);
      });
    });

    describe('moveContingent', () => {
      let db;

      beforeEach(() => {
        db = setupParadeDashboard(container);
        db.addContingent({ name: 'Alpha', type: 'military', state: 'UP', members: ['A'] });
        db.addContingent({ name: 'Beta', type: 'cultural', state: 'MP', members: ['B'] });
        db.addContingent({ name: 'Gamma', type: 'school', state: 'AP', members: ['C'] });
      });

      it('should move a contingent up (swap with previous sibling)', () => {
        expect(db.moveContingent('Beta', 'up')).toBe(true);
        expect(db.getParadeOrder()).toEqual(['Beta', 'Alpha', 'Gamma']);
      });

      it('should move a contingent down (swap with next sibling)', () => {
        expect(db.moveContingent('Beta', 'down')).toBe(true);
        expect(db.getParadeOrder()).toEqual(['Alpha', 'Gamma', 'Beta']);
      });

      it('should return false when already at top and moving up', () => {
        expect(db.moveContingent('Alpha', 'up')).toBe(false);
      });

      it('should return false when already at bottom and moving down', () => {
        expect(db.moveContingent('Gamma', 'down')).toBe(false);
      });

      it('should return false when contingent not found', () => {
        expect(db.moveContingent('Nobody', 'up')).toBe(false);
      });
    });

    describe('getContingentsByType', () => {
      it('should return array of matching contingents', () => {
        const db = setupParadeDashboard(container);
        db.addContingent({ name: 'A', type: 'military', state: 'X', members: ['1'] });
        db.addContingent({ name: 'B', type: 'cultural', state: 'Y', members: ['2'] });
        db.addContingent({ name: 'C', type: 'military', state: 'Z', members: ['3'] });
        const result = db.getContingentsByType('military');
        expect(result.length).toBe(2);
      });
    });

    describe('highlightState', () => {
      it('should add "highlight" to matching and remove from others', () => {
        const db = setupParadeDashboard(container);
        db.addContingent({ name: 'A', type: 'military', state: 'Punjab', members: ['1'] });
        db.addContingent({ name: 'B', type: 'cultural', state: 'Kerala', members: ['2'] });
        db.addContingent({ name: 'C', type: 'school', state: 'Punjab', members: ['3'] });
        const count = db.highlightState('Punjab');
        expect(count).toBe(2);
        const children = container.querySelectorAll('.contingent');
        expect(children[0].classList.contains('highlight')).toBe(true);
        expect(children[1].classList.contains('highlight')).toBe(false);
        expect(children[2].classList.contains('highlight')).toBe(true);
      });
    });

    describe('getParadeOrder', () => {
      it('should return array of contingent names in DOM order', () => {
        const db = setupParadeDashboard(container);
        db.addContingent({ name: 'A', type: 'x', state: 'y', members: ['1'] });
        db.addContingent({ name: 'B', type: 'x', state: 'y', members: ['2'] });
        expect(db.getParadeOrder()).toEqual(['A', 'B']);
      });
    });

    describe('getTotalMembers', () => {
      it('should count all li elements across all contingents', () => {
        const db = setupParadeDashboard(container);
        db.addContingent({ name: 'A', type: 'x', state: 'y', members: ['1', '2', '3'] });
        db.addContingent({ name: 'B', type: 'x', state: 'y', members: ['4', '5'] });
        expect(db.getTotalMembers()).toBe(5);
      });
    });
  });
});
