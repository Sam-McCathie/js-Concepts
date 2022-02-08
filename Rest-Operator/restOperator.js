// Rest Operator"..." <- same sytax as spread
// gathers/ collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
// first item in the array is assigned to first, the others are assigned to ...rest. It does not have to be rest it is just common practice
const fruits = ["apple", "orange", "banana"];
const [first, ...rest] = fruits;
console.log(first, rest); // apple [ 'orange', 'banana' ]

const games = ["Timberborn", "COD", "OSRS", "RDR"];
const [Timber, Call, ...otherGames] = games;
console.log(otherGames, Call); // [ 'OSRS', 'RDR' ]

const findGame = otherGames.find((game) => game === "OSRS"); // Aray method example
console.log(findGame); // OSRS

// objects
const dude = {name: "Sammy", lName: "McC", job: "Dev"};
const {job, ...others} = dude;
console.log(others, job); // { name: 'Sammy', lName: 'McC' } Dev

const getAverage = (...scores) => {
  const average =
    scores.reduce((total, item) => {
      return (total += item);
    }, 0) / scores.length;
  console.log(average);
};

getAverage(100, 300, 600); // 333.3333333333333

const score = [4, 43, 22];
getAverage(50, 60, ...score); // adds the scores to the below args
