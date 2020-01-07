var express = require('express');
var router = express.Router();

const staffController = require('../controller/staffController');

router.get('/login', function(req, res, next) {
  res.render('login.hbs',{layout: false});
});

router.post('/login', (req,res) => {
  console.log(req.body);
});


router.get('/booking', staffController.Booking);

router.post('/booking', function(req,res,next)
{
  console.log(req.body);
})
module.exports = router;
