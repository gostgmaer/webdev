const v2 = document.querySelector("#btnv2");

v2.onclick = function () {
  console.log("You Clicked me With Very CLear");
};

function screem() {
  console.log("Working");
}
v2.onmouseenter = screem;

const v3 = document.querySelector("#btnv3");
v3.addEventListener("mouseup", function () {
  alert("Btn Clicked");
});

const colors = document.querySelector("#change");

/* for (let index = 0; index < 100; index++) {
  colors.addEventListener("click", function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r},${g},${b})`;
    
    document.querySelector("body").style.backgroundColor = newColor;
    console.log(newColor);
  });
}
 */

const he1 = document.querySelector("h3");

const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};
const makeRandomColor2 = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

colors.addEventListener("click", function () {
  const newColor = makeRandomColor();
  const newColor2 = makeRandomColor2();
  document.querySelector("body").style.backgroundColor = newColor;
  he1.innerText = newColor;
  he1.style.color = newColor2;

  console.log(makeRandomColor());
});

for (let index = 0; index < 180; index++) {
  const addbtsn = document.querySelector("#addbtn");

  const newbtn = document.createElement("button");
  newbtn.innerText = `Click Me ${index}`;
  newbtn.id = "newbtnid";
  addbtsn.appendChild(newbtn);
  console.log(newbtn);
  newbtn.className = "btn btn-outline-success";
}
const btnclr = document.querySelectorAll("button");

for (let buttons of btnclr) {
  buttons.addEventListener("click", function () {
    buttons.style.backgroundColor=makeRandomColor()
    buttons.style.color='white';
  });
}


const eva = document.querySelector('button').addEventListener('click',function(evt){
  console.log(evt);

})


const inData=document.querySelector('input');
inData.addEventListener('keydown', function(e){
  console.log(e.key)
  console.log(e.code)
})
inData.addEventListener('keyup', function(e){
  console.log(e.key)
  console.log(e.code)
})




const forms = document.querySelector('#shelterForm');
const input1 =document.querySelector('#my-name')
const input2 =document.querySelector('#my-email')
const showul =document.querySelector('#ul1')
forms.addEventListener("submit", function(e){
  e.preventDefault();
  const value1 = input1.value;
  const value2 = input2.value;
  const nwLI = document.createElement('li');
  const nwL2 = document.createElement('li');
  nwLI.innerText= value1;
  nwL2.innerText= value2;
  
  showul.append(nwLI);
  showul.append(nwL2);
  input1.value="";
  input2.value="";

  console.log(`${value1} and ${value2}`);
})
