import { Player, Batsman, Bowler, AllRounder } from '../src/04-cricket-academy.js';

describe('04 - Cricket Academy: Inheritance with extends & super (8 pts)', () => {
  describe('Player base class', () => {
    test('Player constructor sets name, age, team and trainingHours = 0', () => {
      const p = new Player('Rohit', 37, 'India');
      expect(p.name).toBe('Rohit');
      expect(p.age).toBe(37);
      expect(p.team).toBe('India');
      expect(p.trainingHours).toBe(0);
    });

    test('Player.getProfile returns correct profile object', () => {
      const p = new Player('Rohit', 37, 'India');
      expect(p.getProfile()).toEqual({
        name: 'Rohit', age: 37, team: 'India', role: 'player', trainingHours: 0,
      });
    });

    test('Player.train adds hours and returns updated total', () => {
      const p = new Player('Rohit', 37, 'India');
      expect(p.train(5)).toBe(5);
      expect(p.train(3)).toBe(8);
    });

    test('Player.train returns -1 for non-positive hours', () => {
      const p = new Player('Rohit', 37, 'India');
      expect(p.train(0)).toBe(-1);
      expect(p.train(-2)).toBe(-1);
    });
  });

  describe('Batsman class (extends Player)', () => {
    test('Batsman is an instance of both Batsman and Player', () => {
      const b = new Batsman('Virat', 35, 'India', 'right-hand');
      expect(b instanceof Batsman).toBe(true);
      expect(b instanceof Player).toBe(true);
    });

    test('playInnings records innings and returns innings object', () => {
      const b = new Batsman('Virat', 35, 'India', 'right-hand');
      const innings = b.playInnings(82, 53);
      expect(innings).toEqual({ runs: 82, balls: 53, strikeRate: (82 / 53) * 100 });
    });

    test('playInnings returns null for invalid input', () => {
      const b = new Batsman('Virat', 35, 'India', 'right-hand');
      expect(b.playInnings(-1, 50)).toBeNull();
      expect(b.playInnings(50, 0)).toBeNull();
    });

    test('getStrikeRate returns average strike rate across innings', () => {
      const b = new Batsman('Virat', 35, 'India', 'right-hand');
      b.playInnings(100, 60);
      b.playInnings(50, 50);
      const avg = ((100 / 60) * 100 + (50 / 50) * 100) / 2;
      expect(b.getStrikeRate()).toBeCloseTo(avg);
    });

    test('getStrikeRate returns 0 when no innings played', () => {
      const b = new Batsman('Virat', 35, 'India', 'right-hand');
      expect(b.getStrikeRate()).toBe(0);
    });

    test('Batsman.getProfile overrides role to batsman and includes batting stats', () => {
      const b = new Batsman('Virat', 35, 'India', 'right-hand');
      b.train(5);
      b.playInnings(82, 53);
      const profile = b.getProfile();
      expect(profile.role).toBe('batsman');
      expect(profile.battingStyle).toBe('right-hand');
      expect(profile.totalRuns).toBe(82);
      expect(profile.inningsPlayed).toBe(1);
      expect(profile.trainingHours).toBe(5);
    });
  });

  describe('Bowler class (extends Player)', () => {
    test('Bowler is an instance of both Bowler and Player', () => {
      const bw = new Bowler('Bumrah', 30, 'India', 'fast');
      expect(bw instanceof Bowler).toBe(true);
      expect(bw instanceof Player).toBe(true);
    });

    test('bowlSpell records spell and returns spell object', () => {
      const bw = new Bowler('Bumrah', 30, 'India', 'fast');
      const spell = bw.bowlSpell(3, 25, 4);
      expect(spell).toEqual({ wickets: 3, runsConceded: 25, overs: 4, economy: 6.25 });
    });

    test('bowlSpell returns null for invalid input', () => {
      const bw = new Bowler('Bumrah', 30, 'India', 'fast');
      expect(bw.bowlSpell(-1, 25, 4)).toBeNull();
      expect(bw.bowlSpell(3, -1, 4)).toBeNull();
      expect(bw.bowlSpell(3, 25, 0)).toBeNull();
    });

    test('getEconomy returns average economy across spells', () => {
      const bw = new Bowler('Bumrah', 30, 'India', 'fast');
      bw.bowlSpell(2, 20, 4);
      bw.bowlSpell(1, 30, 4);
      const avg = (20 / 4 + 30 / 4) / 2;
      expect(bw.getEconomy()).toBeCloseTo(avg);
    });

    test('Bowler.getProfile overrides role to bowler and includes bowling stats', () => {
      const bw = new Bowler('Bumrah', 30, 'India', 'fast');
      bw.bowlSpell(3, 25, 4);
      const profile = bw.getProfile();
      expect(profile.role).toBe('bowler');
      expect(profile.bowlingStyle).toBe('fast');
      expect(profile.totalWickets).toBe(3);
      expect(profile.spellsBowled).toBe(1);
    });
  });

  describe('AllRounder class (extends Player)', () => {
    test('AllRounder is an instance of AllRounder and Player', () => {
      const ar = new AllRounder('Hardik', 30, 'India', 'right-hand', 'medium');
      expect(ar instanceof AllRounder).toBe(true);
      expect(ar instanceof Player).toBe(true);
    });

    test('AllRounder can bat and bowl', () => {
      const ar = new AllRounder('Hardik', 30, 'India', 'right-hand', 'medium');
      const innings = ar.playInnings(71, 30);
      const spell = ar.bowlSpell(2, 30, 4);
      expect(innings.runs).toBe(71);
      expect(spell.wickets).toBe(2);
    });

    test('AllRounder.getProfile has role allrounder with both batting and bowling stats', () => {
      const ar = new AllRounder('Hardik', 30, 'India', 'right-hand', 'medium');
      ar.playInnings(71, 30);
      ar.bowlSpell(2, 30, 4);
      const profile = ar.getProfile();
      expect(profile.role).toBe('allrounder');
      expect(profile.battingStyle).toBe('right-hand');
      expect(profile.bowlingStyle).toBe('medium');
      expect(profile.totalRuns).toBe(71);
      expect(profile.totalWickets).toBe(2);
      expect(profile.inningsPlayed).toBe(1);
      expect(profile.spellsBowled).toBe(1);
    });

    test('AllRounder getStrikeRate and getEconomy work correctly', () => {
      const ar = new AllRounder('Hardik', 30, 'India', 'right-hand', 'medium');
      expect(ar.getStrikeRate()).toBe(0);
      expect(ar.getEconomy()).toBe(0);
      ar.playInnings(100, 50);
      ar.bowlSpell(1, 40, 4);
      expect(ar.getStrikeRate()).toBeCloseTo(200);
      expect(ar.getEconomy()).toBeCloseTo(10);
    });
  });
});
