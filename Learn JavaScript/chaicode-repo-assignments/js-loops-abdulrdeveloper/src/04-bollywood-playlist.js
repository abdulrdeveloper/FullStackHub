/**
 * 🎵 Simran ki Road Trip Playlist
 *
 * Simran aur uske dost road trip pe jaa rahe hain Delhi se Jaipur!
 * Usne ek playlist banayi hai with song durations (in seconds). Lekin
 * trip sirf itni der ki hai - usse zyada songs mat daalo playlist mein.
 *
 * Rules (use while loop):
 *   - Songs array mein se ek ek song add karo
 *   - BEFORE adding a song, check: kya current total + is song ki duration
 *     maxDuration se zyada ho jayegi? Agar haan, toh STOP. Mat add karo.
 *   - Agar kisi song ki duration positive number nahi hai (negative, zero,
 *     NaN, string, etc.), skip that song and move to the next one
 *   - Continue until all songs are checked or maxDuration limit reached
 *
 * Validation:
 *   - Agar songs array nahi hai, return: { count: 0, totalDuration: 0 }
 *   - Agar maxDuration positive number nahi hai, return: { count: 0, totalDuration: 0 }
 *
 * @param {number[]} songs - Array of song durations in seconds
 * @param {number} maxDuration - Maximum total duration allowed in seconds
 * @returns {{ count: number, totalDuration: number }} Songs added and total duration
 *
 * @example
 *   buildPlaylist([240, 180, 300, 200], 600)
 *   // => { count: 2, totalDuration: 420 }
 *   // 240 + 180 = 420, next song 300 would make 720 > 600, so stop
 *
 *   buildPlaylist([100, -50, 200, 150], 400)
 *   // => { count: 3, totalDuration: 450 }
 *   // Wait, 100 + 200 + 150 = 450 > 400? Let me recalculate...
 *   // 100 added (total=100), skip -50, 200 added (total=300),
 *   // 150: 300+150=450 > 400, STOP.
 *   // => { count: 2, totalDuration: 300 }
 */
export function buildPlaylist(songs, maxDuration) {
  if (!Array.isArray(songs) || typeof maxDuration !== "number" || maxDuration <= 0) {
    return { count: 0, totalDuration: 0 };
  }

  let indexinarray = 0;     // yay btata he ke loop konsay index per he 
  let count = 0;     // yay songs count kray ga
  let totalDuration = 0;    // yay songs ki total duration ko handle kray ga

  while (indexinarray < songs.length) {
    let currentSong = songs[indexinarray];

    if (typeof currentSong !== "number" || currentSong <= 0 || isNaN(currentSong)) {
      indexinarray++;    // agar sab true he to incdex 1 per chlay jao and so on ...
      continue;
    }

    if (totalDuration + currentSong > maxDuration) {
      break;   // agar songs ki total duration mai current songs ki duration add krtay time limit zyaada ho rahi he to break lga do 
    }
else{
    totalDuration = totalDuration + currentSong;  // agar nai limit zyaada hoi to add krtay jao total duration mai currentsongs add krtay jao
    count++;      // count bi ek ek krkay increase jatay jao
    indexinarray++;     // index bi one by one next per move krtay jao 
  }
  }
  return { count, totalDuration };  
}
