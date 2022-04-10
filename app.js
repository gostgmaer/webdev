const figlet = require('figlet');
const colors = require('colors');
const axios = require('axios');

figlet('Kishor Sarkar', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.rainbow)
});


const apiCall = axios.get('https://catfact.ninja/fact').then(res=>{
   
    console.log(res.data.fact.rainbow)
})
