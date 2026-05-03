console.log(this);

function ranveerOnGlobalStage() {
  return typeof this;
}

console.log(ranveerOnGlobalStage());

function ranveerWithNoScript() {
  return this;
}
console.log(ranveerWithNoScript());

const bollywoodFilm = {
  name: "Bajirao Mastani",
  lead: "Ranveer",

  introduce() {
    return `${this.lead} performs in ${this.name}`;
  },
};
const bollywoodFilm2 = {
  name: "Dhurandhar",
  lead: "Ranveer",

  introduce() {
    return `${this.lead} performs in ${this.name}`;
  },
};

console.log(bollywoodFilm.introduce());
console.log(bollywoodFilm2.introduce());

const filmDirector = {
  name: "Sanjay Leela Bhansali",
  cast: ["Ranveer", "Deepika", "Priyanka"],

  announceCast() {
    this.cast.forEach((actor) => {
      console.log(`${this.name} introduces ${actor}`);
    });
  },
};

filmDirector.announceCast();

const filmSet = {
  crew: "Spot boys",
  prepareProps() {
    console.log(`Outer this.crew: ${this.crew}`);

    function arrangeChairs() {
      console.log(`Inner this.crew: ${this.crew}`);
    }
    arrangeChairs();

    const arrangeLights = () => {
      console.log(`Arrow this.crew: ${this.crew}`);
    };
    arrangeLights();
  },
};

filmSet.prepareProps();

// Detached Methods
//

const actor = {
  name: "Ranveer",
  bow() {
    return `${this.name} takes a bow`;
  },
};
console.log(actor.bow());
const detachedBow = actor.bow;

console.log(detachedBow());

const myfunctionOne = function () {
  console.log(this);
};

const myfunctionTwo = () => {
  console.log(this);
};

myfunctionOne();
myfunctionTwo();
