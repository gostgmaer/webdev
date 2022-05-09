
const product = require('./modal/products')
const Mongoose = require("mongoose");
const path = require("path");



Mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database Connection Success')
    }).catch(err => {
        console.log('Ohh Not able to connect please check the Error : ', err)
    })


// const p = new product({
//     name: 'Appale',
//     price: 1.99,
//     categoty: "fruit"
// })

// p.save()
//     .then(p => {
//         console.log(p)
//     })

//     .catch(e => {
//         console.log(e);
//     })

const seeproducts = [{
    "name": "Langur, hanuman",
    "categoty": "Framing (Steel)",
    "price": "$5843.89"
}, {
    "name": "Indian giant squirrel",
    "categoty": "Asphalt Paving",
    "price": "$874.12"
}, {
    "name": "Civet, small-toothed palm",
    "categoty": "Fire Protection",
    "price": "$4894.50"
}, {
    "name": "Deer, black-tailed",
    "categoty": "Landscaping & Irrigation",
    "price": "$494.57"
}, {
    "name": "Black swan",
    "categoty": "Waterproofing & Caulking",
    "price": "$4718.93"
}, {
    "name": "Squirrel, red",
    "categoty": "Waterproofing & Caulking",
    "price": "$9073.77"
}, {
    "name": "Armadillo, nine-banded",
    "categoty": "Glass & Glazing",
    "price": "$6940.78"
}, {
    "name": "European beaver",
    "categoty": "Fire Sprinkler System",
    "price": "$366.88"
}, {
    "name": "Snake, tiger",
    "categoty": "Exterior Signage",
    "price": "$6730.34"
}, {
    "name": "Warthog",
    "categoty": "Fire Sprinkler System",
    "price": "$7435.44"
}]

product.insertMany(seeproducts)
    .then(res => {
        console.log(res)
    })

    .catch(e => {
        console.log(e);
    })