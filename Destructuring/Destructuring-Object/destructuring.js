const sam = {
  first: "Sam",
  last: "McC",
  city: "Auckland",
  siblings: {
    sister: "Freya",
  },
};

// const firstName = sam.first;
// console.log(firstName); // Sam
// const sista = sam.siblings.sister;
// console.log(sista); // Freya

// the order is not important as we are accessing the properties
// re-assign the variable name  with ":"
const {
  first: firstName,
  city,
  last,
  siblings: {sister: bestie}, // <- access the object inside of siblings and providing alias
} = sam;
console.log(firstName, last, city); // Sam McC Auckland
console.log(bestie); // FFreya

const printPerson = (person) => {
  console.log(person.first);
};
printPerson(sam); // Sam

const printAnotherPerson = (person) => {
  const {first, last} = person;
  console.log(first, last);
};
printAnotherPerson(sam); // Sam McC

const yetAnother = ({siblings: {sister}}) => {
  console.log(sister);
};
yetAnother(sam); // Freya
