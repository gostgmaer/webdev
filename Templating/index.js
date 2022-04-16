const express = require('express');

const app = express();
const path = require('path');
const axios = require('axios');
const res = require('express/lib/response');
const redditData = require('./data.json')



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/r/:sub', (req, res) => {
    const { sub } = req.params;
    const data1 = redditData[sub];
    if (data1) {
        res.render('sub', { ...data1 });
    }else{
        res.render('notfound',{sub})
    }
    
})


app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10 + 1);
    res.render('rander', { rand: num })
})

app.get('/cats', (req, res) => {
    const cats = ['Blue', 'White', 'yellow', 'red', 'rusty']
    res.render('cats', { cats })
})
/* app.use(express.static(path.join(__dirname, '/public'))) */


app.use(express.static(path.join(__dirname, '/bootstrap')))






app.listen(33, () => {
    console.log('Working at 33')
})

