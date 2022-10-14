var mongoose = require('mongoose')

var Opinion = new mongoose.Schema({
    username : {
        type:String,
        require: true
    },
    message:{
        type:String,
    },
    date: {
        type:Date,
        default:Date.now
    }

})
module.exports = Opinion = mongoose.model('opinions',Opinion)