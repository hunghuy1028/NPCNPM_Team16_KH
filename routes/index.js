var express = require('express');
var router = express.Router();

/* GET home page. */
const deals = require("../controller/dealController");
const index = require("../controller/indexController");

router.get('/', index.home);

router.get('/contact', function(req, res, next) {
  res.render('contact.hbs', { title: 'Liên hệ' });
});

router.get('/deals', deals.detailsDeals);



router.get('/:id', function (req, res, next) {
    console.log(+req.params.id);
  if (+req.params.id !== NaN) {
      const row = {};
      if(+req.params.id === 1){
        row.id = 1;
        row.ten = 'Mắt biếc';
        row.thoiluong = 121;
        row.mota = 'Mắt Biếc: Một sự kết hợp tinh tế vẻ đẹp thuần khiết của văn chương Nguyễn Nhật Ánh, với những khung hình mãn nhãn đặc trưng của Victor Vũ, đã từng khiến khán giả choáng ngợp từ “Thiên mệnh anh hùng” tới “Tôi thấy hoa vàng trên cỏ xanh”.'
        row.nam = 2019;
        row.theloai = 'Tình cảm';
        row.daodien = 'Victor Vũ';
        row.trailer = 'https://www.youtube.com/embed/ITlQ0oU7tDA';
      }

      if(+req.params.id === 2){
        row.id = 2;
        row.ten = 'Trẻ trâu khởi nghiệp';
        row.thoiluong = 102;
        row.mota = 'Những tưởng đường đời sẽ dễ thở hơn trường học, đôi bạn Taek-Il (Park Jung-Min) và Sang-Pil (Jung Hae-In) quyết nghỉ học để dấn thân vào đời. Taek-il xin làm shipper cho tiệm mì của đầu bếp Ma Dong-seok “cục súc", còn Sang-Pil đi theo bọn cho vay nặng lãi đòi nợ thuê. Từ đây hai thanh niên "trẻ trâu" mới có cơ hội nếm vị trưởng thành sau những lần bị đời vùi dập.'
        row.nam = 2019;
        row.theloai = 'Hài hước';
        row.daodien = 'Choi Jung-yol';
        row.trailer = 'https://www.youtube.com/embed/9SsehGW1Yb0';
      }

      if(+req.params.id === 3){
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
});
module.exports = router;
