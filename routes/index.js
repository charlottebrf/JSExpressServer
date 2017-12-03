var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET account name
router.get('/account-name', function(req, res) {
  res.json({"bank_id":"nationwide"})
});

module.exports = router;


