var express = require('express');
var router = express.Router();
const unit = require('./unit.routes')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.use('/unit',unit);
module.exports = router;
