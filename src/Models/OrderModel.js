const mongoose = require('mongoose');
const oderSchema = mongoose.Schema({
    user : {type : mongoose.Schema.Types.ObjectId, required : true},
    items : {type : mongoose.Schema.Types.ObjectId},
    totalAmount : {type : Number, required : true, min : 0},
    shippingAddress : {type : String, required : true},
    status : {type : String, required : true, default : "Pending"}
})

const orderModel = mongoose.model('users', oderSchema);
module.exports = orderModel