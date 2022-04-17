const express = require('express');
const { request } = require('http');
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname, '/assets')))


app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.get('/', (req, res) => {
    res.render('home')
})

const resdata = [{
    "id": 1,
    "name": "Beatrix Ricoald",
    "email": "bricoald0@storify.com",
    "ip_address": "170.206.94.245",
    "useragent": "Mozilla/5.0 (Windows NT 6.0; WOW64; rv:24.0) Gecko/20100101 Firefox/24.0"
}, {
    "id": 2,
    "name": "Sandye Sprowles",
    "email": "ssprowles1@livejournal.com",
    "ip_address": "55.126.5.23",
    "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_2) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.215 Safari/535.1"
}, {
    "id": 3,
    "name": "Sidoney Rissom",
    "email": "srissom2@cbsnews.com",
    "ip_address": "208.156.167.53",
    "useragent": "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.3 Safari/533.19.4"
}, {
    "id": 4,
    "name": "Bertie Decourt",
    "email": "bdecourt3@skyrock.com",
    "ip_address": "54.157.38.210",
    "useragent": "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_8; zh-tw) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16"
}, {
    "id": 5,
    "name": "Ralph Samett",
    "email": "rsamett4@myspace.com",
    "ip_address": "38.87.186.103",
    "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/11.0.696.71 Safari/534.24"
}, {
    "id": 6,
    "name": "Mel Wattisham",
    "email": "mwattisham5@prweb.com",
    "ip_address": "18.134.86.140",
    "useragent": "Mozilla/5.0 (Windows; U; Windows NT 6.0; ja-JP) AppleWebKit/533.20.25 (KHTML, like Gecko) Version/5.0.4 Safari/533.20.27"
}, {
    "id": 7,
    "name": "Cornelius Bedinham",
    "email": "cbedinham6@cam.ac.uk",
    "ip_address": "85.227.96.103",
    "useragent": "Mozilla/5.0 (Windows NT) AppleWebKit/534.20 (KHTML, like Gecko) Chrome/11.0.672.2 Safari/534.20"
}, {
    "id": 8,
    "name": "Prudence Bufton",
    "email": "pbufton7@time.com",
    "ip_address": "243.117.235.64",
    "useragent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.11 Safari/535.19"
}, {
    "id": 9,
    "name": "Baxter Arens",
    "email": "barens8@squidoo.com",
    "ip_address": "28.244.3.129",
    "useragent": "Mozilla/5.0 (Windows NT 5.1; rv:15.0) Gecko/20100101 Firefox/13.0.1"
}, {
    "id": 10,
    "name": "Patricio Stoddart",
    "email": "pstoddart9@google.ru",
    "ip_address": "80.25.25.176",
    "useragent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/535.2 (KHTML, like Gecko) Ubuntu/11.04 Chromium/15.0.871.0 Chrome/15.0.871.0 Safari/535.2"
}]

app.get('/comment', (req, res) => {
    res.render('comment/index', { resdata })
})

app.get('/comment/new',(req,res)=>{
   res.render('comment/new', { resdata })
})
app.post('/comment', (req, res) => {
    const { name, email,useragent,ip_address } = req.body;
    resdata.push({name, email,useragent,ip_address})
   
     res.redirect('/comment') 
})



app.get('/gets', (req, res) => {
    res.send("GET/ Server Response");
})


app.post('/posts', (req, res) => {
    console.log(req.body)
    const { name, roll } = req.body;
    res.send(`Your Post Request with: ${name} and ${roll}`);
})





app.listen(888, () => {
    console.log('Working at Port: 888')
})