// The forEach() method executes a provided function once for each array element.

const data = [
  {item: "Banana", type: "Fruit", cost: 0.83},
  {item: "Onion", type: "Vegetable", cost: 0.75},
  {item: "Avocado", type: "Fruit", cost: 1.8},
];

data.forEach((d) => {
  console.log(d.item);
});

// Banana
// Onion
// Avocado
