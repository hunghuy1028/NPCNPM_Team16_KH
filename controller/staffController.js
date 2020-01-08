const staff = require('../models/staffs');
const ticket = require('../models/tickets');
var bcrypt = require('bcryptjs');
const showtimes = require("../models/showtimes");
const Movie = require("../models/movies");
const cinemas = require("../models/cinemas");
const sale = require('../models/sales');



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
    req.session.authUser = st;
    const url = req.query.retUrl || '/';
    res.redirect(url);

}

exports.logout = (req,res,next) =>
{
    req.session.isAuthenticated = false;
    req.session.authUser = null;
    res.redirect('/');
}

module.exports.Booking = async (req, res, next)=>
{
    //thong tin nhan vien duoc luu trong req.session.authUser
    
    //let tong = {};
    let today = [];
    const phimday1 = [];
    const homnay1= new Date();
    const homnay = new Date(new Date().setHours(0,0,0,0));
    const ngaymai = new Date(homnay.getTime() + 24 * 60 * 60 * 1000);
    const uudai = await sale.find({});

    const filmtoday = await showtimes.find({Time: {$gte: homnay, $lt:  ngaymai}});

    for(var i=0;i< filmtoday.length;i++)
    {
        const idphim = filmtoday[i].MovieID;
        if(phimday1.includes(idphim) == false)
            phimday1.push(idphim);
    }

    for(var i=0;i<phimday1.length;i++)
    {
        let phim1= {};
        phim1.id= phimday1[i];
        let t = await Movie.findById(phimday1[i]);
        phim1.name = t.Name;
        phim1.xc=[];
        for(var j=0; j<filmtoday.length;j++)
        {
            var idMovie = filmtoday[j].MovieID;
            
            if(idMovie == phimday1[i])
            {
                const idfind = filmtoday[j].CinemaID;
                const findRap  = await cinemas.findById(idfind);
                const idrap = findRap.Name;
                const t = new Date(filmtoday[j].Time); 
                const hour = t.getHours();
                const minutes = t.getMinutes();
                const time = hour +":"+ minutes; 

                const infor = "Rạp: "+idrap+" - Thời gian: "+time;
                const temp = {};
                temp.idxc=filmtoday[j]._id;
                temp.info=infor;
                phim1.xc.push(temp);
            }
        }
        today.push(phim1);
    }
    const tong = JSON.stringify(today);
    res.render("book-ticket.hbs",{today:today, tong:tong, uudai:uudai});
}

module.exports.sendBooking = async (req, res, next)=>
{   
    const showtimes = req.body.showtimes;
    const deals = req.body.deals;
    const position = String(req.body.row) + String(req.body.col);
    console.log(position);
    const staff =  req.session.authUser;
    const staffid = staff[0]._id;
    const isExistPos = await ticket.findOne({Position: position});
    if(isExistPos !== null)
    {
        req.flash('error_msg','Ghế đã tồn tại!');
        res.redirect('/staff/booking');
    }
    else
    {
        let discount =0;
        if(parseInt(deals)===0)
        {
            discount =0;
        }
        else
        {
            const giamgia = await sale.findOne({_id: deals});
            discount  = giamgia.Discount;
        }
        const Total = 50000 - parseInt(discount);

        const newTicket = new ticket({
            StaffID: staffid,
            ShowtimeID: showtimes,
            Position: position,
            SaleID: deals,
            Cost: Total
        });

        console.log(newTicket);

        newTicket.save().then(()=>
        {
            req.flash('error_msg','Đặt vé thành công. Kiểm tra hóa đơn');
            res.redirect('/staff/booking');
        })
    }
}