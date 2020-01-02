exports.listfilm = (req,res,next) =>
{
    const rows = [];
    //phim 1
    const row1 = {};
    row1.id = 1;
    //==> row1.id = Movie[i]._id 
    row1.ten = 'Mắt biếc';
    row1.thoiluong = 121;
    row1.mota = 'Mắt Biếc: Một sự kết hợp tinh tế vẻ đẹp thuần khiết của văn chương Nguyễn Nhật Ánh, với những khung hình mãn nhãn đặc trưng của Victor Vũ, đã từng khiến khán giả choáng ngợp từ “Thiên mệnh anh hùng” tới “Tôi thấy hoa vàng trên cỏ xanh”.'
    row1.nam = 2019;
    rows.push(row1);
    //phim 2
    const row2 = {};
    row2.id = 2;
    row2.ten = 'Trẻ trâu khởi nghiệp';
    row2.thoiluong = 102;
    row2.mota = 'Những tưởng đường đời sẽ dễ thở hơn trường học, đôi bạn Taek-Il (Park Jung-Min) và Sang-Pil (Jung Hae-In) quyết nghỉ học để dấn thân vào đời. Taek-il xin làm shipper cho tiệm mì của đầu bếp Ma Dong-seok “cục súc", còn Sang-Pil đi theo bọn cho vay nặng lãi đòi nợ thuê. Từ đây hai thanh niên "trẻ trâu" mới có cơ hội nếm vị trưởng thành sau những lần bị đời vùi dập.'
    row2.nam = 2019;
    rows.push(row2);
    //phim 3
    const row3 = {};
    row3.id = 3;
    row3.ten = 'Điệp viên ẩn danh';
    row3.thoiluong = 101;
    row3.mota = 'Biệt đội giải cứu thế giới của siêu điệp viên Lance Sterling và các phụ tá siêu tài năng và thông minh!'
    row3.nam = 2019;
    rows.push(row3);
    console.log(rows);
    res.render('listfilm.hbs', { 
        title: 'Danh sách phim',
        phim: rows,
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