// Spread Operator "..."
// split into single items and copy them

const udemy = "udemy";
const letters = [...udemy];
console.log(letters); // [ 'u', 'd', 'e', 'm', 'y' ]

const boys = ["Sam", "Hugo"];
const girls = "Acacia";

const fam = [boys, girls];
console.log(fam); // [ [ 'Sam', 'Hugo' ], 'Acacia' ] <- nested arrarys

const family = [...boys, girls, ...boys];
console.log(family); // [ 'Sam', 'Hugo', 'Acacia', 'Sam', 'Hugo' ] <- single array

const anotherOne = [...family];
anotherOne[4] = "puppy?"; // add puppy
console.log(anotherOne);

// objects
const person = {name: "sam", job: "dev"};
const addDetails = {...person, city: "Auckland", job: "Developer"}; // updating values look similar to adding values
console.log(addDetails);
