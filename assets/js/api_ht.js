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


fetch('https://api.tvmaze.com/search/shows?q=girls');