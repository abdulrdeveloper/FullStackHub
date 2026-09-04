import {
  createDialogueWriter,
  createTicketPricer,
  createRatingCalculator,
} from '../src/04-bollywood-director.js';

describe('04 - Bollywood Director: Factory Functions (8 pts)', () => {
  describe('createDialogueWriter', () => {
    test('returns a function for valid genre', () => {
      expect(typeof createDialogueWriter('action')).toBe('function');
    });

    test('action writer: ("SRK", "Raees") => correct template', () => {
      const writer = createDialogueWriter('action');
      expect(writer('SRK', 'Raees')).toBe(
        "SRK says: 'Tujhe toh main dekh lunga, Raees!'"
      );
    });

    test('romance writer: correct template', () => {
      const writer = createDialogueWriter('romance');
      expect(writer('Raj', 'Simran')).toBe(
        "Raj whispers: 'Simran, tum mere liye sab kuch ho'"
      );
    });

    test('comedy writer: correct template', () => {
      const writer = createDialogueWriter('comedy');
      expect(writer('Munna', 'Circuit')).toBe(
        "Munna laughs: 'Circuit bhai, kya kar rahe ho yaar!'"
      );
    });

    test('drama writer: correct template', () => {
      const writer = createDialogueWriter('drama');
      expect(writer('Rahul', 'Anjali')).toBe(
        "Rahul cries: 'Anjali, tune mera sab kuch cheen liya!'"
      );
    });

    test('unknown genre returns null (not a function)', () => {
      expect(createDialogueWriter('horror')).toBeNull();
    });

    test('empty hero or villain returns "..."', () => {
      const writer = createDialogueWriter('action');
      expect(writer('', 'Raees')).toBe('...');
      expect(writer('SRK', '')).toBe('...');
    });

    test('missing hero or villain returns "..."', () => {
      const writer = createDialogueWriter('action');
      expect(writer(undefined, 'Raees')).toBe('...');
      expect(writer('SRK')).toBe('...');
    });
  });

  describe('createTicketPricer', () => {
    test('returns a function for valid basePrice', () => {
      expect(typeof createTicketPricer(200)).toBe('function');
    });

    test('basePrice=200: silver => 200', () => {
      const pricer = createTicketPricer(200);
      expect(pricer('silver')).toBe(200);
    });

    test('basePrice=200: gold => 300', () => {
      const pricer = createTicketPricer(200);
      expect(pricer('gold')).toBe(300);
    });

    test('basePrice=200: platinum => 400', () => {
      const pricer = createTicketPricer(200);
      expect(pricer('platinum')).toBe(400);
    });

    test('weekend multiplier: gold + weekend => 390', () => {
      const pricer = createTicketPricer(200);
      expect(pricer('gold', true)).toBe(390);
    });

    test('weekend multiplier: silver + weekend => 260', () => {
      const pricer = createTicketPricer(200);
      expect(pricer('silver', true)).toBe(260);
    });

    test('unknown seatType returns null from returned function', () => {
      const pricer = createTicketPricer(200);
      expect(pricer('vip')).toBeNull();
    });

    test('negative basePrice returns null (not a function)', () => {
      expect(createTicketPricer(-100)).toBeNull();
    });

    test('zero basePrice returns null', () => {
      expect(createTicketPricer(0)).toBeNull();
    });
  });

  describe('createRatingCalculator', () => {
    test('returns a function for valid weights', () => {
      const weights = { story: 0.3, acting: 0.3, direction: 0.2, music: 0.2 };
      expect(typeof createRatingCalculator(weights)).toBe('function');
    });

    test('calculates weighted average correctly', () => {
      const weights = { story: 0.3, acting: 0.3, direction: 0.2, music: 0.2 };
      const calc = createRatingCalculator(weights);
      const scores = { story: 8, acting: 9, direction: 7, music: 8 };
      // 8*0.3 + 9*0.3 + 7*0.2 + 8*0.2 = 2.4 + 2.7 + 1.4 + 1.6 = 8.1
      expect(calc(scores)).toBe(8.1);
    });

    test('rounds to 1 decimal place', () => {
      const weights = { story: 0.5, acting: 0.5 };
      const calc = createRatingCalculator(weights);
      const scores = { story: 7, acting: 8 };
      // 7*0.5 + 8*0.5 = 3.5 + 4.0 = 7.5
      expect(calc(scores)).toBe(7.5);
    });

    test('invalid weights (not an object) returns null', () => {
      expect(createRatingCalculator(null)).toBeNull();
      expect(createRatingCalculator('bad')).toBeNull();
      expect(createRatingCalculator(42)).toBeNull();
    });
  });
});
