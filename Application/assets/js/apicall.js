const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

/* axios.get('https://api.tvmaze.com/search/shows?q=girls')
    .then(res =>{
        console.log(res.data[3].score);
        console.log(res.headers);
    })

    
.catch (error =>{
    console.error('Your Data is Not Showing', error)
}) 
 */

/* const APIaxios = async () => {
  try {
    const resp = await axios.get("https://api.tvmaze.com/search/shows?q=girl");
    console.log(resp.data[3].score);
    console.log(resp.headers);
  } catch (error) {
    console.log("Error of API call", error);
  }
}; */

/* 
APIaxios(); */

/* const btn = document.createElement("button");
const h1t = document.createElement("h2");
btn.innerText = "Get Jokes";
h1t.innerText = "Click get Jokes to get new Jokes";
const bodys = document.querySelector("body");
bodys.appendChild(h1t);
bodys.appendChild(btn);
const createEl= () =>{
 
  const ol1 = document.createElement("ol");
  bodys.appendChild(ol1);
  const btn1 = document.createElement("li");
}

 */

/* const bodys = document.querySelector("body");
const btn = document.createElement("button");
const h1t = document.createElement("h2");
 btn.innerText = "Get Jokes"; 
 h1t.innerText = "Click get Jokes to get new Jokes"; 
btn.append("Get Jokes");
h1t.append("Click get Jokes to get new Jokes");
 const newJokes = async () => {
  const getJOKSdad = await dadJoks();
};
btn.addEventListener("click", newJokes);
 */

/* const CreatePelement = () => {
  const bodys = document.querySelector("body");
  const btn = document.createElement("button");
  const heading = document.createElement("h2");
  const ol1 =document.createElement('ol');
  btn.innerText = "Get Dads Jokes";
  heading.innerText = "Click on get Dad's Jokes for get new jokes";
  ol1.id='firstOL';
  bodys.appendChild(heading);
  bodys.appendChild(btn);
  bodys.appendChild(ol1);
  btn.id="newbtn";
  const newbrw = document.querySelector("#newbtn");
};
CreatePelement();

 */
const btn = document.querySelector("#addjokes");
const ol = document.querySelector("#newol");

/* const createElement =()=>{
  const li = document.createElement('li');
  li.innerText=res.data.joke;
  ol.appendChild(li);
} */

const dadJoks = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    console.log(res.data.joke);
    const li = document.createElement("li");
    li.innerText = res.data.joke;
    ol.appendChild(li);
    li.style.color = makeRandomColor();
  } catch (error) {
    console.log("Error", error);
  }
};

btn.addEventListener("click", function () {
  dadJoks();
});
