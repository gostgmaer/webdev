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
const btn = document.createElement("button");
const h1t = document.createElement("h2");
btn.innerText = "Get Jokes";
h1t.innerText = "Click get Jokes to get new Jokes";
const bodys = document.querySelector("body");
bodys.appendChild(h1t);
bodys.appendChild(btn);
const dadJoks = async () => {
    try {
      const config = { headers: { Accept: "application/json" } };
      const res = await axios.get("https://icanhazdadjoke.com/", config);
      console.log(res.data.joke);
      console.log(res.data);
      return res.data.joke;
      
      
    } catch (error) {
      console.log("Error", error);
    }
  };
  
const newJokes = async() => {
    const getJOKSdad = await  dadJoks();
    const ol1 = document.createElement("ol");
    bodys.appendChild(ol1);
    const btn1 = document.createElement("li");
    btn1.append(res.data.joke)
    ol1.appendChild(btn1);
};

btn.addEventListener("click",newJokes);



