// Video - https://www.youtube.com/watch?v=GWq0XETTOTk&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=13

// Example 1
const makeUppercase = (value) => {
  console.log(value.toUpperCase());
};

const reverseString = (value) => {
  console.log(value.split("").reverse().join(""));
};

const handleName = (fName, callBack) => {
  const fullName = `${fName} M`;
  callBack(fullName);
};

handleName("sam", makeUppercase); // SAM MCCATHIE
handleName("sammy", reverseString); // eihtaCcM ymmas
handleName("Hugo", (value) => console.log(value)); // Hugo M
handleName("Acacia", (value) => {
  console.log(`${value} is a hottie`);
}); // Acacia M is a hottie

// Example 2
const btn = document.querySelector(".button"); // returns the first element that matches

btn.addEventListener("click", function () {
  console.log("Clicked button");
});
