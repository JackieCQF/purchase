let cancelButton = document.querySelector(".cancel-btn");
let ghost = document.querySelector(".ghost");
let pityCount = 0;

let words = [
  "Wow close!",
  "Nice try!",
  "Too slow!",
  "Missed me?",
  "Are you even trying?",
  "Given up yet?",
  "You'll never catch me!"
];

function runAway(e) {
  ghost.classList.add("appear");
  document.body.style = `background: #212121;
                color: red;`;
  event.stopPropagation();
  pityCount += 1;

  if (pityCount < 20) {
    cancelButton.innerText = words[Math.floor(Math.random() * (6 - 0) + 0)];
    ghost.style = `transform: translate(${
      Math.random() * (40 - -40) + -40
    }vw, ${Math.random() * (40 - -40) + -40}vh);`;
  } else {
    cancelButton.innerText = "Okay fine! Cancel... if you can hehe";
    ghost.style = "opacity: 0;";
  }
}

cancelButton.addEventListener("mouseover", (e) => runAway(e));