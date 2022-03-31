const family = [
  {name: "Sammy", age: 26, position: "Developer"},
  {name: "Acacia", age: 23, position: "PA"},
  {name: "Hugo", age: 0.7, position: "Kitty"},
];

const healthy = ["strawberry", "zuzu", "potato"];

//filter - if the condition is true -> return the item. If the codition is not true -> don't return the item
const baby = family.filter((family) => {
  if (family.age < 1) {
    return family;
  }
});
console.log(baby); // [ { name: 'Hugo', age: 0.7, position: 'Kitty' } ]

const parents = family.filter((family) => {
  return family.age > 20;
});
console.log(parents); // [{ name: 'Sammy', age: 26, position: 'Developer' }, { name: 'Acacia', age: 23, position: 'PA' } ]

const developer = family.filter((family) => family.position === "Developer");
console.log(developer); //  [ { name: 'Sammy', age: 26, position: 'Developer' } ]

const seniorDevs = family.filter((family) => family.position === "Senior Dev");
console.log(seniorDevs); // []

// find - returns single instance (object), returns first match, if no match - undefined
const findAcacia = family.find((p) => p.name === "Acacia");
console.log(findAcacia); // { name: 'Acacia', age: 23, position: 'PA' }

const findGoodies = healthy.find((f) => f === "zuzu");
console.log(findGoodies); // zuzu

const oldie = family.find((p) => p.age > 40);
console.log(oldie); // undefined

console.log(developer[0].position); // Developer
console.log(findAcacia.position); // PA
