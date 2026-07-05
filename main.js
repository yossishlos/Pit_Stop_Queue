import { getData } from "./raceService.js"

const theData = await getData()
const raceName = theData.raceName
const carNumber = theData.cars[0].carNumber
const driverName = theData.cars[0].driverName
const theStatus = theData.cars[0].status

console.log("Pit Stop Queue - Race Team Management System");
console.log("Race engineer: 'Let's check the current queue status on the pit wall.'");
console.log("");
console.log("Loading queue data...");
console.log("");
console.log("========== PIT STOP QUEUE ==========");
console.log(`Race: ${raceName}`);
// console.log(`Lap: ${theLap}`);
// console.log(`Total cars in race: ${theTotalCarsInRace}`);
// console.log(`Pit stops completed: ${theStopNumber}`);
console.log("");
console.log("Cars waiting for pit stop:");
console.log(`-Car #${carNumber} | Driver: ${driverName}`);
console.log("");
console.log("Next car to enter the pit:");
console.log(`>> Car #${carNumber} | driver: ${driverName}`);
console.log("=====================================");
console.log(`Radio message to car #${carNumber}: "Box box box, ${driverName}, pit this lap!"`);
console.log("");
console.log("--- Search for a car by number ---");
console.log(`Found car #${carNumber} | Driver: ${driverName} | Status: ${theStatus}`);
console.log(`Error: No car found with number #${carNumber} in the current race.`);
console.log("");
console.log("Process completed successfully. The pit wall is up to date.");
