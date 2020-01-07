const showtimes = require("../models/showtimes");
const Movie = require("../models/movies");
const cinemas = require("../models/cinemas");

module.exports.Booking = async (req, res, next)=>
{
    //let tong = {};
    let today = [];
    const phimday1 = [];
    const homnay = new Date(new Date().setHours(0,0,0,0));
    const ngaymai = new Date(homnay.getTime() + 24 * 60 * 60 * 1000);

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

                const infor = "Rạp: "+idrap+"- Thời gian: "+time;
                phim1.xc.push(infor);
            }
        }
        today.push(phim1);
    }
    const tong = JSON.stringify(today);
    console.log(tong)
    console.log(today);
    res.render("book-ticket.hbs",{today:today, tong:tong});
}