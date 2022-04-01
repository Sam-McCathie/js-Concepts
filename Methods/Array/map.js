// The map() method creates a new array populated with the results of calling a provided
// function on every element in the calling array.

const data = [
  {item: "Banana", type: "Fruit", cost: 0.83},
  {item: "Onion", type: "Vegetable", cost: 0.75},
  {item: "Avocado", type: "Fruit", cost: 1.8},
];

const items = data.map((d) => {
  return d.item;
});

console.log(items);
// [ 'Banana', 'Onion', 'Avocado' ]
