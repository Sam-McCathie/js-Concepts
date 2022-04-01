// The every() method tests whether all elements in the array pass the test implemented
// by the provided function. It returns a Boolean value.

const data = [
  {item: "Banana", type: "Fruit", cost: 0.83},
  {item: "Onion", type: "Vegetable", cost: 0.75},
  {item: "Avocado", type: "Fruit", cost: 1.8},
];

const under2 = data.every((d) => {
  return d.cost < 2;
});

console.log(under2);
// true
