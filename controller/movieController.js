const Movie = require('../models/movies');

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

exports.showtimes = (req, res, next) =>
{
    const days= 5;
    let content = [];
    let day1={};
    day1.url = "/poster/movie/1i.jpg";
    day1.name ="MẮT BIẾC";
    day1.xc="12h20";

    let day2={};
    day2.url = "/poster/movie/2i.jpg";
    day2.name ="MẮT BIẾC";
    day2.xc ="12h20";

    let day3={};
    day3.url = "/poster/movie/3i.jpg";
    day3.name ="MẮT BIẾC";
    day3.xc ="12h20";

    let day4={};
    day4.url = "/poster/movie/1i.jpg";
    day4.name ="MẮT BIẾC";
    day4.xc ="12h20";

    let day5={};
    day5.url = "/poster/movie/3i.jpg";
    day5.name ="MẮT BIẾC";
    day5.xc ="12h20";

    content[1]={pos: 1, day: day1};
    content[2]={pos: 2, day: day2};
    content[3]={pos: 3, day: day3};
    content[4]={pos: 4, day: day4};
    content[5]={pos: 5, day: day5};

    console.log(content);

    res.render('showtimes.hbs',{title:"Lịch chiếu", content: content});

}