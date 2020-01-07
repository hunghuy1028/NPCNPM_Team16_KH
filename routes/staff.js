var express = require('express');
var router = express.Router();

var staff = require('../controller/staffController');

router.get('/login',staff.login);

router.post('/login',staff.authenticate);
router.get('/logout',staff.logout);


router.get('/booking',staff.auth, function(req,res,next)
{
  res.render('book-ticket.hbs',{layout:false})
})

router.post('/booking',staff.auth, function(req,res,next)
{
  console.log(req.body);
})
module.exports = router;
