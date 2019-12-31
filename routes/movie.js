var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    const rows = [];
    //phim 1
    const row1 = {};
    row1.id = 1;
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
});

module.exports = router;
