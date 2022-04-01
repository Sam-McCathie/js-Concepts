// The Array.from() static method creates a new, shallow-copied Array instance from an
// array-like or iterable object.

const name = "Sam";
const data = [1, 2, 3, 4, 5];

console.log(Array.from(name));
// [ 'S', 'a', 'm' ]

console.log(
  Array.from(data, (x) => {
    return x + x;
  })
);
// [ 2, 4, 6, 8, 10 ]
