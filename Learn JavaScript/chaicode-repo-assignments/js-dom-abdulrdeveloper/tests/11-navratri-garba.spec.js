import {
  insertDancer,
  cloneDancer,
  replaceDancer,
  removeDancer,
  rearrangeStage,
  duplicateFormation,
} from '../src/11-navratri-garba.js';

describe('11 - Navratri Garba: insertBefore, cloneNode, replaceChild, removeChild (9 pts)', () => {

  let stage, d1, d2, d3;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="stage">
        <div id="dancer1" class="dancer">Priya</div>
        <div id="dancer2" class="dancer">Meera</div>
        <div id="dancer3" class="dancer">Kavya</div>
      </div>
    `;
    stage = document.getElementById('stage');
    d1 = document.getElementById('dancer1');
    d2 = document.getElementById('dancer2');
    d3 = document.getElementById('dancer3');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  // ── insertDancer ────────────────────────────────────────────────
  describe('insertDancer', () => {
    it('should insert a new dancer before the reference dancer', () => {
      const newD = document.createElement('div');
      newD.textContent = 'Anita';
      expect(insertDancer(stage, newD, d2)).toBe(true);
      expect(stage.children[1]).toBe(newD);
    });

    it('should append at end when referenceDancer is null', () => {
      const newD = document.createElement('div');
      newD.textContent = 'Zara';
      insertDancer(stage, newD, null);
      expect(stage.lastElementChild).toBe(newD);
    });

    it('should return false when stage is null', () => {
      const newD = document.createElement('div');
      expect(insertDancer(null, newD, d1)).toBe(false);
    });

    it('should return false when newDancer is null', () => {
      expect(insertDancer(stage, null, d1)).toBe(false);
    });
  });

  // ── cloneDancer ─────────────────────────────────────────────────
  describe('cloneDancer', () => {
    it('should deep-clone a dancer and append "-copy" to id', () => {
      const clone = cloneDancer(d1, true);
      expect(clone.id).toBe('dancer1-copy');
      expect(clone.textContent).toBe('Priya');
      expect(clone.classList.contains('dancer')).toBe(true);
    });

    it('should shallow-clone when deep is false', () => {
      const clone = cloneDancer(d1, false);
      expect(clone.id).toBe('dancer1-copy');
      expect(clone.textContent).toBe('');
    });

    it('should return null when dancer is null', () => {
      expect(cloneDancer(null, true)).toBeNull();
    });
  });

  // ── replaceDancer ───────────────────────────────────────────────
  describe('replaceDancer', () => {
    it('should replace old dancer with new dancer and return old', () => {
      const newD = document.createElement('div');
      newD.textContent = 'Riya';
      const old = replaceDancer(stage, d2, newD);
      expect(old).toBe(d2);
      expect(stage.children[1].textContent).toBe('Riya');
    });

    it('should return null when any param is null', () => {
      const newD = document.createElement('div');
      expect(replaceDancer(null, d2, newD)).toBeNull();
      expect(replaceDancer(stage, null, newD)).toBeNull();
      expect(replaceDancer(stage, d2, null)).toBeNull();
    });
  });

  // ── removeDancer ────────────────────────────────────────────────
  describe('removeDancer', () => {
    it('should remove dancer from stage and return it', () => {
      const removed = removeDancer(stage, d2);
      expect(removed).toBe(d2);
      expect(stage.children.length).toBe(2);
    });

    it('should return null if dancer is not child of stage', () => {
      const outsider = document.createElement('div');
      expect(removeDancer(stage, outsider)).toBeNull();
    });

    it('should return null when stage or dancer is null', () => {
      expect(removeDancer(null, d1)).toBeNull();
      expect(removeDancer(stage, null)).toBeNull();
    });
  });

  // ── rearrangeStage ──────────────────────────────────────────────
  describe('rearrangeStage', () => {
    it('should reorder children according to index array', () => {
      const result = rearrangeStage(stage, [2, 0, 1]);
      expect(result).toBe(true);
      expect(stage.children[0].textContent).toBe('Kavya');
      expect(stage.children[1].textContent).toBe('Priya');
      expect(stage.children[2].textContent).toBe('Meera');
    });

    it('should return false when stage is null', () => {
      expect(rearrangeStage(null, [0, 1, 2])).toBe(false);
    });

    it('should return false when order is not an array', () => {
      expect(rearrangeStage(stage, 'bad')).toBe(false);
    });

    it('should return false when order length does not match children count', () => {
      expect(rearrangeStage(stage, [0, 1])).toBe(false);
    });

    it('should return false when order contains invalid indices', () => {
      expect(rearrangeStage(stage, [0, 1, 99])).toBe(false);
    });
  });

  // ── duplicateFormation ──────────────────────────────────────────
  describe('duplicateFormation', () => {
    it('should create a deep clone with "-clone" appended to id', () => {
      const clone = duplicateFormation(stage);
      expect(clone.id).toBe('stage-clone');
      expect(clone.children.length).toBe(3);
      expect(clone.children[0].textContent).toBe('Priya');
    });

    it('cloned stage should not be in the document', () => {
      const clone = duplicateFormation(stage);
      expect(document.getElementById('stage-clone')).toBeNull();
    });

    it('should return null when stage is null', () => {
      expect(duplicateFormation(null)).toBeNull();
    });
  });
});
