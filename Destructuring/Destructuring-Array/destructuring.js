// faster/ easier way to access/ unpack variables from arrarys, objects.

const fruits = ["orange", "banana", "apple"];
const friends = ["Acacia", "Freya", "Hugo"];

const fruit1 = fruits[0]; // orange

// variables assigned inside []
// the names could be anything but correspond to the array position
const [Acacia, Freya, Kitty, Sammy] = friends;
console.log(Acacia); // Acacia
console.log(Kitty, Freya, Sammy); // Hugo Freya undefined

// if you don't want to assign an array item to a variable you can leave it blank with a ,
const [, nana] = fruits;
console.log(nana); // banana

// Re-assigning variables
let second = "Sammy";
let first = "McC";
// let temp = second
// second = first
// first = temp

[second, first] = [first, second];
console.log(first, second);
