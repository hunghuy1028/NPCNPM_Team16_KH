var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Trang chủ' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact.hbs', { title: 'Liên hệ' });
});

router.get('/listfilm', function(req, res, next) {
  res.render('listfilm.hbs', { title: 'Danh sách phim' });
});

router.get('/review', function(req, res, next) {
  res.render('single-film-review.hbs', { title: 'Review' });
});

router.get('/deals', function(req, res, next) {
 res.render('deals.hbs', { title: 'Ưu đãi' });  
});


module.exports = router;