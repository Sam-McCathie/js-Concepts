// fetch api - browser api for http (ajax) requests
// default - get requests
// returns a promise

// view html doc to see output
// Note -> all 3 return the same thing

const url = "https://www.course-api.com/react-tours-project";

// fetch returns a promise
fetch(url)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.err(err));

// same thing but with fetch
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

returnTours(url).then((data) => console.log(data));
