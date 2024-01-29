// Handling menu bar 

let menu = document.getElementsByClassName("menu")[0];
let listItems = document.querySelectorAll("header .list-item li");
let header = document.querySelector("header");
menu.addEventListener("click", () => {
  header.classList.toggle("show");
});

listItems.forEach((list) => {
  list.addEventListener("click", () => {
    header.classList.remove("show");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth < 770) {
    header.classList.remove("show");
  }
});
