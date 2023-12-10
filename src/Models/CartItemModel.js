const mongoose = require('mongoose');
const CartSchema = mongoose.Schema({
    user : {type : mongoose.Schema.Types.ObjectId, required : true},
    product : {type : mongoose.Schema.Types.ObjectId, required : true},
    quantity : {type : Number, required : true, min : 0}
})

const CartItemModel = mongoose.model('users', CartSchema);
module.exports = CartItemModel