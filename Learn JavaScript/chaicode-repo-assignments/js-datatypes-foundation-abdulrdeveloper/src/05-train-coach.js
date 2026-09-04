/**
 * 🚂 Train Coach Finder - Array Search & Check
 *
 * Indian Railways ke train mein passengers dhundhne hain!
 * Passenger list mein search karna hai — kaun hai, kaun nahi,
 * sab confirmed hain ya nahi. Array search methods ka tour hai yeh!
 *
 * Data format: passengers = [
 *   { name: "Rahul", coach: "S5", seat: 42, status: "confirmed" },
 *   { name: "Priya", coach: "S3", seat: 15, status: "waitlisted" },
 *   ...
 * ]
 *
 * Methods to explore: .find(), .findIndex(), .some(), .every(), .filter()
 *
 * Functions:
 *
 *   1. findPassenger(passengers, name)
 *      - .find() se passenger object dhundho by name (case-insensitive)
 *      - Agar passengers array nahi hai ya name string nahi hai, return undefined
 *      - Example: findPassenger([{name:"Rahul",coach:"S5",seat:42,status:"confirmed"}], "rahul")
 *                 => {name:"Rahul", coach:"S5", seat:42, status:"confirmed"}
 *
 *   2. getPassengerIndex(passengers, name)
 *      - .findIndex() se passenger ka position nikalo (case-insensitive)
 *      - Agar passengers array nahi hai ya name string nahi hai, return -1
 *      - Example: getPassengerIndex([{name:"Rahul"}, {name:"Priya"}], "Priya") => 1
 *
 *   3. isAnyWaitlisted(passengers)
 *      - .some() se check karo ki koi bhi passenger "waitlisted" hai ya nahi
 *      - Agar passengers array nahi hai ya empty hai, return false
 *      - Example: isAnyWaitlisted([{status:"confirmed"}, {status:"waitlisted"}]) => true
 *
 *   4. areAllConfirmed(passengers)
 *      - .every() se check karo ki SAB passengers "confirmed" hain ya nahi
 *      - Agar passengers array nahi hai ya empty hai, return false
 *      - Example: areAllConfirmed([{status:"confirmed"}, {status:"confirmed"}]) => true
 *
 *   5. getWaitlistedPassengers(passengers)
 *      - .filter() se sirf "waitlisted" passengers return karo
 *      - Agar passengers array nahi hai, return []
 *      - Example: getWaitlistedPassengers([{name:"A",status:"confirmed"},{name:"B",status:"waitlisted"}])
 *                 => [{name:"B", status:"waitlisted"}]
 *
 * @example
 *   findPassenger(passengers, "Rahul")   // => { name: "Rahul", ... }
 *   isAnyWaitlisted(passengers)          // => true/false
 *   areAllConfirmed(passengers)          // => true/false
 */
export function findPassenger(passengers, name) {
  if (!Array.isArray(passengers) || typeof name !== "string") {
    return undefined;
  }

  function checkPassenger(passenger){
    return (passenger.name.toLowerCase()===name.toLowerCase())
  }

  return passengers.find(checkPassenger);
}

export function getPassengerIndex(passengers, name) {
  if(!Array.isArray(passengers) || typeof name !== "string"){
    return -1;
  }
  function checkPassengerindex(passenger){
    return passenger.name.toLowerCase() === name.toLowerCase();
  }
  return passengers.findIndex(checkPassengerindex);
}

export function isAnyWaitlisted(passengers) {

  if(!Array.isArray(passengers) || passengers.length === 0){
    return false;
  }
  function checkwaitlist(passenger){
    return passenger.status === "waitlisted"
  }
  return passengers.some(checkwaitlist);
}

export function areAllConfirmed(passengers) {
   if(!Array.isArray(passengers) || passengers.length === 0){
    return false;
  }
  function checkconfirmed(passenger){
    return passenger.status === "confirmed";
  }
  return passengers.every(checkconfirmed);
}

export function getWaitlistedPassengers(passengers) {
  if(!Array.isArray(passengers)){
    return [];
  }
  function checkwaitlist(passenger){
    return passenger.status === "waitlisted";
  }
  return passengers.filter(checkwaitlist);
}
