const  Mongoose  = require("mongoose");






const productSchema= new Mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price: {
        type:String,
        required:true,
       
    },categoty:{
        type:String,
        lowercase:true,
        // enum:['fruit','vegetable','dairy',"animal"]

    }
})


const product=Mongoose.model('product',productSchema);
module.exports=product;