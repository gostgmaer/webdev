const makeRandomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

/* const tvShow = async () => {
  try {
    const res = await axios.get(
      "https://api.tvmaze.com/singlesearch/shows?q=girls"
    );
    console.log(res);
    console.log(res.data);
  } catch (error) {
    console.log("Error", error);
  }
}; */

const headsearchtxt = document.querySelector("#search-input");
const headsearchbtn = document.querySelector("#search-header");
const headingTxt = document.querySelector("#heading-txt");
const headFormSearch = document.querySelector("#head-form-search");

headsearchtxt.addEventListener('change', function(){
  removeELE()
})


headFormSearch.addEventListener("submit", async function (e) {
 
  e.preventDefault();
  /* console.dir(headFormSearch); */
  const userInput = headFormSearch.firstElementChild.value;
  /* console.log(headFormSearch.firstElementChild.value); */
  const paramss = { params: { q: userInput }, headers: {} };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, paramss);
  makeIMG(res.data);
  headFormSearch.firstElementChild.value = "";
  
});



const makeIMG = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
     /*  console.log(result);
      console.log(result.show.image.medium); */
      const img = document.createElement("img");
      img.src = result.show.image.medium;
      document.body.append(img);
      img.className = "img-thumbnail m-3";
    }
  }
};

const removeELE = () => {
  const getimg = document.querySelectorAll(".img-thumbnail");
  for (let index = 0; index < getimg.length; index++) {
    getimg[index].remove();
    console.log("Event is Working")
  }
};
