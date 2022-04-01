//  The some() method tests whether at least one element in the array passes the test implemented
//  by the provided function. It returns true if, in the array, it finds an element for which the
//  provided function returns true; otherwise it returns false. It doesn't modify the array.

const data = [
  {item: "Banana", type: "Fruit", cost: 0.83},
  {item: "Onion", type: "Vegetable", cost: 0.75},
  {item: "Avocado", type: "Fruit", cost: 1.8},
];

const expensive = data.some((d) => {
  // condition
  return d.cost > 1;
});
console.log(expensive);
// true

const cheap = data.some((d) => {
  return d.cost < 0.5;
});
console.log(cheap);
// false
