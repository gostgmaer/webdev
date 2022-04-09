/* console.log (6+6); */

// promise


/* 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


let request = fakeRequestPromise("yelp.com/api/coffee");
request.then(() => {
  console.log("Promise Resolved !");
  console.log("it's Working");
}).catch(()=>{
    console.log("Promise Rejected !");
  console.log("it's Not Working");
})
 */


/* const sing = async () =>{
     throw new Error ("This is a Sing Error"); 
    return "Hi this is async";
} */

/* sing().then((data) =>{
    console.log("Promese Resolved with: ",data );
}

) */


