import { railwayReservation } from '../src/12-indian-railways.js';

describe('12 - IRCTC Tatkal Reservation System (10 pts)', () => {

  const sampleTrains = [
    {
      trainNumber: "12301",
      name: "Rajdhani Express",
      seats: { sleeper: 3, ac3: 2, ac2: 1, ac1: 0 }
    },
    {
      trainNumber: "12951",
      name: "Mumbai Rajdhani",
      seats: { sleeper: 5, ac3: 1, ac2: 0, ac1: 1 }
    }
  ];

  describe('Preferred class allocation', () => {
    test('Allocates preferred class when available', () => {
      const trains = [
        { trainNumber: "12301", name: "Rajdhani", seats: { sleeper: 5, ac3: 2 } }
      ];
      const result = railwayReservation(
        [{ name: "Rahul", trainNumber: "12301", preferred: "ac3", fallback: "sleeper" }],
        trains
      );
      expect(result).toEqual([
        { name: "Rahul", trainNumber: "12301", class: "ac3", status: "confirmed" }
      ]);
    });

    test('Seat count decrements after allocation', () => {
      const trains = [
        { trainNumber: "12301", name: "Rajdhani", seats: { ac3: 1, sleeper: 5 } }
      ];
      const result = railwayReservation(
        [
          { name: "Rahul", trainNumber: "12301", preferred: "ac3", fallback: "sleeper" },
          { name: "Priya", trainNumber: "12301", preferred: "ac3", fallback: "sleeper" }
        ],
        trains
      );
      expect(result[0]).toEqual({
        name: "Rahul", trainNumber: "12301", class: "ac3", status: "confirmed"
      });
      expect(result[1]).toEqual({
        name: "Priya", trainNumber: "12301", class: "sleeper", status: "confirmed"
      });
    });
  });

  describe('Fallback class allocation', () => {
    test('Falls back when preferred class is full', () => {
      const trains = [
        { trainNumber: "12301", name: "Rajdhani", seats: { ac3: 0, sleeper: 5 } }
      ];
      const result = railwayReservation(
        [{ name: "Amit", trainNumber: "12301", preferred: "ac3", fallback: "sleeper" }],
        trains
      );
      expect(result).toEqual([
        { name: "Amit", trainNumber: "12301", class: "sleeper", status: "confirmed" }
      ]);
    });

    test('Fallback seat also decrements', () => {
      const trains = [
        { trainNumber: "12301", name: "Rajdhani", seats: { ac3: 0, sleeper: 1 } }
      ];
      const result = railwayReservation(
        [
          { name: "Amit", trainNumber: "12301", preferred: "ac3", fallback: "sleeper" },
          { name: "Neha", trainNumber: "12301", preferred: "ac3", fallback: "sleeper" }
        ],
        trains
      );
      expect(result[0].status).toBe("confirmed");
      expect(result[0].class).toBe("sleeper");
      expect(result[1].status).toBe("waitlisted");
    });
  });

  describe('Waitlisted passengers', () => {
    test('Waitlisted when both classes full', () => {
      const trains = [
        { trainNumber: "12301", name: "Rajdhani", seats: { ac3: 0, sleeper: 0 } }
      ];
      const result = railwayReservation(
        [{ name: "Bunty", trainNumber: "12301", preferred: "ac3", fallback: "sleeper" }],
        trains
      );
      expect(result).toEqual([
        { name: "Bunty", trainNumber: "12301", class: "ac3", status: "waitlisted" }
      ]);
    });
  });

  describe('Train not found', () => {
    test('Returns train_not_found for invalid train number', () => {
      const trains = [
        { trainNumber: "12301", name: "Rajdhani", seats: { sleeper: 5 } }
      ];
      const result = railwayReservation(
        [{ name: "Sita", trainNumber: "99999", preferred: "ac3", fallback: "sleeper" }],
        trains
      );
      expect(result).toEqual([
        { name: "Sita", trainNumber: "99999", class: null, status: "train_not_found" }
      ]);
    });
  });

  describe('Multiple passengers - FIFO order', () => {
    test('Processes passengers in order, seats deplete for later ones', () => {
      const trains = [
        { trainNumber: "12301", name: "Rajdhani", seats: { ac2: 1, ac3: 1, sleeper: 1 } }
      ];
      const passengers = [
        { name: "P1", trainNumber: "12301", preferred: "ac2", fallback: "ac3" },
        { name: "P2", trainNumber: "12301", preferred: "ac2", fallback: "ac3" },
        { name: "P3", trainNumber: "12301", preferred: "ac3", fallback: "sleeper" },
        { name: "P4", trainNumber: "12301", preferred: "sleeper", fallback: "ac2" }
      ];
      const result = railwayReservation(passengers, trains);
      expect(result[0]).toEqual({ name: "P1", trainNumber: "12301", class: "ac2", status: "confirmed" });
      expect(result[1]).toEqual({ name: "P2", trainNumber: "12301", class: "ac3", status: "confirmed" });
      expect(result[2]).toEqual({ name: "P3", trainNumber: "12301", class: "sleeper", status: "confirmed" });
      expect(result[3]).toEqual({ name: "P4", trainNumber: "12301", class: "sleeper", status: "waitlisted" });
    });
  });

  describe('Multiple trains', () => {
    test('Passengers can book on different trains', () => {
      const trains = [
        { trainNumber: "12301", name: "Rajdhani", seats: { ac3: 1, sleeper: 2 } },
        { trainNumber: "12951", name: "Mumbai Rajdhani", seats: { ac3: 1, sleeper: 3 } }
      ];
      const passengers = [
        { name: "A", trainNumber: "12301", preferred: "ac3", fallback: "sleeper" },
        { name: "B", trainNumber: "12951", preferred: "ac3", fallback: "sleeper" },
        { name: "C", trainNumber: "12301", preferred: "ac3", fallback: "sleeper" }
      ];
      const result = railwayReservation(passengers, trains);
      expect(result[0]).toEqual({ name: "A", trainNumber: "12301", class: "ac3", status: "confirmed" });
      expect(result[1]).toEqual({ name: "B", trainNumber: "12951", class: "ac3", status: "confirmed" });
      expect(result[2]).toEqual({ name: "C", trainNumber: "12301", class: "sleeper", status: "confirmed" });
    });
  });

  describe('Validation', () => {
    test('Empty passengers array returns []', () => {
      expect(railwayReservation([], sampleTrains)).toEqual([]);
    });

    test('Empty trains array returns []', () => {
      expect(railwayReservation(
        [{ name: "Test", trainNumber: "12301", preferred: "ac3", fallback: "sleeper" }],
        []
      )).toEqual([]);
    });

    test('Non-array passengers returns []', () => {
      expect(railwayReservation("passengers", sampleTrains)).toEqual([]);
    });

    test('Non-array trains returns []', () => {
      expect(railwayReservation(
        [{ name: "Test", trainNumber: "12301", preferred: "ac3", fallback: "sleeper" }],
        "trains"
      )).toEqual([]);
    });

    test('null passengers returns []', () => {
      expect(railwayReservation(null, sampleTrains)).toEqual([]);
    });

    test('null trains returns []', () => {
      expect(railwayReservation(
        [{ name: "Test", trainNumber: "12301", preferred: "ac3", fallback: "sleeper" }],
        null
      )).toEqual([]);
    });
  });
});
