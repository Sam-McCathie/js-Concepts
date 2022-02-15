const people = [
  {
    name: "bob",
    location: {street: "12345 nice street", timeZone: {offset: "+7:00"}},
  },
  {
    name: "peter",
    location: {street: "456 okay street"},
  },
  {
    name: "susan",
    location: {street: "12 ches street", timeZone: {offset: "+9:00"}},
  },
];

people.forEach((person) => {
  //   console.log(person.location.timeZone.offset); // will cause an error on people[1] because it is lacking a timeZone
  console.log(
    person.location &&
      person.location.timeZone &&
      person.location.timeZone.offset
  ); // will return +7:00 undefined +9:00 -> if at any point the conditions are not true it will return undefined

  console.log(person?.location?.timeZone?.offset); // same result as above
});
