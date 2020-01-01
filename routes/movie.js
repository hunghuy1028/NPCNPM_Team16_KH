var express = require('express');
var router = express.Router();

var movies = require("../controller/movieController");

/* GET home page. */
router.get('/', movies.listfilm);

router.get('/detail', movies.details);

router.get('/showtimes', movies.showtimes);

module.exports = router;
