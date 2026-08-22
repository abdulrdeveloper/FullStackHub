import {
  createTiffinPlan,
  combinePlans,
  applyAddons,
} from '../src/03-tiffin-service.js';

describe('03 - Tiffin Service: Plan Builder (8 pts)', () => {
  describe('createTiffinPlan', () => {
    test('defaults: { name: "Rahul" } => mealType "veg", days 30, dailyRate 80, totalCost 2400', () => {
      expect(createTiffinPlan({ name: 'Rahul' })).toEqual({
        name: 'Rahul',
        mealType: 'veg',
        days: 30,
        dailyRate: 80,
        totalCost: 2400,
      });
    });

    test('nonveg plan: { name: "Amit", mealType: "nonveg", days: 15 } => dailyRate 120, totalCost 1800', () => {
      const result = createTiffinPlan({ name: 'Amit', mealType: 'nonveg', days: 15 });
      expect(result.dailyRate).toBe(120);
      expect(result.totalCost).toBe(1800);
      expect(result.mealType).toBe('nonveg');
      expect(result.days).toBe(15);
    });

    test('jain plan: dailyRate is 90', () => {
      const result = createTiffinPlan({ name: 'Priya', mealType: 'jain', days: 10 });
      expect(result.dailyRate).toBe(90);
      expect(result.totalCost).toBe(900);
    });

    test('veg plan with custom days', () => {
      const result = createTiffinPlan({ name: 'Neha', mealType: 'veg', days: 7 });
      expect(result).toEqual({
        name: 'Neha',
        mealType: 'veg',
        days: 7,
        dailyRate: 80,
        totalCost: 560,
      });
    });

    test('unknown mealType returns null', () => {
      expect(createTiffinPlan({ name: 'Test', mealType: 'keto' })).toBeNull();
    });

    test('missing name returns null', () => {
      expect(createTiffinPlan({ mealType: 'veg' })).toBeNull();
    });

    test('empty name returns null', () => {
      expect(createTiffinPlan({ name: '', mealType: 'veg' })).toBeNull();
    });

    test('no arguments uses defaults from destructuring', () => {
      expect(createTiffinPlan()).toBeNull();
    });
  });

  describe('combinePlans', () => {
    const plan1 = { name: 'Rahul', mealType: 'veg', days: 30, dailyRate: 80, totalCost: 2400 };
    const plan2 = { name: 'Amit', mealType: 'nonveg', days: 15, dailyRate: 120, totalCost: 1800 };
    const plan3 = { name: 'Priya', mealType: 'veg', days: 30, dailyRate: 80, totalCost: 2400 };

    test('combines two plans correctly', () => {
      const result = combinePlans(plan1, plan2);
      expect(result.totalCustomers).toBe(2);
      expect(result.totalRevenue).toBe(4200);
    });

    test('mealBreakdown counts mealTypes', () => {
      const result = combinePlans(plan1, plan2, plan3);
      expect(result.mealBreakdown.veg).toBe(2);
      expect(result.mealBreakdown.nonveg).toBe(1);
    });

    test('three plans: totalCustomers is 3', () => {
      const result = combinePlans(plan1, plan2, plan3);
      expect(result.totalCustomers).toBe(3);
      expect(result.totalRevenue).toBe(6600);
    });

    test('no plans returns null', () => {
      expect(combinePlans()).toBeNull();
    });

    test('single plan works correctly', () => {
      const result = combinePlans(plan1);
      expect(result.totalCustomers).toBe(1);
      expect(result.totalRevenue).toBe(2400);
    });
  });

  describe('applyAddons', () => {
    const basePlan = { name: 'Rahul', mealType: 'veg', days: 30, dailyRate: 80, totalCost: 2400 };

    test('adds raita addon: dailyRate increased by 15, totalCost recalculated', () => {
      const result = applyAddons(basePlan, { name: 'raita', price: 15 });
      expect(result.dailyRate).toBe(95);
      expect(result.totalCost).toBe(2850);
    });

    test('multiple addons increase dailyRate cumulatively', () => {
      const result = applyAddons(basePlan, { name: 'raita', price: 15 }, { name: 'papad', price: 10 });
      expect(result.dailyRate).toBe(105);
      expect(result.totalCost).toBe(3150);
    });

    test('returns NEW object — original plan unchanged', () => {
      const originalRate = basePlan.dailyRate;
      const originalCost = basePlan.totalCost;
      const result = applyAddons(basePlan, { name: 'raita', price: 15 });
      expect(basePlan.dailyRate).toBe(originalRate);
      expect(basePlan.totalCost).toBe(originalCost);
      expect(result).not.toBe(basePlan);
    });

    test('result includes addonNames array', () => {
      const result = applyAddons(basePlan, { name: 'raita', price: 15 }, { name: 'papad', price: 10 });
      expect(result.addonNames).toEqual(['raita', 'papad']);
    });

    test('null plan returns null', () => {
      expect(applyAddons(null, { name: 'raita', price: 15 })).toBeNull();
    });

    test('no addons returns copy of plan with empty addonNames', () => {
      const result = applyAddons(basePlan);
      expect(result.dailyRate).toBe(80);
      expect(result.totalCost).toBe(2400);
    });
  });
});
