var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  user_prename:{type:Number,required : true},
  user_firstname: {type: String, required : true},
  user_lastname: String,
  user_username:String,
  user_password:String,
  user_position: Number,
  user_phone:String,
  email:String,
  created_date: {type:Date,default: Date.now}
});

var User = mongoose.model("Users",userSchema);
module.exports = User;
