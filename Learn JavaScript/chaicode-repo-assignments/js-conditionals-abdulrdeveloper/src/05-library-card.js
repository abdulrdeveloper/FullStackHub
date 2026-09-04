/**
 * 📚 Maple Town Library
 *
 * The librarian at Maple Town Public Library is tired of manually checking
 * whether members can borrow books. She asks you to automate it!
 *
 * A member can borrow books ONLY if ALL of these are true:
 *   1. They are at least 6 years old
 *   2. They have a valid library card (hasValidCard is true)
 *   3. They have zero overdue books
 *
 * Return an object with two properties:
 *   - allowed: boolean (true if they can borrow, false otherwise)
 *   - message: string (a descriptive message)
 *
 * Check conditions in this order and return the FIRST failure:
 *   - Age < 6:
 *     { allowed: false, message: "Too young - must be at least 6 years old" }
 *
 *   - No valid card:
 *     { allowed: false, message: "Invalid library card - please renew at the front desk" }
 *
 *   - Has overdue books:
 *     { allowed: false, message: "Please return your X overdue book(s) first" }
 *     (replace X with the actual number of overdue books)
 *
 *   - All conditions met:
 *     { allowed: true, message: "You may borrow up to 3 books" }
 *
 * @param {number} memberAge - The member's age
 * @param {boolean} hasValidCard - Whether they have a valid library card
 * @param {number} overdueBooks - Number of overdue books
 * @returns {{ allowed: boolean, message: string }}
 */
export function canBorrowBook(memberAge, hasValidCard, overdueBooks) {
  
  if(memberAge < 6){
    return  { allowed: false, message: "Too young - must be at least 6 years old" };
  }
  
  if(!hasValidCard){
    return  { allowed: false, message: "Invalid library card - please renew at the front desk" };
  }

  if(overdueBooks > 0){
    return  { allowed: false, message: `Please return your ${overdueBooks} overdue book(s) first` };
  }

  if(memberAge > 5 && hasValidCard && overdueBooks == 0){
    return  { allowed: true, message: "You may borrow up to 3 books" };
  }
}
