var express = require('express');
var router = express.Router();
var Order = require('../models/orderModel.js');
var _ = require('lodash');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('Admin/login/index', { title: 'หน้าหลัก' });
});
router.get('/main',function(req,res,next) {
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
    res.render('Admin/index', { title: 'หน้าหลัก',data:data});
    });
});

module.exports = router;
