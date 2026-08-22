/**
 * ☕ Raju ki Chai Tapri - Revenue Calculator
 *
 * Raju bhai apni chai tapri chalate hain station ke bahar. Subah se shaam tak
 * customers aate hain aur Raju bhai sabko chai pilate hain. Ab Raju bhai ko
 * apna daily revenue calculate karna hai.
 *
 * Raju bhai ka special rule:
 *   - Har 3rd customer ko milti hai "Adrak Chai" (special ginger tea) = Rs 15
 *   - Baaki sab ko milti hai "Cutting Chai" = Rs 10
 *   - Customer 1 = cutting, Customer 2 = cutting, Customer 3 = adrak,
 *     Customer 4 = cutting, Customer 5 = cutting, Customer 6 = adrak ... and so on
 *
 * Validation:
 *   - Agar customers ek positive integer nahi hai (e.g., negative, zero, decimal,
 *     string, etc.), toh return karo: { totalChai: 0, totalRevenue: 0 }
 *
 * @param {number} customers - Kitne customers aaye aaj
 * @returns {{ totalChai: number, totalRevenue: number }} Total chai served and revenue earned
 *
 * @example
 *   chaiTapriRevenue(6)
 *   // => { totalChai: 6, totalRevenue: 70 }
 *   // 4 cutting (4*10=40) + 2 adrak (2*15=30) = 70
 *
 *   chaiTapriRevenue(0)
 *   // => { totalChai: 0, totalRevenue: 0 }
 */
export function chaiTapriRevenue(customers) {
  if(customers <= 0 || !Number.isInteger(customers)){
    return {totalChai:0, totalRevenue:0}
  }
  
  let totalRevenue = 0;
  for(let i=1; i<=customers; i++){
   
    if(i % 3 === 0){
      totalRevenue += 15;
    }
    else{
     totalRevenue +=10;
    }

  }

   return {
    totalChai: customers,
    totalRevenue: totalRevenue
  }

}