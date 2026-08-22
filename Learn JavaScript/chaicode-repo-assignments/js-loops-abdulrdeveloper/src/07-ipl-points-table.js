// /**
//  * 🏆 IPL Season Points Table
//  *
//  * IPL ka season chal raha hai aur tujhe points table banana hai!
//  * Tujhe match results ka array milega, aur tujhe har team ke points
//  * calculate karke sorted table return karna hai.
//  *
//  * Match result types:
//  *   - "win": Winning team gets 2 points, losing team gets 0
//  *   - "tie": Both teams get 1 point each
//  *   - "no_result": Both teams get 1 point each (rain/bad light)
//  *
//  * Each match object: { team1: "CSK", team2: "MI", result: "win", winner: "CSK" }
//  *   - For "tie" and "no_result", the winner field is absent or ignored
//  *
//  * Rules (use for loop with object accumulator):
//  *   - Loop through matches array
//  *   - Build an object accumulator: { "CSK": { team, played, won, lost, tied, noResult, points }, ... }
//  *   - After processing all matches, convert to array and sort:
//  *     1. By points DESCENDING
//  *     2. If points are equal, by team name ASCENDING (alphabetical)
//  *
//  * Validation:
//  *   - Agar matches array nahi hai ya empty hai, return []
//  *
//  * @param {Array<{team1: string, team2: string, result: string, winner?: string}>} matches
//  * @returns {Array<{team: string, played: number, won: number, lost: number, tied: number, noResult: number, points: number}>}
//  *
//  * @example
//  *   iplPointsTable([
//  *     { team1: "CSK", team2: "MI", result: "win", winner: "CSK" },
//  *     { team1: "RCB", team2: "CSK", result: "tie" },
//  *   ])
//  *   // CSK: played=2, won=1, tied=1, points=3
//  *   // MI: played=1, won=0, lost=1, points=0
//  *   // RCB: played=1, tied=1, points=1
//  *   // Sorted: CSK(3), RCB(1), MI(0)

export function iplPointsTable(matches) {

    if (!Array.isArray(matches) || matches.length === 0) {
        return [];
    }

    let pointsTable = {};

    for (let i of matches) {
        let team1 = i.team1;
        let team2 = i.team2;
        let result = i.result;
        let winner = i.winner;

        if (!pointsTable[team1]) {
            pointsTable[team1] = {
                team: team1,
                played: 0,
                won: 0,
                lost: 0,
                tied: 0,
                noResult: 0,
                points: 0
            };
        }
        if (!pointsTable[team2]) {
            pointsTable[team2] = {
                team: team2,
                played: 0,
                won: 0,
                lost: 0,
                tied: 0,
                noResult: 0,
                points: 0
            };
        }
        pointsTable[team1].played++
        pointsTable[team2].played++

        if (result === "win") {
            if (winner === team1) {
                pointsTable[team1].won++;
                pointsTable[team1].points += 2;
                pointsTable[team2].lost++

            } else {
                pointsTable[team2].won++;
                pointsTable[team2].points += 2;
                pointsTable[team1].lost++
            }
        }

        else if (result === "tie") {
            pointsTable[team1].points++
            pointsTable[team1].tied++
            pointsTable[team2].points++
            pointsTable[team2].tied++
        }
        else if (result === "no_result") {
            pointsTable[team1].points++
            pointsTable[team1].noResult++
            pointsTable[team2].points++
            pointsTable[team2].noResult++
        }
    }
    let finaldata = Object.values(pointsTable);

    finaldata.sort((a, b) => { 
            if (a.points !== b.points){
            return (b.points - a.points);
        }
        else
            return a.team.localeCompare(b.team);
    });

    return finaldata;
}


// let devcrush = prompt("Who`s Your Crush: ");
// devcrush = devcrush.toLowerCase();

// const crush = {
//   name: "JavaScript",
//   isLoyal: true,
//   bugs: Infinity,
//   love: "Programmers",
//   mood: "Async"
// };

// isloyal= () => {
//   for (let i = 1; i <= 5; i++) {
//     console.log(`${"🔥".repeat(i)} Day ${i}: Learning JavaScript!`)
//   }
//   return `❤️ Written by JavaScript, I will never leaves you ! \n (Even when you get errors) \n Love for: ${crush.love} (by Compilor) \n Bugs: ${crush.bugs} `;
// }

// if (crush.isLoyal && (devcrush === "javascript" || devcrush === "js")) {
//   console.log(`${isloyal()}`);
// }
// else {
//   console.log("💔 Try Again, JavaScript is waiting...");
//   for (i = 0; i < 1; i++) {
//     console.log(` JavaScript will definately change your entire carear!`)
//   }
// }