class Crickter{
    constructor (name,role){
        this.name = name
        this.role = role
        this.matchesplayed = 0
        this.stamina = 100
    }

    introduce(){
    return `${this.name} the ${this.role} | matchesPlayed: ${this.matchesplayed} | stamina: ${this.stamina} `
}

}

/* yay sab ek new keyword call hoa he , uss keyword ne object bnaya he and uss object may yay sab add hoa he */


const player1 = new Crickter("Virat","Batsman")
const player2 = new Crickter("Bumrah","Bowler")

console.log(player1.hasOwnProperty("name"));
console.log(typeof Crickter);

/* iski type function ai hay na ke object yay gotcha he and ese hi work krta he classes ki type behind the scene function hoti he na ke object */


class debutant{
    constructor(name){
        this.name = name
        this.walkOut = () => `${this.name} walks out to bat for the first time `
   }
}

const debutant1 = new debutant("Shubman")
const someThingFromLastClass = debutant1.walkOut

console.log(someThingFromLastClass());


const debutant2 = new debutant("Vashasvi")
console.log(debutant1.walkOut === debutant2.walkOut)
/*yay false aya kyo ke memory alag he but reference same he to false aya he easy he tum ek dafa dehan se dekho samaj aa jaiy ga*/
