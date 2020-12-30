var express = require('express');
var router = express.Router();
var status_order = require('../models/status_order_models.js');
var _ = require('lodash');

router.get('/', function(req, res, next) {
  res.render('Admin/status_order/index');
});
