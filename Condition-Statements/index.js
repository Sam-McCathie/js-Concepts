// Replace lengthy condition statements (if else, switch, etc) with loops.

const letter = "b";

// Switch example
let currentLetter;
switch (letter) {
  case "a":
    currentLetter = "The current letter is a";
    break;
  case "b":
    currentLetter = "The current letter is b";
    break;
  case "c":
    currentLetter = "The current letter is c";
    break;
  default:
    currentLetter = "current letter is not defined";
}
console.log(currentLetter);

// alternative with lookup object
const letterObj = {
  a: "The current letter is a",
  b: "The current letter is b",
  c: "The current letter is c",
};
console.log(letterObj[letter] || "current letter is not defined");

// alternative with a map object
const myMap = new Map();
myMap.set("a", "The current letter is a");
myMap.set("b", "The current letter is b");
myMap.set("c", "The current letter is c");
console.log(myMap.get(letter) || "current letter is not defined");
