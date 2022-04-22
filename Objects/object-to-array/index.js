// Reformatting object

const data = {
  test: {a: 1, b: 2, c: 3, d: 4},
  test2: {a: 5, b: 6, c: 7, d: 8},
  test3: {a: 9, b: 10, c: 11, d: 12},
  test4: {a: 13, b: 14, c: 15, d: 16},
};

// Option 1 -> {x:{}} to [{}] or [{x:{}}]

// Saving just the value of the key value pair
const usingValues = Object.values(data);
console.log(usingValues); // [0] =   { a: 1, b: 2, c: 3, d: 4 },

const usingKeys = Object.keys(data).map((key) => data[key]);
console.log(usingKeys); // [0] =   { a: 1, b: 2, c: 3, d: 4 },

const usingEntries = Object.entries(data).map((entry) => entry[1]);
console.log(usingEntries); // [0] =   { a: 1, b: 2, c: 3, d: 4 },

// Keep keys as they are -> Closest to original
const keepNestedKeys = Object.entries(data).map((entry) => {
  return {[entry[0]]: entry[1]}; // [0] = { test4: { a: 13, b: 14, c: 15, d: 16 } }
});
console.log(keepNestedKeys);

// Option 2 -> {x:{}} to [[]]

// Convert object to array -> returns an array of arrays
const arrayConvert = Object.keys(data).map((key) => [key, data[key]]);
console.log(arrayConvert); // [0] = [ 'test', { a: 1, b: 2, c: 3, d: 4 } ]

// Bonus!
const objectLength = Object.keys(data).length;
console.log(objectLength);
