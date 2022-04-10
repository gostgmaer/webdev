const express = require('express');
const res = require('express/lib/response');

const app = express()



/* app.use((req, res) => {
    console.log('Data sended');
    res.send('<h1>This is a HTML access uses </h1>')

}) */


app.get('/r/:subreddit',(req,res)=>{
res.send('This is Sub reddit');
})

app.get('/cat', (req,res) => {
   res.send('Cat Requested Successfully Done')

})


app.get('/', (req,res) => {
    res.send('This is the Homepage please check')
 
 })



 app.post('/gost', (req,res) => {
    res.send('this is POst Request')
 
 })

 /* app.get('*', (req,res) => {
    res.send('This is 404 request')
 
 }) */


app.listen(3000, () => {
    console.log('Working at Port, 3000')
})