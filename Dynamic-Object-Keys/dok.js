// dot notation
const person = {
  name: "Sammy",
};
console.log(person.name); // Sammy
person.age = 26;
console.log(person); // { name: 'Sammy', age: 26 }

// square bracket notation
const items = {
  "featured-items": ["item1", "item2"],
};

console.log(items["featured-items"]); // [ 'item1', 'item2' ]
console.log(person["name"]); // Sammy

let appState = "loading...";
appState = "error";
const keyName = "computer";
const app = {
  [appState]: true,
};

app[keyName] = "apple";
console.log(app); // { error: true, computer: 'apple' }

const state = {
  loading: true,
  name: "",
  job: "",
};

// updatedState will update the values of the state object
function updateState(key, value) {
  state[key] = value;
}

updateState("name", "Sammy");
console.log(state); // { loading: true, name: 'Sammy', job: '' }
updateState("job", "Developer");
updateState("loading", false);
console.log(state); // { loading: false, name: 'Sammy', job: 'Developer' }
updateState("products", ["cheese", "bacon"]);
console.log(state);
