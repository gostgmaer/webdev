/* const p1btn = document.querySelector("#p1btn");
const p2btn = document.querySelector("#p2btn");


const p1display = document.querySelector("#p1display");
const p2display = document.querySelector("#p2display"); */

let myselect = document.querySelector("#my-select");
for (let index = 1; index < 21; index++) {
  let newd = document.createElement("option");
  newd.id = "my-option";
  newd.value = index;
  newd.text = index;
  myselect.appendChild(newd);
}
let winScore = "";
myselect.addEventListener("change", function () {
  winScore = parseInt(this.value);

  console.log(myselect.value);
  reset();
});

const resetData = document.querySelector("#reset");

let p1 = {
  score: 0,
  button: document.querySelector("#p1btn"),
  display: document.querySelector("#p1display"),
};
let p2 = {
  score: 0,
  button: document.querySelector("#p2btn"),
  display: document.querySelector("#p2display"),
};

function updateScore(player, oppnent) {
  if (!isGOver) {
    player.score += 1;
    if (player.score === winScore) {
      isGOver = true;
      player.display.className = "winner";
      oppnent.display.className = "looser";
      player.button.Disabled = true;
      oppnent.button.Disabled = true;
    }
    player.display.textContent = player.score;
    console.log(player.score);
  }
}

/* let p1score = 0;
let p2score = 0; */
let isGOver = false;

p1.button.addEventListener("click", function () {
  /* if (!isGOver) {
    p1score += 1;
    if (p1score === winScore) {
      isGOver = true;
      p1display.className = "winner";
      p2display.className = "looser";
      p1btn.Disabled = true;
      p2btn.Disabled = true;
    }
    p1display.textContent = p1score;
    console.log(p1score);
  } */
  updateScore(p1, p2);
});
p2.button.addEventListener("click", function () {
  /*  if (!isGOver) {
    p2score += 1;
    if (p2score === winScore) {
      isGOver = true;
      p2display.className = "winner";
      p1display.className = "looser";
      p1btn.Disabled = true;
      p2btn.Disabled = true;
    }
    p2display.textContent = p2score;
    console.log(p2score);
  } */
  updateScore(p2, p1);
});

if (!isGOver) {
  p1btn;
}

resetData.addEventListener("click", reset);

function reset() {
  isGOver = false;

  for (const iterator of [p1, p2]) {
    iterator.score = 0;
    iterator.display.textContent = 0;
    iterator.display.classList.remove("winner", "looser");
    iterator.button.Disabled = false;
  }
  /* p1.display.textContent = 0;
  p2.display.textContent = 0;
  p1.score = 0;
  p2.score = 0;
  p1.display.classList.remove("winner", "looser");
  p2.display.classList.remove("winner", "looser");
  p1.button.Disabled = false;
  p1.button.Disabled = false; */
}

/* ==================================================================================




 Adding CSS on our Application to look good everything working only with JS 
 
 
 
 
 =============================================================================================*/

let appstyle = {
  buttonp1: document.querySelector("#p1btn"),
  displayt1: document.querySelector("#p1display"),
  button2: document.querySelector("#p2btn"),
  display2: document.querySelector("#p2display"),
  myselect: document.querySelector("#my-select"),
  section1: document.querySelector("#topsection1"),
  h1: document.querySelector("#h11"),
  div1: document.querySelector("#divselect"),
  label1: document.querySelector("#for-select"),
  reset1: document.querySelector("#reset"),
};
function applyStyle(){
  appstyle.buttonp1.className='btn btn-info';
  appstyle.button2.className='btn btn-info';
  appstyle.reset1.className='btn btn-denger';
  appstyle.buttonp1.className='btn btn-info';
  appstyle.buttonp1.className='btn btn-info';
  appstyle.buttonp1.className='btn btn-info';
  appstyle.buttonp1.className='btn btn-info';
  appstyle.buttonp1.className='btn btn-info';
  appstyle.buttonp1.className='btn btn-info';
}

applyStyle();