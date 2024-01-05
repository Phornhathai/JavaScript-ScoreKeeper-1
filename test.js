let playto = document.querySelector("playto");

let winningScore = 0;
let isGameOver = false;

let p1Button = document.querySelector("#p1Button");
let main = document.querySelector("#main");
let reset = document.querySelector("#reset");

p1Button.addEventListener("click", function (e) {
  console.log(e);
  main.classList.add("change_bg");
});

reset.addEventListener("click", function (e) {
  main.classList.remove("change_bg");
});
