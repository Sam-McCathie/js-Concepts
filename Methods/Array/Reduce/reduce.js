// Reduce
// https://www.youtube.com/watch?v=3WkW9nrS2mw&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=5

// iterates, callback function
// reduces to a single value, number, array, object
// 1st parameter ("accumulator") - total of all calculations
// 2nd parameter ("current") - current iteration/ value

const staff = [
  {name: "Sammy", age: 26, position: "dev", salary: 100},
  {name: "Boss", age: 40, position: "lead dev", salary: 400},
  {name: "Lead", age: 28, position: "senior dev", salary: 300},
];

// 0 is the starting vlaue -> could be 200 etc
const dailyTotal = staff.reduce((total, person) => {
  console.log(`t${total}`);
  console.log(`p${person.salary}`);
  total += person.salary;
  return total;
}, 0);

console.log(dailyTotal);
