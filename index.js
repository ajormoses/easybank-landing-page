var icon = document.querySelector(".icon");
var list = document.querySelector(".list");
var hamburger = document.querySelector(".hamburger");
var close = document.querySelector(".close");

icon.addEventListener("click", () => {
  list.classList.toggle("show");
  hamburger.classList.toggle("show");
  close.classList.toggle("show");
  console.log(moses);
});
