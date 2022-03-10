const contain = document.querySelector("#pokamonid");

baseurl = "https://raw.githubusercontent.com/jaylynch/pokemoji/master/img/";

let getint = prompt("How many Pokamon do you want: ");

const hd= document.querySelector('#header');
/* hd.replaceWith("This is My Pokamon"); */
hd.classList.add('text-center');
hd.classList.add('p-2')
/* hd.innerText('What about my Pokamon Website'); */



for (let index = 1; index < getint; index++) {
  const newIMG = document.createElement("img");
  const pkmn = document.createElement("div");
  const pkmnlabel = document.createElement("span");
  pkmnlabel.innerText= `#${index}`;
  newIMG.src = `${baseurl}${index}.png`;
  pkmn.appendChild(newIMG);
  pkmn.appendChild(pkmnlabel);
  contain.appendChild(pkmn);
  
  pkmn.classList.add("img-thumbnail");
  pkmn.classList.add("d-inline-block");
  
  console.log(newIMG.src);
  console.log(pkmnlabel.innerText);
  
  
}
