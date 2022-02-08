// Unique values
const menu = [
  {
    name: "pancakes",
    meal: "breakfast",
  },
  {
    name: "burger",
    meal: "lunch",
  },
  {
    name: "steak",
    meal: "dinner",
  },
  {
    name: "bacon",
    meal: "breakfast",
  },
  {
    name: "eggs",
    meal: "breakfast",
  },
  {
    name: "pasta",
    meal: "dinner",
  },
];

const meals = ["all", ...new Set(menu.map((item) => item.meal))]; // new Set("x") will return an object with only the unique values.
console.log(meals); // [ 'breakfast', 'lunch', 'dinner' ]
// ... = spread operator
// "all" has be manually added to the array.
