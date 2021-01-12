var express = require('express');
var router = express.Router();
var Order = require('../models/orderModel.js');
var status_order = require('../models/status_order_models.js');
var Tool = require('../models/toolModel.js');
var _ = require('lodash');
/* GET home page. */
router.get('/', function(req, res, next) {
  Order.aggregate([
      {
         $lookup:
          {
           from:"tools" ,
           localField:"item",
           foreignField:"_id",
           as:"item_list"
          }
       },
       {
         $lookup:
         {
           from:"status_orders" ,
           localField:"status",
           foreignField:"_id",
           as:"status_list"
         }
       },
    ]).exec((err,data)=>{
    res.render('index', { title: 'หน้าหลัก',data:data});
    });
});
router.get('/create',function(req,res,next){
  var data_tool = [];
  var data_status = [];
  status_order.findOne({_id:'5ff60aec9bb2582928a60998'}).exec((err,status) =>{
    data_status = status;
    Tool.find().exec((err,tool) =>{
      data_tool = tool;
      res.render('create',{data_status:data_status,data_tool:data_tool});
    });
  });

});
router.post('/add',function(req,res,next){
 console.log(req.body);
 var doc = new Order(req.body);
 doc.save((err,data) => {
   if(err) console.log(err);
   res.redirect('/');
 });
});
module.exports = router;
