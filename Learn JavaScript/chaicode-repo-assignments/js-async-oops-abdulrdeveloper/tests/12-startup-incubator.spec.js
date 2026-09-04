import { Startup, Incubator, runDemoDay } from '../src/12-startup-incubator.js';

describe('12 - Startup Incubator: Capstone (9 pts)', () => {
  describe('Startup class', () => {
    test('Startup constructor sets name, founder, domain and funding = 0', () => {
      const s = new Startup('PayEasy', 'Rahul', 'fintech');
      expect(s.name).toBe('PayEasy');
      expect(s.founder).toBe('Rahul');
      expect(s.domain).toBe('fintech');
      expect(s.funding).toBe(0);
      expect(s).toHaveProperty('founded');
    });

    test('Startup constructor throws for invalid domain', () => {
      expect(() => new Startup('X', 'Y', 'crypto')).toThrow(
        'Invalid domain! Choose from: fintech, edtech, healthtech, foodtech'
      );
    });

    test('raiseFunding adds amount and returns new total', () => {
      const s = new Startup('PayEasy', 'Rahul', 'fintech');
      expect(s.raiseFunding(5000000)).toBe(5000000);
      expect(s.raiseFunding(2000000)).toBe(7000000);
    });

    test('raiseFunding returns -1 for non-positive amount', () => {
      const s = new Startup('PayEasy', 'Rahul', 'fintech');
      expect(s.raiseFunding(0)).toBe(-1);
      expect(s.raiseFunding(-100)).toBe(-1);
    });

    test('getPitch returns correct formatted string using this', () => {
      const s = new Startup('PayEasy', 'Rahul', 'fintech');
      s.raiseFunding(5000000);
      expect(s.getPitch()).toBe('PayEasy by Rahul | Domain: fintech | Funding: Rs.5000000');
    });
  });

  describe('Incubator class - admitStartup', () => {
    test('admitStartup admits valid startup', async () => {
      const incubator = new Incubator('T-Hub', 10);
      const s = new Startup('EduLearn', 'Priya', 'edtech');
      const result = await incubator.admitStartup(s);
      expect(result).toEqual({ success: true, message: 'EduLearn admitted to T-Hub!' });
    });

    test('admitStartup rejects non-Startup instance', async () => {
      const incubator = new Incubator('T-Hub', 10);
      await expect(incubator.admitStartup({ name: 'fake' })).rejects.toThrow('Invalid startup!');
    });

    test('admitStartup rejects duplicate startup', async () => {
      const incubator = new Incubator('T-Hub', 10);
      const s = new Startup('EduLearn', 'Priya', 'edtech');
      await incubator.admitStartup(s);
      await expect(incubator.admitStartup(s)).rejects.toThrow('Startup already admitted!');
    });

    test('admitStartup rejects when incubator is full', async () => {
      const incubator = new Incubator('T-Hub', 1);
      const s1 = new Startup('EduLearn', 'Priya', 'edtech');
      const s2 = new Startup('HealthFirst', 'Amit', 'healthtech');
      await incubator.admitStartup(s1);
      await expect(incubator.admitStartup(s2)).rejects.toThrow('Incubator full!');
    });
  });

  describe('Incubator class - removeStartup and assignMentor', () => {
    test('removeStartup removes startup by name', async () => {
      const incubator = new Incubator('T-Hub', 10);
      const s = new Startup('EduLearn', 'Priya', 'edtech');
      await incubator.admitStartup(s);
      expect(incubator.removeStartup('EduLearn')).toBe(true);
    });

    test('removeStartup returns false for non-existent startup', () => {
      const incubator = new Incubator('T-Hub', 10);
      expect(incubator.removeStartup('Ghost')).toBe(false);
    });

    test('assignMentor assigns mentor to existing startup', async () => {
      const incubator = new Incubator('T-Hub', 10);
      const s = new Startup('EduLearn', 'Priya', 'edtech');
      await incubator.admitStartup(s);
      const result = await incubator.assignMentor('EduLearn', { name: 'Guru', expertise: 'tech' });
      expect(result).toEqual({ success: true, message: 'Guru assigned to EduLearn' });
    });

    test('assignMentor throws for non-existent startup', async () => {
      const incubator = new Incubator('T-Hub', 10);
      await expect(
        incubator.assignMentor('Ghost', { name: 'Guru', expertise: 'tech' })
      ).rejects.toThrow('Startup not found!');
    });
  });

  describe('Incubator class - conductDemo', () => {
    test('conductDemo returns demo result for admitted startup', async () => {
      const incubator = new Incubator('T-Hub', 10);
      const s = new Startup('EduLearn', 'Priya', 'edtech');
      await incubator.admitStartup(s);
      const result = await incubator.conductDemo('EduLearn');
      expect(result.startup).toBe('EduLearn');
      expect(result.score).toBeGreaterThanOrEqual(60);
      expect(result.score).toBeLessThanOrEqual(100);
      expect(result).toHaveProperty('feedback');
      expect(result).toHaveProperty('timestamp');
    });

    test('conductDemo throws for non-existent startup', async () => {
      const incubator = new Incubator('T-Hub', 10);
      await expect(incubator.conductDemo('Ghost')).rejects.toThrow('Startup not found!');
    });
  });

  describe('Incubator class - batchProcess', () => {
    test('batchProcess admits multiple startups using allSettled', async () => {
      const incubator = new Incubator('T-Hub', 10);
      const startups = [
        new Startup('HealthFirst', 'Amit', 'healthtech'),
        new Startup('FoodDash', 'Neha', 'foodtech'),
      ];
      const results = await incubator.batchProcess(startups);
      expect(results.length).toBe(2);
      expect(results[0].status).toBe('fulfilled');
      expect(results[1].status).toBe('fulfilled');
    });

    test('batchProcess handles mixed success/failure', async () => {
      const incubator = new Incubator('T-Hub', 1);
      const startups = [
        new Startup('HealthFirst', 'Amit', 'healthtech'),
        new Startup('FoodDash', 'Neha', 'foodtech'),
      ];
      const results = await incubator.batchProcess(startups);
      expect(results.length).toBe(2);
      expect(results[0].status).toBe('fulfilled');
      expect(results[1].status).toBe('rejected');
    });
  });

  describe('Incubator class - getStartupsByDomain and getTopFunded', () => {
    test('getStartupsByDomain filters by domain', async () => {
      const incubator = new Incubator('T-Hub', 10);
      const s1 = new Startup('Pay1', 'A', 'fintech');
      const s2 = new Startup('Edu1', 'B', 'edtech');
      const s3 = new Startup('Pay2', 'C', 'fintech');
      await incubator.admitStartup(s1);
      await incubator.admitStartup(s2);
      await incubator.admitStartup(s3);
      const fintechs = incubator.getStartupsByDomain('fintech');
      expect(fintechs.length).toBe(2);
      expect(fintechs[0].name).toBe('Pay1');
    });

    test('getStartupsByDomain returns empty array for no matches', async () => {
      const incubator = new Incubator('T-Hub', 10);
      expect(incubator.getStartupsByDomain('fintech')).toEqual([]);
    });

    test('getTopFunded returns startups sorted by funding', async () => {
      const incubator = new Incubator('T-Hub', 10);
      const s1 = new Startup('Pay1', 'A', 'fintech');
      s1.raiseFunding(1000);
      const s2 = new Startup('Pay2', 'B', 'fintech');
      s2.raiseFunding(5000);
      const s3 = new Startup('Pay3', 'C', 'edtech');
      s3.raiseFunding(3000);
      await incubator.admitStartup(s1);
      await incubator.admitStartup(s2);
      await incubator.admitStartup(s3);
      const top2 = incubator.getTopFunded(2);
      expect(top2.length).toBe(2);
      expect(top2[0].name).toBe('Pay2');
      expect(top2[1].name).toBe('Pay3');
    });

    test('getTopFunded returns empty array for n <= 0', () => {
      const incubator = new Incubator('T-Hub', 10);
      expect(incubator.getTopFunded(0)).toEqual([]);
    });
  });

  describe('Symbol.iterator and static createFromConfig', () => {
    test('incubator is iterable with for...of yielding Startup instances', async () => {
      const incubator = new Incubator('T-Hub', 10);
      const s1 = new Startup('Pay1', 'A', 'fintech');
      const s2 = new Startup('Edu1', 'B', 'edtech');
      await incubator.admitStartup(s1);
      await incubator.admitStartup(s2);
      const names = [];
      for (const startup of incubator) {
        names.push(startup.name);
      }
      expect(names).toEqual(['Pay1', 'Edu1']);
    });

    test('Incubator.createFromConfig creates incubator from config object', () => {
      const incubator = Incubator.createFromConfig({ name: 'Nexus', maxStartups: 5 });
      expect(incubator.name).toBe('Nexus');
      expect(incubator.maxStartups).toBe(5);
      expect(incubator instanceof Incubator).toBe(true);
    });

    test('Incubator.createFromConfig throws for invalid config', () => {
      expect(() => Incubator.createFromConfig({})).toThrow('Invalid config!');
      expect(() => Incubator.createFromConfig({ name: 'X' })).toThrow('Invalid config!');
    });
  });

  describe('runDemoDay standalone function', () => {
    test('runDemoDay conducts demo for all startups', async () => {
      const incubator = new Incubator('T-Hub', 10);
      const s1 = new Startup('EduLearn', 'Priya', 'edtech');
      const s2 = new Startup('FoodDash', 'Neha', 'foodtech');
      await incubator.admitStartup(s1);
      await incubator.admitStartup(s2);
      const result = await runDemoDay(incubator);
      expect(result.incubator).toBe('T-Hub');
      expect(result.totalStartups).toBe(2);
      expect(result.results.length).toBe(2);
      expect(result).toHaveProperty('timestamp');
    });
  });
});
