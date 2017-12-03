var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.json({ title: 'Express' });
});

// GET account name
router.get('/accounts', function(req, res) {
  res.json({customer_name: "Charlotte Fereday", bank_name:"nationwide", bank_id: "656896"});
});

// GET account balance
router.get('/balances', function(req, res) {
    res.json({balance:"2400"});
});

// GET account transactions
router.get('/transactions', function(req, res) {
    res.json({Pret:"7.60", WHSmith: "10.00", SnappySnaps: "20", Tesco: "56"});
});

module.exports = router;


