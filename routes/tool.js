var express = require('express');
var router = express.Router();
var Tool = require('../models/toolModel.js')
var _ = require('lodash');

router.get('/',function(req,res,next) {
    Tool.find().exec((err,data) => {
    res.render('Admin/tool/index',{title:'หน้าหลัก',data:data});
    });
})
router.get('/add',function(req,res,next) {
    res.render('Admin/tool/add');
});
router.post('/create',function(req,res,next){
    var doc = new Tool(req.body);
    doc.save((err,data) => {
    if(err) console.log(err);
    res.redirect('/tool');
    });
});
router.get('/edit/:_id',function(req,res,next) {
  Tool.findById(req.params._id,(err,data) =>{
    if(err) console.log(err);
    res.render('Admin/tool/edit',{data:data});
  });
})
router.post('/update/:_id',function(req,res,next) {
  Tool.findByIdAndUpdate(req.params._id,req.body,(err,data) => {
    if(err) console.log(err);
    res.redirect('/tool');
  });
});
router.get('/delete/:_id',function(req,res,next){
    Tool.findByIdAndRemove(req.params._id,(err,data) => {
      if(err) console.log(err);
      res.redirect('/tool');
    });
});
module.exports = router;
