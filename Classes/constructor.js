// Constructor function - Example
// - Capital is used when naming to indicated it is used to create objects
// - name after the data and not the operations (e.g. "createStudents")
class Student {
  constructor(id, name, subjects = []) {
    // instance properties
    this.id = id;
    this.name = name;
    this.subjects = subjects;
  }
  // add method called addSubject to constructor function
  addSubject(subject) {
    this.subjects = [...this.subjects, ...subject];
  }
  removeSubject(subject) {
    this.subjects = this.subjects.filter((s) => s !== subject);
  }
}

const student1 = new Student(1, "Sam");
student1.addSubject(["English", "Cooking"]);
student1.removeSubject("Cooking");
console.log(student1);

const student2 = new Student(2, "Kacy", ["Maths"]);
student2.addSubject(["Baking"]);
console.log(student2);

// Constructor Practice
// the below syntax replaces the above
class Book {
  constructor(id, title, author, category = []) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.category = category;
  }

  addCategory(category) {
    this.category = [...this.category, category];
  }
}

const book1 = new Book(23, "Courage is Calling", "Ryan Holiday");
book1.addCategory("Motivation & Self-Improvement");
console.log(book1);
