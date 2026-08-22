import {
  setupGuestList,
  setupThemeSelector,
  setupCardEditor,
} from '../src/06-wedding-card-maker.js';

describe('06 - Wedding Card Maker: Event Delegation (9 pts)', () => {

  afterEach(() => {
    document.body.innerHTML = '';
  });

  // ── setupGuestList ──────────────────────────────────────────────
  describe('setupGuestList', () => {
    let container;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });

    it('should return null when container is null', () => {
      expect(setupGuestList(null)).toBeNull();
    });

    it('addGuest should create a .guest-item with correct data attributes', () => {
      const gl = setupGuestList(container);
      const el = gl.addGuest('Rahul', 'groom');
      expect(el.classList.contains('guest-item')).toBe(true);
      expect(el.dataset.name).toBe('Rahul');
      expect(el.dataset.side).toBe('groom');
    });

    it('addGuest should create a span with name and a remove button', () => {
      const gl = setupGuestList(container);
      const el = gl.addGuest('Priya', 'bride');
      const span = el.querySelector('span');
      expect(span.textContent).toBe('Priya');
      const btn = el.querySelector('button.remove-btn');
      expect(btn).not.toBeNull();
      expect(btn.textContent).toBe('Remove');
    });

    it('getGuests should return array of guest objects', () => {
      const gl = setupGuestList(container);
      gl.addGuest('Rahul', 'groom');
      gl.addGuest('Priya', 'bride');
      expect(gl.getGuests()).toEqual([
        { name: 'Rahul', side: 'groom' },
        { name: 'Priya', side: 'bride' },
      ]);
    });

    it('removeGuest should remove a guest by name', () => {
      const gl = setupGuestList(container);
      gl.addGuest('Rahul', 'groom');
      gl.addGuest('Priya', 'bride');
      expect(gl.removeGuest('Rahul')).toBe(true);
      expect(gl.getGuests().length).toBe(1);
    });

    it('removeGuest should return false when guest not found', () => {
      const gl = setupGuestList(container);
      expect(gl.removeGuest('Nobody')).toBe(false);
    });

    it('clicking .remove-btn should remove its parent .guest-item via delegation', () => {
      const gl = setupGuestList(container);
      gl.addGuest('Rahul', 'groom');
      const btn = container.querySelector('.remove-btn');
      btn.click();
      expect(gl.getGuests().length).toBe(0);
    });
  });

  // ── setupThemeSelector ──────────────────────────────────────────
  describe('setupThemeSelector', () => {
    let container, preview;

    beforeEach(() => {
      container = document.createElement('div');
      preview = document.createElement('div');
      document.body.appendChild(container);
      document.body.appendChild(preview);
    });

    it('should return null when container or preview is null', () => {
      expect(setupThemeSelector(null, preview)).toBeNull();
      expect(setupThemeSelector(container, null)).toBeNull();
    });

    it('should create 3 theme buttons inside container', () => {
      setupThemeSelector(container, preview);
      const buttons = container.querySelectorAll('.theme-btn');
      expect(buttons.length).toBe(3);
    });

    it('clicking a theme button should set preview className and data-theme', () => {
      const ts = setupThemeSelector(container, preview);
      const btn = container.querySelector('[data-theme="royal"]');
      btn.click();
      expect(preview.className).toBe('royal');
      expect(preview.dataset.theme).toBe('royal');
    });

    it('getTheme should return current theme or null', () => {
      const ts = setupThemeSelector(container, preview);
      expect(ts.getTheme()).toBeNull();
      const btn = container.querySelector('[data-theme="modern"]');
      btn.click();
      expect(ts.getTheme()).toBe('modern');
    });
  });

  // ── setupCardEditor ─────────────────────────────────────────────
  describe('setupCardEditor', () => {
    let card;

    beforeEach(() => {
      card = document.createElement('div');
      card.innerHTML = `
        <h2 data-editable="title">Wedding Title</h2>
        <p data-editable="message">Welcome Message</p>
      `;
      document.body.appendChild(card);
    });

    it('should return null when cardElement is null', () => {
      expect(setupCardEditor(null)).toBeNull();
    });

    it('clicking an editable element should make it contentEditable', () => {
      setupCardEditor(card);
      const title = card.querySelector('[data-editable="title"]');
      title.click();
      expect(title.contentEditable).toBe('true');
      expect(title.classList.contains('editing')).toBe(true);
    });

    it('clicking another editable should deactivate the previous one', () => {
      setupCardEditor(card);
      const title = card.querySelector('[data-editable="title"]');
      const msg = card.querySelector('[data-editable="message"]');
      title.click();
      msg.click();
      expect(title.contentEditable).not.toBe('true');
      expect(title.classList.contains('editing')).toBe(false);
      expect(msg.contentEditable).toBe('true');
    });

    it('getContent should return text of the specified field', () => {
      const editor = setupCardEditor(card);
      expect(editor.getContent('title')).toBe('Wedding Title');
      expect(editor.getContent('message')).toBe('Welcome Message');
    });

    it('getContent should return null for non-existent field', () => {
      const editor = setupCardEditor(card);
      expect(editor.getContent('nonexistent')).toBeNull();
    });
  });
});
