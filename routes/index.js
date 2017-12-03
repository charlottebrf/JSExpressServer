var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// GET account name
router.get('/account-name', function(req, res) {
  res.json({"id":"my-funky-beat",
      "label":null,
      "bank_id":"uk-bank-x-a",
      "views_available":[{
          "id":"owner",
          "short_name":"Owner",
          "is_public":false
      }]})
});

module.exports = router;


