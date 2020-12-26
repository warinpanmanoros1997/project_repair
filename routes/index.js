var express = require('express');
var router = express.Router();
var Order = require('../models/orderModel.js');
var _ = require('lodash');
/* GET home page. */
router.get('/', function(req, res, next) {
  Order.find().exec((err,data)=>{
  res.render('index', { title: 'หน้าหลัก',data:data});
  });
});
router.get('/create',function(req,res,next){
  res.render('create');
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
