// main reason for promises is to avoid callback hell
// promise ->  is an object that returns a value which you hope to receive in the future

// promise states:
// - Pending -> Fulfilled or Rejected

const promiseFulfilled = new Promise((resolve, reject) => {
  resolve("Hello world");
});
console.log(promiseFulfilled);
promiseFulfilled.then((data) => console.log(data)); // to access the data -> should have a .catch like below

// below is a rejected example with error handling
const promiseReject = new Promise((resolve, reject) => {
  reject("There was an error");
});
console.log(promiseReject);
promiseReject
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// random number example
// - if it matches it will resolve
// - else it will reject
const value = 2;
const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 3);
  if (random === value) {
    resolve("promise - Correct number");
  } else {
    reject("promise - Wrong number");
  }
});

promise.then((d) => console.log(d)).catch((err) => console.error(err));
