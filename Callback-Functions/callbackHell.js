// video - https://www.youtube.com/watch?v=bx9xYPt2tdc&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=14

// Todo
// after 1s first red
// after 3s second blue 4s
// after 2s third green 6s
// In sequence

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");

const btn = document.querySelector(".btn");

// callback hell will have all the callbacks looking like a pyramid that keeps getting bigger!
btn.addEventListener("click", () => {
  console.log("Clicked");
  setTimeout(() => {
    first.style.color = "red";
    setTimeout(() => {
      second.style.color = "blue";
      setTimeout(() => {
        third.style.color = "green";
      }, 2000);
    }, 3000);
  }, 1000);
});

// continue on to promises
