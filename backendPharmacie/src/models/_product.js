var mongoose = require('mongoose')


var Product = new mongoose.Schema({
    name : {
        type:String,
        require: true
    },
    category:{
        type:String,
    },    
    image :{
        type:String,
        require: true
    },    
})
module.exports = Product = mongoose.model('products',Product)