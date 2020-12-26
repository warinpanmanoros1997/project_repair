var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('Admin/index', { title: 'หน้าหลัก' });
});
module.exports = router;
