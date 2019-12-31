var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('login.hbs',{layout: false});
});

router.post('/login', (req,res) => {
  console.log(req.body);
});

module.exports = router;
