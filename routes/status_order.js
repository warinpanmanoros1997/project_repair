var express = require('express');
var router = express.Router();
var status_order = require('../models/status_order_models.js');
var _ = require('lodash');

router.get('/', function(req, res, next) {
  status_order.find().exec((err,data)=>{
  res.render('Admin/status_order/index',{data:data});
  });
});
router.get('/add',function(req,res,next) {
  res.render('Admin/status_order/add')
})
router.post('/create',function(req,res,next) {
  var doc = new status_order(req.body);
  doc.save((err,data) =>{
  if(err) console.log(err)
  res.redirect('/status_order')
  });
})
router.get('/edit/:_id',function(req,res,next) {
 status_order.findById(req.params._id,(err,data) =>{
   res.render('Admin/status_order/edit',{data:data});
 });
})
router.post('/update/:_id',function(req,res,next) {
  status_order.findByIdAndUpdate(req.params._id,req.body,(err,data)=>{
  if(err) console.log(err)
  res.redirect('/status_order');  
  });
});
router.get('/delete/:_id',function(req,res,next) {
  status_order.findByIdAndRemove(req.params._id,(err,data) =>{
    if(err) console.log(err)
    res.redirect('/status_order');
  });
})
module.exports = router;
