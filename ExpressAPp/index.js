const express = require("express");
const product =require('./modal/products')
const Mongoose = require("mongoose");
const path = require("path");

const app = express()

Mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database Connection Success')
    }).catch(err => {
        console.log('Ohh Not able to connect please check the Error : ', err)
    })
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/products', async (req, res) => {
  const products= await  product.find({})
  console.log(products)
    res.render('products/index')
})


app.listen(3000, () => {
    console.log('App is Opening at 3000')
})