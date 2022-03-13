const p1btn = document.querySelector("#p1btn");
const p2btn = document.querySelector("#p2btn");
const resetData = document.querySelector("#reset");

const p1display = document.querySelector("#p1display");
const p2display = document.querySelector("#p2display");

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

let p1score = 0;
let p2score = 0;
let isGOver = false;

p1btn.addEventListener("click", function () {
  if (!isGOver) {
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
  }
});
p2btn.addEventListener("click", function () {
  if (!isGOver) {
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
  }
});

if (!isGOver) {
  p1btn;
}

resetData.addEventListener("click", reset);

function reset() {
  isGOver = false;
  p1display.textContent = 0;
  p2display.textContent = 0;
  p1score = 0;
  p2score = 0;
  p1display.classList.remove("winner", "looser");
  p2display.classList.remove("winner", "looser");
  p1btn.Disabled = false;
  p2btn.Disabled = false;
}
