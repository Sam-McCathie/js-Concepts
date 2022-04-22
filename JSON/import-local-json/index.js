// Three methods

// Method 1
import jsonData from "../data.json" assert {type: "json"};
console.log(jsonData);

// Method 2 & 3
const source = "../data.json";
fetch(source)
  .then((res) => res.json())
  .then((data) => console.log(data));

const getJSON = async (source) => {
  try {
    const res = await fetch(source);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
getJSON(source);
