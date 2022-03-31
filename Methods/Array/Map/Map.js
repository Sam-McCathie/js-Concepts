// Map returns a new array
// does not change the size of the original array.
// uses the values from original array to make a new one.

const people = [
  {
    name: "Sammy",
    age: 26,
    role: "Boyfriend",
  },
  {
    name: "Acacia",
    age: 23,
    role: "Girlfriend",
  },
  {
    name: "Hugo",
    age: 0.6, // 6 weeks
    role: "Furbaby",
  },
];

// each item can be accessed inside of the map via a callback function
const names = people.map((p) => {
  return p.name;
});
console.log(names); // [ 'Sammy', 'Acacia', 'Hugo' ]

const getAges = (person) => person.age + 3;
const ages = people.map(getAges);
console.log(ages); // [ 29, 26, 3.6 ]

const newPeople = people.map((item) => {
  return {
    firtName: item.name.toUpperCase(),
    aged: item.age + 10,
  };
});
console.log(newPeople);
// [
//     { firtName: 'SAMMY', aged: 36 },
//     { firtName: 'ACACIA', aged: 33 },
//     { firtName: 'HUGO', aged: 10.6 }
//   ]

// Use in Map.html
