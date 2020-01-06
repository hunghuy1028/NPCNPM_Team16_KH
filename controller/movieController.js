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

exports.details = (req, res, next) =>
{
    console.log(req.query.id);
    const row = {};
    if (+req.query.id === 1) {
        row.id = 1;
        row.ten = 'Mắt biếc';
        row.thoiluong = 121;
        row.mota = 'Mắt Biếc: Một sự kết hợp tinh tế vẻ đẹp thuần khiết của văn chương Nguyễn Nhật Ánh, với những khung hình mãn nhãn đặc trưng của Victor Vũ, đã từng khiến khán giả choáng ngợp từ “Thiên mệnh anh hùng” tới “Tôi thấy hoa vàng trên cỏ xanh”.'
        row.nam = 2019;
        row.theloai = 'Tình cảm';
        row.daodien = 'Victor Vũ';
        row.trailer = 'https://www.youtube.com/embed/ITlQ0oU7tDA';
    }

    if (+req.query.id === 2) {
        row.id = 2;
        row.ten = 'Trẻ trâu khởi nghiệp';
        row.thoiluong = 102;
        row.mota = 'Những tưởng đường đời sẽ dễ thở hơn trường học, đôi bạn Taek-Il (Park Jung-Min) và Sang-Pil (Jung Hae-In) quyết nghỉ học để dấn thân vào đời. Taek-il xin làm shipper cho tiệm mì của đầu bếp Ma Dong-seok “cục súc", còn Sang-Pil đi theo bọn cho vay nặng lãi đòi nợ thuê. Từ đây hai thanh niên "trẻ trâu" mới có cơ hội nếm vị trưởng thành sau những lần bị đời vùi dập.'
        row.nam = 2019;
        row.theloai = 'Hài hước';
        row.daodien = 'Choi Jung-yol';
        row.trailer = 'https://www.youtube.com/embed/9SsehGW1Yb0';
    }

    if (+req.query.id === 3) {
        row.id = 3;
        row.ten = 'Điệp viên ẩn danh';
        row.thoiluong = 101;
        row.mota = 'Biệt đội giải cứu thế giới của siêu điệp viên Lance Sterling và các phụ tá siêu tài năng và thông minh!'
        row.nam = 2019;
        row.theloai = 'Hài hước';
        row.daodien = 'Troy Quane, Nick Bruno';
        row.trailer = 'https://www.youtube.com/embed/E2zQAii4H8k';
    }

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
    console.log(homnay.getDay());
    console.log(date.homnay);


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
        phim1.img = phimday1[i];
        
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
        phim1.img = phimday2[i];
        
        let t = await Movie.findById(phimday2[i]);
        phim1.name = t.Name;
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
        phim1.img = phimday3[i];
        
        let t = await Movie.findById(phimday3[i]);
        phim1.name = t.Name;
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