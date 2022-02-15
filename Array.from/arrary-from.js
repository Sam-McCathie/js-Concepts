// Array.from - https://www.youtube.com/watch?v=zg1Bv4xubwo&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=11
// returns array from something with a length property

const udemy = "udemy";
console.log(Array.from(udemy)); // [ 'u', 'd', 'e', 'm', 'y' ]

// Note below will break when running node. -> must be vanilla js
const text = document.querySelectorAll(".text");
console.log(text); // NodeList(3) [h2.text, h2.text, h2.text]

const newText = Array.from(text).find((i) => i.textContent === "Sammy");
console.log(newText); // <h2 class="text">Sammy</h2>

// Pagination
const items = Array.from({length: 120}, (_, index) => {
  return index;
});
console.log(items); // array with 120 items numbered 0 -> 119

const itemsPerPage = 10;
const pages = items.length / itemsPerPage;
console.log(pages); // 12

const newItems = Array.from({length: pages}, (_, index) => {
  const start = index * itemsPerPage;
  const tempItems = items.slice(start, start + itemsPerPage);
  return tempItems;
});
console.log(newItems); // creates 12 Arrays with 10 items each
