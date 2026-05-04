const aadhar_of_mayur = Symbol("aadhar");
const aadhar_of_piyush = Symbol("aadhar");

console.log(typeof aadhar_of_mayur);
console.log(aadhar_of_mayur == aadhar_of_piyush);
console.log(aadhar_of_mayur.toString());
console.log(aadhar_of_mayur.description);


const nonIndian = Symbol()
console.log(nonIndian.description);
/* undefined aiy ga iska kyo ke kuch bi input nai dia ise */



const biometricHash = Symbol("biomatricHash")
const bloodGroup = Symbol("bloodGroup")

const citizenRecord = {
    name:"Ved Pandey",
    age: 21,
    [biometricHash] : "a7yknfky788dn",
    [bloodGroup] : "O+"
}

console.log(Object.keys(citizenRecord));
/* to agar ham symbol use kray gay and print kray gay to only [ 'name', 'age' ]  yay show hoga jabkay symbol ka data show nai hoga but agar symbol na use kray to fir vo data show hoga [ 'name', 'age', 'biomatricHash', 'bloodGroup' ]    */


// to ab agar symbol he to ose access krnay ke liay special library use krtay hain | mostly use nai hota jab library bnatay hain tab use hota he 
console.log(Object.getOwnPropertySymbols(citizenRecord));