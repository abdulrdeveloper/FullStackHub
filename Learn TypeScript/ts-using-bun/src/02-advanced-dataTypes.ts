/// <reference lib="dom" />

// Type Aliases
type Team = {
    name: string;
    getSquad: () => string[];
    readonly price: number;
    isBanned: boolean;
};

let csk: Team = {
    name: "Chenni Super Kings",
    getSquad() {
        return ["Thala"];
    },
    price: 500_000,
    isBanned: true,
};

// Union Types
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === "number") return weight * 2.2;

    return parseInt(weight) * 2.2;
}

// console.log(kgToLbs(1));
// console.log(kgToLbs("10kg"));

// Intersection Types
type Male = {
    speak: () => void;
};

type Lion = {
    roar: () => void;
};

type Narasimha = Male & Lion;

let lordNarasimha: Narasimha = {
    roar: () => {
        console.log("🦁 The universe trembles...");
    },
    speak: () => {
        console.log("Fear not, Prahlada. I am here.");
    },
};

// Nullable
function greet(name: string | null | undefined) {
    if (name) {
        console.log(`Hello, ${name}`);
    }
    console.log("Hello");
}

greet(undefined);
greet(null);

// Optional Chaining
type Customer = {
    birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : id <= -1 ? undefined : { birthday: new Date() };
}

let customer = getCustomer(0);

// if (customer !== null && customer !== undefined) {
//   if (customer.birthday) {
//     console.log(customer.birthday.getFullYear());
//   } else console.log("better luck next time");
// } else {
//   console.log("no customer");
// }

let customer1 = getCustomer(1);
console.log(customer1?.birthday?.getFullYear());

// Nullish Coalescing Operator ??
// Using the Nullish Coalescing Operator we can fallback to a default value when dealing with null/undefined objects.

let speed: number | null | undefined = null;

let ride = {
    // speed: (speed !== null || speed !== undefined) ? speed : 49,
    speed: speed ?? 49,
};

console.log(ride.speed); // 49

// // Type Assertions
// let phone = document.getElementById<HTMLInputElement>("phone");
// let phoneNo = phone.value;

// const mi: Team2 = {
//     name: "Mumbai Indians",
//     price: Infinity,
//     isBanned: false, // Hell naa...
// }
