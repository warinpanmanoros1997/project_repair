var mongoose = require('mongoose');
var orderSchema = mongoose.Schema({
  prename_id:{type:Number,required : true},
  firstname: {type: String, required : true},
  lastname: String,
  position: Number,
  phone_number:String,
  email:String,
  item:{type: String, required : true},
  order_detail:String,
  status:{type: String, required : true},
  created_date: {type:Date,default: Date.now}
});

var Order = mongoose.model("Orders",orderSchema);
module.exports = Order;
