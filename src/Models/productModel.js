const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name : {type : String, required : true},
    description : {type : String},
    price : {type : Number, required : true, min : 0},
    stock : {type : Number, required : true, min : 0},
    category : {type : String, required : true},
    imageURL : {type : String}
})

const productModel = mongoose.model('users', productSchema);
module.exports = productModel