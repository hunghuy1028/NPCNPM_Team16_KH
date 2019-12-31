var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/listfilm', function (req, res, next) {
    res.render('listfilm.hbs', { title: 'Danh sách phim' });
});

router.get('/review', function (req, res, next) {
    res.render('single-film-review.hbs', { title: 'Review' });
});

module.exports = router;
