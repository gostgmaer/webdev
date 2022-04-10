const Jokes = require('give-me-a-joke')
const colors =require('colors')
const axios =require('axios')

/* console.log(Jokes) */


Jokes.getRandomDadJoke(function(joke){
    console.log(joke.rainbow)
})

    

axios.get('https://catfact.ninja/fact').then(res =>{
  console.log(res.data.fact.blue);
})