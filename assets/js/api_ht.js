/* console.log('API CALL JS is Working Fine');

 */

/* const apiReq = new XMLHttpRequest();


apiReq.onload = function(){
    console.log('API Working Fine');
    console.log(this.response);
}

apiReq.onerror= function(){
    console.log('API CALL ERROR');
    console.log(this.response);
}

apiReq.open('GET','https://api.tvmaze.com/search/shows?q=girls');
apiReq.send();

const resss = apiReq.responseText;

console.log(resss); */

/* fetch("https://api.tvmaze.com/search/shows?q=girls")
  .then((res) => { 
    console.log("response..... =>     ", res);
    return res.json();
  })
  .then((data) => {
    console.log( data);
    console.log("showing Data....=>   ", data[0].show.id);
  })

  .catch((e) => {
    console.log("Error", e);
  }); */

const fetTvShow = async() =>{
    const res = await fetch("https://api.tvmaze.com/search/shows?q=heros")
    console.log(res);
    const data= await res.json();
    console.log(data);
}



const fetTVShow = async() =>{
try {
    const res = await fetch("https://api.tvmaze.com/search/shows?=heros")
    console.log(res);
    const data= await res.json();
    console.log(data);
    
} catch (error) {
    console.log('Something Wrong Please Try Again')
    
}
   
}
