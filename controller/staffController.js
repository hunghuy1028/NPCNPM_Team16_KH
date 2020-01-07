const staff = require('../models/staffs');
var bcrypt = require('bcryptjs');

exports.auth = (req,res,next) => {
    if (req.session.isAuthenticated === false){
        return res.redirect(`/staff/login?retUrl=${req.originalUrl}`);
      }
    
      next();
}

exports.login = (req,res,next) =>
{
    res.render('login.hbs',{layout: false});
}

exports.authenticate = async (req,res,next) =>
{
    //console.log(req.body);

    const st = await staff.find({Username: req.body.username});
    //console.log(st);
    if (st.length === 0)
        return res.render('login.hbs', {
        layout:false,
        err_message: 'Invalid username or password.'
        });
    bcrypt.compare(req.body.password, st[0].Password, function(err, resp) {
        if(resp === false){
            return res.render('login.hbs', {
                layout:false,
                err_message: 'Invalid username or password.'
            });
        }
    });

    console.log(req.session.isAuthenticated);
    req.session.isAuthenticated = true;
    const url = req.query.retUrl || '/';
    res.redirect(url);

}

exports.logout = (req,res,next) =>
{
    req.session.isAuthenticated = false;
    req.session.authUser = null;
    res.redirect('/');
}