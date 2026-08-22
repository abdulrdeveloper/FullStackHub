/**
 * 🍱 Mumbai Tiffin Service - Plan Builder
 *
 * Mumbai ki famous tiffin delivery service hai. Customer ka plan banana hai
 * using destructuring parameters aur rest/spread operators.
 *
 * Functions:
 *
 *   1. createTiffinPlan({ name, mealType = "veg", days = 30 })
 *      - Destructured parameter with defaults!
 *      - Meal prices per day: veg=80, nonveg=120, jain=90
 *      - Agar mealType unknown hai, return null
 *      - Agar name missing/empty, return null
 *      - Return: { name, mealType, days, dailyRate, totalCost }
 *
 *   2. combinePlans(...plans)
 *      - Rest parameter! Takes any number of plan objects
 *      - Each plan: { name, mealType, days, dailyRate, totalCost }
 *      - Return: { totalCustomers, totalRevenue, mealBreakdown }
 *      - mealBreakdown: { veg: count, nonveg: count, ... }
 *      - Agar koi plans nahi diye, return null
 *
 *   3. applyAddons(plan, ...addons)
 *      - plan: { name, mealType, days, dailyRate, totalCost }
 *      - Each addon: { name: "raita", price: 15 }
 *      - Add each addon price to dailyRate
 *      - Recalculate totalCost = new dailyRate * days
 *      - Return NEW plan object (don't modify original)
 *      - addonNames: array of addon names added
 *      - Agar plan null hai, return null
 *
 * Hint: Use { destructuring } in params, ...rest for variable args,
 *   spread operator for creating new objects
 *
 * @example
 *   createTiffinPlan({ name: "Rahul" })
 *   // => { name: "Rahul", mealType: "veg", days: 30, dailyRate: 80, totalCost: 2400 }
 *
 *   combinePlans(plan1, plan2, plan3)
 *   // => { totalCustomers: 3, totalRevenue: 7200, mealBreakdown: { veg: 2, nonveg: 1 } }
 */
export function createTiffinPlan({ name, mealType = "veg", days = 30 } = {}) {
  if (!name || typeof mealType !== "string") {
    return null;
  }
  let dailyRate;
  let totalCost = 0;

  if (mealType === "veg") {
    dailyRate = 80;
    totalCost = dailyRate * days;
  }
  else if (mealType === "nonveg") {
    dailyRate = 120;
    totalCost = dailyRate * days;
  }
  else if (mealType === "jain") {
    dailyRate = 90;
    totalCost = dailyRate * days;
  }
  else {
    return null;
  }

  return {
    name,
    mealType,
    days,
    dailyRate,
    totalCost
  }
}

export function combinePlans(...plans) {
  if (plans.length === 0) {
    return null;
  }
  let totalCustomers = plans.length;
  const totalRevenue = plans.reduce((total, plan) => total + plan.totalCost, 0);
  const mealBreakdown = {};
  plans.forEach(plan => {
    if (mealBreakdown[plan.mealType]) {
      mealBreakdown[plan.mealType] += 1;
    }
    else {
      mealBreakdown[plan.mealType] = 1;
    }
  })
  return { totalCustomers, totalRevenue, mealBreakdown }
}

export function applyAddons(plan, ...addons) {
  if (plan === null) {
    return null;
  }
  let newPlan = { ...plan };
  let addonNames = [];

  for (let addon of addons) {
    let newaddonPrice = addon.price;

    addonNames.push(addon.name);
    newPlan.dailyRate += newaddonPrice;
    
    let newDailyRate = newPlan.dailyRate;
    newPlan.totalCost = newDailyRate * newPlan.days;
  }
  newPlan.addonNames = addonNames;
  return newPlan;
}
