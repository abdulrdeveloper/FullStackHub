import { iplPointsTable } from '../src/07-ipl-points-table.js';

describe('07 - IPL Season Points Table (9 pts)', () => {

  describe('Basic match processing', () => {
    test('Single win match', () => {
      const result = iplPointsTable([
        { team1: "CSK", team2: "MI", result: "win", winner: "CSK" }
      ]);
      expect(result).toEqual([
        { team: "CSK", played: 1, won: 1, lost: 0, tied: 0, noResult: 0, points: 2 },
        { team: "MI", played: 1, won: 0, lost: 1, tied: 0, noResult: 0, points: 0 }
      ]);
    });

    test('Tie match gives 1 point each', () => {
      const result = iplPointsTable([
        { team1: "RCB", team2: "DC", result: "tie" }
      ]);
      expect(result).toEqual([
        { team: "DC", played: 1, won: 0, lost: 0, tied: 1, noResult: 0, points: 1 },
        { team: "RCB", played: 1, won: 0, lost: 0, tied: 1, noResult: 0, points: 1 }
      ]);
    });

    test('No result gives 1 point each', () => {
      const result = iplPointsTable([
        { team1: "KKR", team2: "SRH", result: "no_result" }
      ]);
      expect(result).toEqual([
        { team: "KKR", played: 1, won: 0, lost: 0, tied: 0, noResult: 1, points: 1 },
        { team: "SRH", played: 1, won: 0, lost: 0, tied: 0, noResult: 1, points: 1 }
      ]);
    });
  });

  describe('Multiple matches and sorting', () => {
    test('Multiple matches with correct sorting by points desc', () => {
      const result = iplPointsTable([
        { team1: "CSK", team2: "MI", result: "win", winner: "CSK" },
        { team1: "RCB", team2: "CSK", result: "win", winner: "CSK" },
        { team1: "MI", team2: "RCB", result: "win", winner: "MI" }
      ]);
      expect(result[0].team).toBe("CSK");
      expect(result[0].points).toBe(4);
      expect(result[1].team).toBe("MI");
      expect(result[1].points).toBe(2);
      expect(result[2].team).toBe("RCB");
      expect(result[2].points).toBe(0);
    });

    test('Equal points sorted alphabetically', () => {
      const result = iplPointsTable([
        { team1: "MI", team2: "CSK", result: "tie" },
        { team1: "RCB", team2: "DC", result: "tie" }
      ]);
      // All have 1 point, sorted alphabetically
      expect(result.map(t => t.team)).toEqual(["CSK", "DC", "MI", "RCB"]);
    });

    test('Full season scenario', () => {
      const result = iplPointsTable([
        { team1: "CSK", team2: "MI", result: "win", winner: "CSK" },
        { team1: "RCB", team2: "DC", result: "win", winner: "RCB" },
        { team1: "CSK", team2: "RCB", result: "tie" },
        { team1: "MI", team2: "DC", result: "no_result" },
        { team1: "DC", team2: "CSK", result: "win", winner: "CSK" }
      ]);
      // CSK: W, T, W = 2+1+2 = 5 pts
      // RCB: W, T = 2+1 = 3 pts
      // MI: L, NR = 0+1 = 1 pt
      // DC: L, NR, L = 0+1+0 = 1 pt
      expect(result[0].team).toBe("CSK");
      expect(result[0].points).toBe(5);
      expect(result[1].team).toBe("RCB");
      expect(result[1].points).toBe(3);
      // DC and MI both have 1 point, alphabetical: DC before MI
      expect(result[2].team).toBe("DC");
      expect(result[3].team).toBe("MI");
    });
  });

  describe('Correct stats tracking', () => {
    test('Tracks played, won, lost, tied, noResult correctly', () => {
      const result = iplPointsTable([
        { team1: "CSK", team2: "MI", result: "win", winner: "CSK" },
        { team1: "CSK", team2: "MI", result: "tie" },
        { team1: "CSK", team2: "MI", result: "no_result" }
      ]);
      const csk = result.find(t => t.team === "CSK");
      expect(csk).toEqual({
        team: "CSK", played: 3, won: 1, lost: 0, tied: 1, noResult: 1, points: 4
      });
      const mi = result.find(t => t.team === "MI");
      expect(mi).toEqual({
        team: "MI", played: 3, won: 0, lost: 1, tied: 1, noResult: 1, points: 2
      });
    });
  });

  describe('Validation', () => {
    test('Empty array returns []', () => {
      expect(iplPointsTable([])).toEqual([]);
    });

    test('Non-array returns []', () => {
      expect(iplPointsTable("matches")).toEqual([]);
    });

    test('null returns []', () => {
      expect(iplPointsTable(null)).toEqual([]);
    });
  });
});
