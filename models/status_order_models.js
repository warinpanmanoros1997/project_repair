var mongoose = require('mongoose');
var statusSchema = mongoose.Schema({
  status_name:{type:String,required : true},
  created_date: {type:Date,default: Date.now}
});

var status_order = mongoose.model("status_order",statusSchema);
module.exports = status_order;
