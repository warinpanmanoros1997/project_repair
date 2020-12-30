var express = require('express');
var router = express.Router();
var User = require('../models/userModel.js');
var _ = require('lodash');
/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find().exec((err,data)=>{
  res.render('Admin/user/index',{data:data});
  });
});
router.get('/add', function(req, res, next) {
  res.render('Admin/user/add');
});
router.post('/create',function(req, res, next) {
  var doc = new User(req.body);
  doc.save((err,data)=>{
  if(err) console.log(err);
  res.redirect('/users');
  });
});
router.get('/edit/:_id',function(req, res, next) {
  User.findById(req.params._id,(err,data)=>{
  res.render('Admin/user/edit',{data:data});
  });
});
router.post('/update/:_id',function(req, res, next) {
  User.findByIdAndUpdate(req.params._id,req.body,(err,data)=>{
  if(err) console.log(err);
  res.redirect('/users');
  });
});
router.get('/delete/:_id',function(req,res,next){
  User.findByIdAndRemove(req.params._id,(err,data)=>{
  if(err) console.log(err);
  res.redirect('/users');
  });
});
module.exports = router;
