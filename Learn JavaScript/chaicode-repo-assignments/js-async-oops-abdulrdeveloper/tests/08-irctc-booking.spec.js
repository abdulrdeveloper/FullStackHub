import {
  checkSeatAvailability,
  bookTicket,
  cancelTicket,
  getBookingStatus,
  bookMultipleTickets,
  raceBooking,
} from '../src/08-irctc-booking.js';

describe('08 - IRCTC Booking: async/await (9 pts)', () => {
  describe('checkSeatAvailability function', () => {
    test('returns availability object for valid inputs', async () => {
      const result = await checkSeatAvailability('12345', '2025-01-15', '3A');
      expect(result.trainNumber).toBe('12345');
      expect(result.date).toBe('2025-01-15');
      expect(result.classType).toBe('3A');
      expect(typeof result.available).toBe('boolean');
      expect(typeof result.seats).toBe('number');
      expect(typeof result.waitlist).toBe('number');
    });

    test('throws for invalid train number (not 5 digits)', async () => {
      await expect(checkSeatAvailability('123', '2025-01-15', '3A')).rejects.toThrow(
        'Invalid train number! 5 digit hona chahiye.'
      );
      await expect(checkSeatAvailability('123456', '2025-01-15', '3A')).rejects.toThrow(
        'Invalid train number! 5 digit hona chahiye.'
      );
    });

    test('throws for invalid class type', async () => {
      await expect(checkSeatAvailability('12345', '2025-01-15', 'AC')).rejects.toThrow(
        'Invalid class type!'
      );
    });

    test('throws for empty/missing date', async () => {
      await expect(checkSeatAvailability('12345', '', '3A')).rejects.toThrow('Date required hai!');
    });
  });

  describe('bookTicket function', () => {
    test('returns booking object with PNR for valid inputs', async () => {
      const passenger = { name: 'Rahul', age: 28, gender: 'M' };
      const booking = await bookTicket(passenger, '12345', '2025-01-15', '3A');
      expect(booking.pnr).toMatch(/^PNR/);
      expect(booking.passenger).toEqual(passenger);
      expect(booking.trainNumber).toBe('12345');
      expect(booking.class).toBe('3A');
      expect(['confirmed', 'waitlisted']).toContain(booking.status);
    });

    test('booking has correct fare based on class', async () => {
      const passenger = { name: 'Rahul', age: 28, gender: 'M' };
      const fares = { SL: 250, '3A': 800, '2A': 1200, '1A': 2000 };
      for (const cls of ['SL', '3A', '2A', '1A']) {
        const booking = await bookTicket(passenger, '12345', '2025-01-15', cls);
        expect(booking.fare).toBe(fares[cls]);
      }
    });

    test('booking status is confirmed or waitlisted', async () => {
      const passenger = { name: 'Rahul', age: 28, gender: 'M' };
      const booking = await bookTicket(passenger, '12345', '2025-01-15', 'SL');
      if (booking.status === 'waitlisted') {
        expect(booking.waitlistNumber).toBeGreaterThanOrEqual(1);
        expect(booking.waitlistNumber).toBeLessThanOrEqual(20);
      } else {
        expect(booking.status).toBe('confirmed');
      }
    });
  });

  describe('cancelTicket function', () => {
    test('cancelTicket returns cancellation object for valid PNR', async () => {
      const result = await cancelTicket('PNR123456');
      expect(result.pnr).toBe('PNR123456');
      expect(result.status).toBe('cancelled');
      expect(result.refund).toBeGreaterThanOrEqual(100);
      expect(result.refund).toBeLessThanOrEqual(1000);
    });

    test('cancelTicket throws for invalid PNR', async () => {
      await expect(cancelTicket('INVALID')).rejects.toThrow('Invalid PNR number!');
      await expect(cancelTicket('')).rejects.toThrow('Invalid PNR number!');
    });
  });

  describe('getBookingStatus function', () => {
    test('getBookingStatus returns status for valid PNR', async () => {
      const result = await getBookingStatus('PNR123456');
      expect(result.pnr).toBe('PNR123456');
      expect(['confirmed', 'waitlisted', 'cancelled']).toContain(result.status);
      expect(result).toHaveProperty('lastUpdated');
    });

    test('getBookingStatus throws for invalid PNR', async () => {
      await expect(getBookingStatus('INVALID')).rejects.toThrow('Invalid PNR number!');
    });
  });

  describe('bookMultipleTickets function', () => {
    test('books tickets for multiple passengers sequentially', async () => {
      const passengers = [
        { name: 'Amit', age: 30, gender: 'M' },
        { name: 'Priya', age: 25, gender: 'F' },
      ];
      const results = await bookMultipleTickets(passengers, '12345', '2025-01-15', 'SL');
      expect(results.length).toBe(2);
      expect(results[0].pnr).toMatch(/^PNR/);
      expect(results[1].pnr).toMatch(/^PNR/);
    });

    test('returns empty array for empty passengers', async () => {
      const results = await bookMultipleTickets([], '12345', '2025-01-15', 'SL');
      expect(results).toEqual([]);
    });
  });

  describe('raceBooking function', () => {
    test('raceBooking returns first successful booking', async () => {
      const passenger = { name: 'Rahul', age: 28, gender: 'M' };
      const result = await raceBooking(
        ['12345', '67890', '11111'],
        passenger,
        '2025-01-15',
        'SL'
      );
      expect(result.pnr).toMatch(/^PNR/);
      expect(result.passenger).toEqual(passenger);
    });
  });
});
