/**
 * 🛺 Pappu ka Auto Rickshaw Meter (Mumbai Style)
 *
 * Pappu auto chalata hai Mumbai mein. Uska meter thoda unique hai - distance
 * ke hisaab se rate change hota hai. Aur agar passenger ne waiting karaya,
 * toh uska bhi charge lagta hai.
 *
 * Fare calculation (use while loop, process km by km):
 *   - First 1 km (minimum fare): Rs 30
 *   - Km 2 to 5 (i.e., next 4 km): Rs 15 per km
 *   - Beyond 5 km: Rs 10 per km
 *   - Distance ko Math.ceil() karo (e.g., 3.2 km = 4 km charge)
 *
 * Waiting charges:
 *   - Rs 5 per 2 minutes of waiting
 *   - Waiting minutes ko bhi Math.ceil() karo for pairs
 *     (e.g., 3 min = 2 pairs = Rs 10, 5 min = 3 pairs = Rs 15)
 *   - If waitingMinutes is not provided, default is 0
 *
 * Validation:
 *   - Agar distance ek positive number nahi hai, return -1
 *   - Agar waitingMinutes negative hai, return -1
 *
 * @param {number} distance - Distance in kilometers
 * @param {number} [waitingMinutes=0] - Waiting time in minutes
 * @returns {number} Total fare in rupees, or -1 for invalid input
 *
 * @example
 *   calculateAutoFare(3)    // => 60  (30 + 15 + 15)
 *   calculateAutoFare(7, 4) // => 120 (30 + 60 + 20 + 10)
 *   calculateAutoFare(0.5)  // => 30  (ceil to 1 km = minimum fare)
 *   calculateAutoFare(-2)   // => -1
 */
export function calculateAutoFare(distance, waitingMinutes = 0) {

  if (typeof distance !== "number" || distance <= 0 || typeof waitingMinutes !== "number" || waitingMinutes < 0) {
    return -1;
  }

  let totalkm = Math.ceil(distance);
  let fare = 0;
  let currentkm = 0;

  while (currentkm < totalkm) {
    currentkm++;
    if (currentkm === 1) {
      fare += 30;
    }
    if (currentkm >= 2 && currentkm <= 5) {
      fare += 15;
    }
    if (currentkm > 5) {
      fare += 10;
    }
  }
    fare += Math.ceil(waitingMinutes / 2 )* 5;
    return fare;
  }