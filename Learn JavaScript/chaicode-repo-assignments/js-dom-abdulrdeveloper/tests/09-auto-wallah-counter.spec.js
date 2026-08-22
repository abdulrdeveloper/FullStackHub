import {
  findQueueContainer,
  getNextInQueue,
  getPreviousInQueue,
  getQueuePosition,
  moveToFront,
  removeFromQueue,
  getQueueStats,
} from '../src/09-auto-wallah-counter.js';

describe('09 - Auto Wallah Counter: DOM Traversal (9 pts)', () => {

  let queueContainer, item1, item2, item3;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="queue-container">
        <div class="queue-item waiting" id="a1">Auto 1</div>
        <div class="queue-item serving" id="a2">Auto 2</div>
        <div class="queue-item completed" id="a3">Auto 3</div>
      </div>
    `;
    queueContainer = document.querySelector('.queue-container');
    item1 = document.getElementById('a1');
    item2 = document.getElementById('a2');
    item3 = document.getElementById('a3');
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  // ── findQueueContainer ──────────────────────────────────────────
  describe('findQueueContainer', () => {
    it('should find .queue-container from a child element', () => {
      expect(findQueueContainer(item2)).toBe(queueContainer);
    });

    it('should return self if element is the queue-container', () => {
      expect(findQueueContainer(queueContainer)).toBe(queueContainer);
    });

    it('should return null when element is null', () => {
      expect(findQueueContainer(null)).toBeNull();
    });

    it('should return null when no queue-container ancestor exists', () => {
      const orphan = document.createElement('div');
      expect(findQueueContainer(orphan)).toBeNull();
    });
  });

  // ── getNextInQueue ──────────────────────────────────────────────
  describe('getNextInQueue', () => {
    it('should return the next sibling element', () => {
      expect(getNextInQueue(item1)).toBe(item2);
      expect(getNextInQueue(item2)).toBe(item3);
    });

    it('should return null for the last element', () => {
      expect(getNextInQueue(item3)).toBeNull();
    });

    it('should return null when element is null', () => {
      expect(getNextInQueue(null)).toBeNull();
    });
  });

  // ── getPreviousInQueue ──────────────────────────────────────────
  describe('getPreviousInQueue', () => {
    it('should return the previous sibling element', () => {
      expect(getPreviousInQueue(item2)).toBe(item1);
    });

    it('should return null for the first element', () => {
      expect(getPreviousInQueue(item1)).toBeNull();
    });

    it('should return null when element is null', () => {
      expect(getPreviousInQueue(null)).toBeNull();
    });
  });

  // ── getQueuePosition ───────────────────────────────────────────
  describe('getQueuePosition', () => {
    it('should return 1-based position', () => {
      expect(getQueuePosition(item1)).toBe(1);
      expect(getQueuePosition(item2)).toBe(2);
      expect(getQueuePosition(item3)).toBe(3);
    });

    it('should return -1 for element with no parent', () => {
      const orphan = document.createElement('div');
      expect(getQueuePosition(orphan)).toBe(-1);
    });

    it('should return -1 when element is null', () => {
      expect(getQueuePosition(null)).toBe(-1);
    });
  });

  // ── moveToFront ─────────────────────────────────────────────────
  describe('moveToFront', () => {
    it('should move element to the first position', () => {
      expect(moveToFront(item3)).toBe(true);
      expect(queueContainer.children[0]).toBe(item3);
    });

    it('should return false when element is already first', () => {
      expect(moveToFront(item1)).toBe(false);
    });

    it('should return false when element has no parent', () => {
      const orphan = document.createElement('div');
      expect(moveToFront(orphan)).toBe(false);
    });

    it('should return false when element is null', () => {
      expect(moveToFront(null)).toBe(false);
    });
  });

  // ── removeFromQueue ─────────────────────────────────────────────
  describe('removeFromQueue', () => {
    it('should remove element from parent and return it', () => {
      const removed = removeFromQueue(item2);
      expect(removed).toBe(item2);
      expect(queueContainer.children.length).toBe(2);
    });

    it('should return null for orphan element', () => {
      const orphan = document.createElement('div');
      expect(removeFromQueue(orphan)).toBeNull();
    });

    it('should return null when element is null', () => {
      expect(removeFromQueue(null)).toBeNull();
    });
  });

  // ── getQueueStats ───────────────────────────────────────────────
  describe('getQueueStats', () => {
    it('should return correct counts for each status', () => {
      expect(getQueueStats(queueContainer)).toEqual({
        total: 3,
        waiting: 1,
        serving: 1,
        completed: 1,
      });
    });

    it('should reflect changes after DOM modifications', () => {
      removeFromQueue(item3);
      expect(getQueueStats(queueContainer)).toEqual({
        total: 2,
        waiting: 1,
        serving: 1,
        completed: 0,
      });
    });

    it('should return null when container is null', () => {
      expect(getQueueStats(null)).toBeNull();
    });
  });
});
