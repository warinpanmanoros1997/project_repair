var express = require('express');
var router = express.Router();
var Order = require('../models/orderModel.js');
var _ = require('lodash');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('Admin/login/index', { title: 'หน้าหลัก' });
});
router.get('/main',function(req,res,next) {
  Order.find().exec((err,data) =>{
  res.render('Admin/index', { title: 'หน้าหลัก',data:data})
  });
});

module.exports = router;
