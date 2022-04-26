// prototypical inheritance - each instantiated object (from constructor function) inherits from prototype

// every object has prototype
console.log(Object.getPrototypeOf({}).constructor); // Object()

class StudentA {
  constructor(id, name, subjects = []) {
    // instance properties
    this.id = id;
    this.name = name;
    this.subjects = subjects;
  }
}
const student1 = new StudentA(5, "Sammy");
console.log(Object.getPrototypeOf(student1).constructor); // class: StudentA(id, name, subjects = [])

function StudentB(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
}

const student2 = new StudentB(6, "Hugo");
console.log(Object.getPrototypeOf(student2).constructor); // Function: StudentB(id, name, subjects = [])

console.log(student1.__proto__); // {}
console.log(student1.__proto__.__proto__); // [Object: null prototype] {}
console.log(student1.__proto__.__proto__.__proto__); // null
