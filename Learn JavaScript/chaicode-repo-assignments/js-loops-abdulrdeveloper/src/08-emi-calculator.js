/**
 * 📱 Rohit ka Phone EMI Calculator
 *
 * Rohit ne naya phone liya hai EMI pe! Usse jaanna hai ki kitne months
 * lagenge phone ka poora paisa chukane mein. Har month interest lagta hai
 * remaining amount pe, aur phir EMI deduct hoti hai.
 *
 * Rules (use while loop):
 *   - Start with principal amount (remaining balance)
 *   - Each month:
 *     1. Calculate interest = remaining * monthlyRate (monthlyRate is like 0.02 for 2%)
 *     2. Add interest to remaining: remaining = remaining + interest
 *     3. Deduct EMI: remaining = remaining - emi
 *     4. Increment months count
 *     5. Add emi to totalPaid
 *   - Continue while remaining > 0
 *   - In the last month, if remaining < emi, just pay what's left
 *     (totalPaid += remaining before deduction, not full emi)
 *
 * Infinite loop protection:
 *   - Agar EMI <= first month's interest (principal * monthlyRate),
 *     toh loan kabhi khatam nahi hoga!
 *     Return: { months: -1, totalPaid: -1, totalInterest: -1 }
 *
 * Validation:
 *   - All three params must be positive numbers, else return
 *     { months: -1, totalPaid: -1, totalInterest: -1 }
 *
 * @param {number} principal - Loan amount (phone ki price)
 * @param {number} monthlyRate - Monthly interest rate (e.g., 0.02 for 2%)
 * @param {number} emi - Monthly EMI amount
 * @returns {{ months: number, totalPaid: number, totalInterest: number }}
 *
 * @example
 *   calculateEMI(10000, 0.01, 2000)
 *   // Month 1: 10000 + 100 = 10100, pay 2000, remaining = 8100
 *   // Month 2: 8100 + 81 = 8181, pay 2000, remaining = 6181
 *   // ... continues until remaining <= 0
 *
 *   calculateEMI(10000, 0.05, 400)
 *   // First month interest = 500, EMI = 400 < 500, INFINITE LOOP!
 *   // => { months: -1, totalPaid: -1, totalInterest: -1 }
 */
export function calculateEMI(principal, monthlyRate, emi) {
  if (principal <= 0 || monthlyRate <= 0 || emi <= 0 || typeof principal !== "number" || typeof emi !== "number" || typeof monthlyRate !== "number") {
    return { months: -1, totalPaid: -1, totalInterest: -1 };
  }

  let firstMonthInterest = principal * monthlyRate;  // sabse pehle mahine ka interest check krna he ke kitnay months mai cover krna he and agar bank ka interest , user ki emi se zyaada he to infinte loop ho jaiy ga kyo ke bank ko user ki emi se zyaada paise nai dene so reutrn -1
  if (emi <= firstMonthInterest)
    return { months: -1, totalPaid: -1, totalInterest: -1 };

 let remaining = principal;
 let totalPaid = 0;     // jo usne abhi tak day diay hain
 let totalInterest = 0; // total interest (jo har mahine bank ki taraf se interest lagta tha uska total)
 let months = 0;        // total months kitnay months mai pay krnay hain / kr diay
 let interest;          // har mahine ka interest jo usne dena he

  while (remaining > 0) {
    interest = remaining * monthlyRate; // jo abhi baaki hai (remaining) × monthly rate = is mahine ka interest , EMI ka yahan koi kaam nahi, sirf baaki amount pe rate lagta hai
    remaining += interest;              // ab unho ne interest ko bi remaining (total price of mobile, jo usne abhi dene hain) mai add krdi he kyo ke ose har mahine bank ki taraf se extra interest lagta he 
    totalInterest += interest;

    if (remaining <= emi) {   // agar emi ke paise total paiso se zyaada hogaiy hain to jo remaining paise bach gaiy hain sirf vo ek hi bar mai day do full emi nai dene ki zroorat 
      totalPaid += remaining; // agar vo bi paise dy diay to unhay bi total paid mai dalo and final show krwao
      remaining = 0;
    }
    else { // agar emi , total remaining paiso se zyada he to emi bi pay kro 
      totalPaid += emi;
      remaining -= emi;
    }
    months++;
  }
  return {
    months: months,
    totalPaid: Math.round(totalPaid * 100)/100,
    totalInterest: Math.round(totalInterest * 100)/100
  }
}

