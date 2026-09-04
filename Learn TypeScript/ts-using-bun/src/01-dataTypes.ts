let sales: number = 123_456_789;
let largeNumber: bigint = 9007199254740991n;
let course: string = "Total TypeScript";
let is_published: boolean = true;
let name: undefined = undefined;
let sym: symbol = Symbol();

// any type noImplecitAny
let naam: any;


// unknown
// typesafe version of any
function render(document: unknown) {
    if (typeof document === "string") {
        //...
        console.log(document);
    }
    if (typeof document === "string" && document.endsWith(".jgp")) {
        //...
        // show img
    }
}


// never type
// The never type represents values that never occur.
// function propose(message: string):never {
//   throw new Error("Tumhara taste achha hai, par meri choice itni buri nahi.");
// }

// propose("....")

// Enums
// Enums represent a list of related constants.
const enum TeamStrength {
    Weak = 1,
    Good,
    Strong,
}

let yellow = TeamStrength.Weak;
console.log(yellow);

// Array
let numbers: number[] = [1, 2, 3];
let names: string[] = ["Keshva", "Madhav", "Damodar", "Shyamsundar"];

// Tuple
// is a fixed-length array where each element has a specific type.
let album: [string, number, string] = ["Mantra", 2025, "Radhika Das"];

// Object
let mentor: {
    id: number;
    name: string;
    age: number;
    teaches: (sub: string[]) => void;
    address?: {
        street: string;
        pin: number;
    };
} = {
    id: 4,
    name: "Anirudha",
    age: 28,
    teaches: (sub: string[]) => {
        console.log(`${mentor.name} teaches: ${sub.join(", ")}`);
    },
};

// Functions
function calculatePrice(team: string): number {
    if (team.toLowerCase() === "rr")
        return 15e10; //15,000 Cr

    if (team.toLowerCase() === "rcb")
        return 18e10; //18,000 Cr

    if (team.toLowerCase() === "csk")
        return 500_000; // 5 L

    return NaN;
}

// Type Inference
let guestTheType = {
    id: 4,
    name: "Anirudha",
    age: 28,
    teaches: (sub: string[]) => {
        console.log(`${mentor.name} teaches: ${sub.join(", ")}`);
    }
};

// Even though they aren't annotated, TypeScript is still picking up the type that they're each supposed to be. This is TypeScript inferring the type of the variable from usage.

// This is an extremely powerful part of TypeScript. It means that you can mostly *not* annotate variables and still have your IDE know what type things are.
