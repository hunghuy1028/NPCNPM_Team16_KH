const Movie = require('../models/movies');
const showtimes = require('../models/showtimes');
const cinemas = require('../models/cinemas');

exports.listfilm = async (req,res,next) =>
{
    const movies = await Movie.find({});

    res.render('listfilm.hbs', { 
        title: 'Danh sách phim',
        phim: movies,
    });
}

exports.details = async (req, res, next) =>
{
    console.log(req.query.id);
    
    const row = await Movie.findById(req.query.id);

    res.render('single-film-review.hbs', {
        title: 'Review',
        movie: row,
    });
}

exports.showtimes = async (req, res, next) =>
{
    let today = [];
    let tomorrow = [];
    let twodaynext = [];
    let date={};

    const homnay = new Date(new Date().setHours(0,0,0,0));
    const ngaymai = new Date(homnay.getTime() + 24 * 60 * 60 * 1000);
    const ngaykia = new Date(homnay.getTime() + 2* 24 * 60 * 60 * 1000);
    const ngay3 = new Date(homnay.getTime() + 3* 24 * 60 * 60 * 1000);
    date.homnay = String(homnay.getDate()).padStart(2, '0') + "/" + String(homnay.getMonth() + 1).padStart(2, '0');
    date.ngaymai = String(ngaymai.getDate()).padStart(2, '0') + "/" + String(ngaymai.getMonth() + 1).padStart(2, '0');
    date.ngaykia = String(ngaykia.getDate()).padStart(2, '0') + "/" + String(ngaykia.getMonth() + 1).padStart(2, '0');

   const filmtoday = await showtimes.find({Time: {$gte: homnay, $lt:  ngaymai}});
   const filmtomrrow = await showtimes.find({Time: {$gte: ngaymai, $lt:  ngaykia}});
   const filmtwodaynext = await showtimes.find({Time: {$gte: ngaykia, $lt: ngay3 }});

   const phimday1 = [];
   const phimday2 = [];
   const phimday3 = [];

    for(var i=0;i< filmtoday.length;i++)
    {
        const idphim = filmtoday[i].MovieID;
        if(phimday1.includes(idphim) == false)
            phimday1.push(idphim);
    }

    for(var i=0;i<phimday1.length;i++)
    {
        let phim1= {};
        
        let t = await Movie.findById(phimday1[i]);
        phim1.name = t.Name;
        phim1.cover = t.Cover;
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
                const temp = {};
                temp.idrap = idrap;
                temp.time = time;
                phim1.xc.push(temp);    
            }
        }
        today.push(phim1);
    }
    

    for(var i=0;i< filmtomrrow.length;i++)
    {
        const idphim = filmtomrrow[i].MovieID;
        if(phimday2.includes(idphim) == false)
            phimday2.push(idphim);
    }

    for(var i=0;i<phimday2.length;i++)
    {
        let phim1= {};
        
        let t = await Movie.findById(phimday2[i]);
        phim1.name = t.Name;
        phim1.cover = t.Cover;
        phim1.xc=[];
        for(var j=0; j<filmtomrrow.length;j++)
        {
            var idMovie = filmtomrrow[j].MovieID;
            if(idMovie == phimday2[i])
            {
                const idfind = filmtomrrow[j].CinemaID;
                const findRap  = await cinemas.findById(idfind);
                const idrap = findRap.Name;
                const t = new Date(filmtomrrow[j].Time); 
                const hour = t.getHours();
                const minutes = t.getMinutes();
                const time = hour +":"+ minutes; 
                const temp = {};
                temp.idrap = idrap;
                temp.time = time;
                phim1.xc.push(temp);    
            }
        }
        tomorrow.push(phim1);
    }


    for(var i=0;i< filmtwodaynext.length;i++)
    {
        const idphim = filmtwodaynext[i].MovieID;
        if(phimday3.includes(idphim) == false)
            phimday3.push(idphim);
    }

    for(var i=0;i<phimday3.length;i++)
    {
        let phim1= {};
        
        let t = await Movie.findById(phimday3[i]);
        phim1.name = t.Name;
        phim1.cover = t.Cover;
        phim1.xc=[];
        for(var j=0; j<filmtwodaynext.length;j++)
        {
            var idMovie = filmtwodaynext[j].MovieID;
            if(idMovie == phimday3[i])
            {
                const idfind = filmtwodaynext[j].CinemaID;
                const findRap  = await cinemas.findById(idfind);
                const idrap = findRap.Name;
                const t = new Date(filmtwodaynext[j].Time); 
                const hour = t.getHours();
                const minutes = t.getMinutes();
                const time = hour +":"+ minutes; 
                const temp = {};
                temp.idrap = idrap;
                temp.time = time;
                phim1.xc.push(temp);    
            }
        }
        twodaynext.push(phim1);
    }

    console.log(today);
    res.render('showtimes.hbs',{title:"Lịch chiếu", today: today, tomorrow:tomorrow, twodaynext: twodaynext, date: date});
}