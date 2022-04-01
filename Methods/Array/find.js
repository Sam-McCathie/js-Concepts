//The find() method returns the first element in the provided array that satisfies the
//provided testing function. If no values satisfy the testing function, undefined is returned.

const data = [
  {item: "Banana", type: "Fruit", cost: 0.83},
  {item: "Onion", type: "Vegetable", cost: 0.75},
  {item: "Avocado", type: "Fruit", cost: 1.8},
];

// the same as filter except only returns the first item that evaluates to true
const found = data.find((d) => {
  return d.type === "Fruit";
});

console.log(found);
// { item: 'Banana', type: 'Fruit', cost: 0.83 }
