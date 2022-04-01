// The reduce() method executes a user-supplied "reducer" callback function on each element of the array,
// in order, passing in the return value from the calculation on the preceding element. The final result
//  of running the reducer across all elements of the array is a single value.

// The first time that the callback is run there is no "return value of the previous calculation". If
// supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used
//  as the initial value and iteration starts from the next element (index 1 instead of index 0).

const data = [
  {item: "Banana", type: "Fruit", cost: 0.83},
  {item: "Onion", type: "Vegetable", cost: 0.75},
  {item: "Avocado", type: "Fruit", cost: 1.8},
];

// first arg =callback taking two args the currentValue and item(current element)
// second arg = initial value

const initialValue = 0; // starting value

const total = data.reduce((currentValue, item) => {
  return item.cost + currentValue;
}, initialValue);

console.log(total);
// 3.38
