var express = require('express');
var router = express.Router();

const staffController = require('../controller/staffController');

router.get('/login', function(req, res, next) {
  res.render('login.hbs',{layout: false});
});

router.get('/login',staffController.login);

router.post('/login',staffController.authenticate);
router.get('/logout',staffController.logout);

router.get('/booking',staffController.auth, staffController.Booking);

router.post('/booking',staffController.auth, staffController.sendBooking);

module.exports = router;
