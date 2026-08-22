import { diwaliLightsPlan } from '../src/06-diwali-lights.js';

describe('06 - Sharma ji ki Diwali Decoration (8 pts)', () => {

  describe('All items fit within budget', () => {
    test('Single light string within budget', () => {
      expect(diwaliLightsPlan(
        [{ color: "white", length: 5 }],
        200
      )).toEqual({
        selected: [{ color: "white", length: 5, cost: 150 }],
        totalLength: 5,
        totalCost: 150
      });
    });

    test('Multiple strings all within budget', () => {
      expect(diwaliLightsPlan(
        [{ color: "white", length: 3 }, { color: "golden", length: 2 }],
        300
      )).toEqual({
        selected: [
          { color: "white", length: 3, cost: 90 },
          { color: "golden", length: 2, cost: 100 }
        ],
        totalLength: 5,
        totalCost: 190
      });
    });
  });

  describe('Over budget - trimming from end', () => {
    test('Removes last item to fit budget', () => {
      expect(diwaliLightsPlan(
        [{ color: "white", length: 5 }, { color: "golden", length: 10 }],
        200
      )).toEqual({
        selected: [{ color: "white", length: 5, cost: 150 }],
        totalLength: 5,
        totalCost: 150
      });
    });

    test('Removes multiple items from end to fit budget', () => {
      expect(diwaliLightsPlan(
        [
          { color: "golden", length: 5 },
          { color: "white", length: 10 },
          { color: "multicolor", length: 3 }
        ],
        400
      )).toEqual({
        selected: [{ color: "golden", length: 5, cost: 250 }],
        totalLength: 5,
        totalCost: 250
      });
    });

    test('All items removed if budget is too small', () => {
      expect(diwaliLightsPlan(
        [{ color: "golden", length: 10 }],
        100
      )).toEqual({
        selected: [],
        totalLength: 0,
        totalCost: 0
      });
    });
  });

  describe('Color rates', () => {
    test('Golden = Rs 50/meter', () => {
      expect(diwaliLightsPlan(
        [{ color: "golden", length: 4 }],
        500
      )).toEqual({
        selected: [{ color: "golden", length: 4, cost: 200 }],
        totalLength: 4,
        totalCost: 200
      });
    });

    test('Multicolor = Rs 40/meter', () => {
      expect(diwaliLightsPlan(
        [{ color: "multicolor", length: 5 }],
        500
      )).toEqual({
        selected: [{ color: "multicolor", length: 5, cost: 200 }],
        totalLength: 5,
        totalCost: 200
      });
    });

    test('White = Rs 30/meter', () => {
      expect(diwaliLightsPlan(
        [{ color: "white", length: 6 }],
        500
      )).toEqual({
        selected: [{ color: "white", length: 6, cost: 180 }],
        totalLength: 6,
        totalCost: 180
      });
    });

    test('Other color = Rs 35/meter', () => {
      expect(diwaliLightsPlan(
        [{ color: "red", length: 4 }],
        500
      )).toEqual({
        selected: [{ color: "red", length: 4, cost: 140 }],
        totalLength: 4,
        totalCost: 140
      });
    });
  });

  describe('Validation', () => {
    test('Non-array lightStrings returns zeroed object', () => {
      expect(diwaliLightsPlan("lights", 500)).toEqual({
        selected: [], totalLength: 0, totalCost: 0
      });
    });

    test('Negative budget returns zeroed object', () => {
      expect(diwaliLightsPlan([{ color: "white", length: 5 }], -100)).toEqual({
        selected: [], totalLength: 0, totalCost: 0
      });
    });

    test('Zero budget returns zeroed object', () => {
      expect(diwaliLightsPlan([{ color: "white", length: 5 }], 0)).toEqual({
        selected: [], totalLength: 0, totalCost: 0
      });
    });

    test('Non-number budget returns zeroed object', () => {
      expect(diwaliLightsPlan([{ color: "white", length: 5 }], "cheap")).toEqual({
        selected: [], totalLength: 0, totalCost: 0
      });
    });
  });
});
