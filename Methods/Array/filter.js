// The filter() method creates a NEW array with all elements that pass the test implemented
// by the provided function.

const data = [
  {item: "Banana", type: "Fruit", cost: 0.83},
  {item: "Onion", type: "Vegetable", cost: 0.75},
  {item: "Avocado", type: "Fruit", cost: 1.8},
];

// Pass a callback function as an arg
const fruit = data.filter((i) => {
  // if the return statement evaluates to true the array item will be added to the array.
  return i.type === "Fruit";
});

console.log(fruit);
// [
//   { item: 'Banana', type: 'Fruit', cost: 0.83 },
//   { item: 'Avocado', type: 'Fruit', cost: 1.8 }
// ]

const price = data.filter((x) => {
  return x.cost > 1;
});

console.log(price);
// [ { item: 'Avocado', type: 'Fruit', cost: 1.8 } ]
