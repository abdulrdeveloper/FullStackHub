const clu1 = "Abdul Rahman is on the way to learning ";
console.log("cluefind", clu1);


console.warn ("Fingerprint avidence detected") // use in games mostly or production
console.error ("Warning :Fingerprint avidence detected")


const evidence = [
    { id: 1, item:"Book", location: "Lahire"},
    { id: 3, item:"Book", location: "Lahire"},
    { id: 2, item:"Book", location: "Lahire"},
]
console.table(evidence)  // it helps to make a table instead of just printing as it is


console.group("Group starts");
console.log("My log 1");
console.log("My log 2");
console.log("My log 3");
console.groupEnd("Group ends");  // not commonly used but it shows in a strucutre all log inside group 


console.time("Time starts now");
let dnaMatches = 0;
for(let i=0; i<1000000; i++){        // 1000000 == 1_000_000 ham koi bi likh saktay hain both are valid , yay performance pay asar nai dalta just big values ko easily read kr saktay hain
    dnaMatches++;
}
console.timeEnd("Time starts now");  // yay work krta he but same label lganay se and yay btata he ke inside loop ya kuch or kitnay time mai complete hoa

//yay simply print ho jaiy ga
console.log("ChaiCode");   // count 1
console.log("ChaiCode");   // count 1
console.log("ChaiCode");   // count 1
console.log("ChaiCode");   // count 1

// yay har console per saath mai count bi show krwaata he , yay production ya jaha per count krna ho vaha bohat zyaada use mai ata he , console (browser) mai 

console.count("ChaiCode");  // count 1
console.count("ChaiCode");  // count 2
console.count("ChaiCode");  // count 3
console.count("ChaiCode");  // count 4

