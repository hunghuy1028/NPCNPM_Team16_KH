var express = require('express');
var router = express.Router();

/* GET home page. */
const deals = require("../controller/dealController");
const index = require("../controller/indexController");

router.get('/', index.home);

router.get('/contact', function(req, res, next) {
  res.render('contact.hbs', { title: 'Liên hệ' });
});

router.get('/deals', deals.detailsDeals);




module.exports = router;
