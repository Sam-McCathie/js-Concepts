// https://www.youtube.com/watch?v=iHrVo5fvmzE&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=17

// Async always returns a promise
// await waits till promise is settled
// error handling - try/catch block
// Scroll to the buttom for url example

const example = async () => {
  return "hello there";
};

async function aFunction() {
  const result = await example();
  console.log(result);
}
// aFunction(); // hello there

// example - pretend the below variables are coming from an API
const users = [
  {id: 1, name: "Sam"},
  {id: 2, name: "Acacia"},
  {id: 3, name: "Hugo"},
];

const articles = [
  {userId: 1, articles: ["one", "two", "three"]},
  {userId: 2, articles: ["four", "five"]},
  {userId: 3, articles: ["six", "seven", "eight"]},
];

// -> ASYNC example <-
const asyncExample = async () => {
  try {
    const user = await getUser("Sam");
    const articles = await getArticles(user.id);
    console.log(articles);
  } catch (err) {
    console.error(err);
  }
};
asyncExample();

// .then example
const thenExample = getUser("Hugo")
  .then((user) => getArticles(user.id))
  .then((articles) => console.log(articles))
  .catch((err) => console.log(err));

// fake functions
function getUser(name) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.name === name); // with return the user object if it exists
    if (user) {
      return resolve(user);
    } else {
      reject(`No such user with name: ${name}`);
    }
  });
}
// console.log(getUser("Sam")); // Promise { { id: 1, name: 'Sam' } }
// console.log(getUser("Sammy")); // Promise { <rejected> 'No such user with name: Sammy' }

function getArticles(userId) {
  return new Promise((resolve, reject) => {
    const userArticles = articles.find((user) => user.userId === userId);
    if (userArticles) {
      return resolve(userArticles.articles);
    } else {
      reject(`Wrong id = ${userId}`);
    }
  });
}
// console.log(getArticles(1)); // Promise { [ 'one', 'two', 'three' ] }
// console.log(getArticles(4)); // Promise { <rejected> 'Wrong id = 4' }
const url = "https://www.course-api.com/react-tours-project";

const getTours = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
getTours(url);

const returnTours = async (url) => {
  try {
    const res = await fetch(url);
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

console.log(returnTours(url).then(data));
