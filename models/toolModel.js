var mongoose = require('mongoose');
var toolSchema = mongoose.Schema({
  tool_name: {type: String, required : true},
  created_date: {type:Date,default: Date.now}
});

var Tool = mongoose.model("tools",toolSchema);
module.exports = Tool;
