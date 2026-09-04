import { rangoli } from '../src/11-rangoli-pattern.js';

describe('11 - Priya ki Diwali Rangoli (10 pts)', () => {

  describe('Basic patterns', () => {
    test('n=1 produces single star', () => {
      expect(rangoli(1)).toEqual(["*"]);
    });

    test('n=2 produces 3-row diamond', () => {
      expect(rangoli(2)).toEqual([
        " *",
        "* *",
        " *"
      ]);
    });

    test('n=3 produces 5-row diamond', () => {
      expect(rangoli(3)).toEqual([
        "  *",
        " * *",
        "* * *",
        " * *",
        "  *"
      ]);
    });

    test('n=4 produces 7-row diamond', () => {
      expect(rangoli(4)).toEqual([
        "   *",
        "  * *",
        " * * *",
        "* * * *",
        " * * *",
        "  * *",
        "   *"
      ]);
    });

    test('n=5 produces 9-row diamond', () => {
      expect(rangoli(5)).toEqual([
        "    *",
        "   * *",
        "  * * *",
        " * * * *",
        "* * * * *",
        " * * * *",
        "  * * *",
        "   * *",
        "    *"
      ]);
    });
  });

  describe('Pattern properties', () => {
    test('Total rows = 2n - 1', () => {
      expect(rangoli(3).length).toBe(5);
      expect(rangoli(4).length).toBe(7);
      expect(rangoli(6).length).toBe(11);
    });

    test('Middle row (widest) has n stars', () => {
      const pattern = rangoli(4);
      const middleRow = pattern[3]; // index n-1
      const stars = middleRow.split(' ').filter(c => c === '*').length;
      expect(stars).toBe(4);
    });

    test('First and last rows have 1 star', () => {
      const pattern = rangoli(5);
      expect(pattern[0].trim()).toBe("*");
      expect(pattern[pattern.length - 1].trim()).toBe("*");
    });

    test('Pattern is symmetric (top mirrors bottom)', () => {
      const pattern = rangoli(4);
      expect(pattern[0]).toBe(pattern[6]);
      expect(pattern[1]).toBe(pattern[5]);
      expect(pattern[2]).toBe(pattern[4]);
    });

    test('No trailing spaces on any row', () => {
      const pattern = rangoli(5);
      for (const row of pattern) {
        expect(row).toBe(row.trimEnd());
      }
    });
  });

  describe('Validation', () => {
    test('n=0 returns empty array', () => {
      expect(rangoli(0)).toEqual([]);
    });

    test('Negative n returns empty array', () => {
      expect(rangoli(-3)).toEqual([]);
    });

    test('Decimal n returns empty array', () => {
      expect(rangoli(2.5)).toEqual([]);
    });

    test('String n returns empty array', () => {
      expect(rangoli("three")).toEqual([]);
    });

    test('null returns empty array', () => {
      expect(rangoli(null)).toEqual([]);
    });

    test('undefined returns empty array', () => {
      expect(rangoli(undefined)).toEqual([]);
    });
  });
});
