import {
  processGuests,
  notifyGuests,
  handleRSVP,
  transformGuestList,
} from '../src/06-shaadi-rsvp.js';

describe('06 - Shaadi RSVP Manager: Callbacks (9 pts)', () => {
  const guests = [
    { name: 'Rahul', side: 'bride', rsvp: 'yes' },
    { name: 'Priya', side: 'groom', rsvp: 'no' },
    { name: 'Amit', side: 'bride', rsvp: 'yes' },
    { name: 'Neha', side: 'groom', rsvp: 'yes' },
    { name: 'Vikram', side: 'bride', rsvp: 'no' },
  ];

  describe('processGuests', () => {
    test('filters guests using callback correctly', () => {
      const brideGuests = processGuests(guests, (g) => g.side === 'bride');
      expect(brideGuests).toHaveLength(3);
      expect(brideGuests.every((g) => g.side === 'bride')).toBe(true);
    });

    test('filters by rsvp status', () => {
      const accepted = processGuests(guests, (g) => g.rsvp === 'yes');
      expect(accepted).toHaveLength(3);
    });

    test('returns empty array when no matches', () => {
      const result = processGuests(guests, (g) => g.side === 'unknown');
      expect(result).toEqual([]);
    });

    test('non-array guests returns []', () => {
      expect(processGuests('not-array', () => true)).toEqual([]);
      expect(processGuests(null, () => true)).toEqual([]);
    });

    test('non-function filterFn returns []', () => {
      expect(processGuests(guests, 'not-a-function')).toEqual([]);
      expect(processGuests(guests, null)).toEqual([]);
    });

    test('callback is actually called for each guest', () => {
      let callCount = 0;
      processGuests(guests, (g) => {
        callCount++;
        return g.rsvp === 'yes';
      });
      expect(callCount).toBe(guests.length);
    });
  });

  describe('notifyGuests', () => {
    test('collects callback return values into array', () => {
      const results = notifyGuests(guests, (g) => `Notified ${g.name}`);
      expect(results).toEqual([
        'Notified Rahul',
        'Notified Priya',
        'Notified Amit',
        'Notified Neha',
        'Notified Vikram',
      ]);
    });

    test('returns correct number of results', () => {
      const results = notifyGuests(guests, (g) => g.name);
      expect(results).toHaveLength(5);
    });

    test('non-array guests returns []', () => {
      expect(notifyGuests(42, (g) => g.name)).toEqual([]);
    });

    test('non-function callback returns []', () => {
      expect(notifyGuests(guests, undefined)).toEqual([]);
    });

    test('callback is called for each guest', () => {
      let callCount = 0;
      notifyGuests(guests, (g) => {
        callCount++;
        return g.name;
      });
      expect(callCount).toBe(guests.length);
    });
  });

  describe('handleRSVP', () => {
    test('calls onAccept when rsvp is "yes"', () => {
      const guest = { name: 'Amit', rsvp: 'yes' };
      const result = handleRSVP(
        guest,
        (g) => `${g.name} is coming!`,
        (g) => `${g.name} declined`
      );
      expect(result).toBe('Amit is coming!');
    });

    test('calls onDecline when rsvp is "no"', () => {
      const guest = { name: 'Priya', rsvp: 'no' };
      const result = handleRSVP(
        guest,
        (g) => `${g.name} is coming!`,
        (g) => `${g.name} declined`
      );
      expect(result).toBe('Priya declined');
    });

    test('returns null for other rsvp values', () => {
      const guest = { name: 'Test', rsvp: 'maybe' };
      const result = handleRSVP(
        guest,
        (g) => `${g.name} is coming!`,
        (g) => `${g.name} declined`
      );
      expect(result).toBeNull();
    });

    test('null guest returns null', () => {
      expect(handleRSVP(null, () => {}, () => {})).toBeNull();
    });

    test('undefined guest returns null', () => {
      expect(handleRSVP(undefined, () => {}, () => {})).toBeNull();
    });

    test('non-function callbacks return null', () => {
      const guest = { name: 'Test', rsvp: 'yes' };
      expect(handleRSVP(guest, 'not-fn', () => {})).toBeNull();
      expect(handleRSVP(guest, () => {}, 'not-fn')).toBeNull();
    });

    test('onAccept is actually called (tracked)', () => {
      let acceptCalled = false;
      const guest = { name: 'Test', rsvp: 'yes' };
      handleRSVP(
        guest,
        () => { acceptCalled = true; return 'ok'; },
        () => 'no'
      );
      expect(acceptCalled).toBe(true);
    });

    test('onDecline is actually called (tracked)', () => {
      let declineCalled = false;
      const guest = { name: 'Test', rsvp: 'no' };
      handleRSVP(
        guest,
        () => 'yes',
        () => { declineCalled = true; return 'no'; }
      );
      expect(declineCalled).toBe(true);
    });
  });

  describe('transformGuestList', () => {
    test('applies single transform function', () => {
      const filterBride = (arr) => arr.filter((g) => g.side === 'bride');
      const result = transformGuestList(guests, filterBride);
      expect(result).toHaveLength(3);
    });

    test('applies multiple transforms in left-to-right order', () => {
      const filterAccepted = (arr) => arr.filter((g) => g.rsvp === 'yes');
      const sortByName = (arr) => [...arr].sort((a, b) => a.name.localeCompare(b.name));
      const result = transformGuestList(guests, filterAccepted, sortByName);
      expect(result).toHaveLength(3);
      expect(result[0].name).toBe('Amit');
      expect(result[1].name).toBe('Neha');
      expect(result[2].name).toBe('Rahul');
    });

    test('filter then map — applied in order', () => {
      const filterBride = (arr) => arr.filter((g) => g.side === 'bride');
      const getNames = (arr) => arr.map((g) => g.name);
      const result = transformGuestList(guests, filterBride, getNames);
      expect(result).toEqual(['Rahul', 'Amit', 'Vikram']);
    });

    test('no transform functions returns original array', () => {
      const result = transformGuestList(guests);
      expect(result).toHaveLength(5);
    });

    test('non-array guests returns []', () => {
      expect(transformGuestList(null, (arr) => arr)).toEqual([]);
      expect(transformGuestList('bad', (arr) => arr)).toEqual([]);
    });

    test('empty guests array works correctly', () => {
      const result = transformGuestList([], (arr) => arr.filter((g) => g.rsvp === 'yes'));
      expect(result).toEqual([]);
    });
  });
});
