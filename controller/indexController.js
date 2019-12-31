exports.home = (req, res, next) =>
{
    let bigposter = [];
    let item1={};
    let item2={};
    let item3={};

    item1.img = "/poster/movie/1.jpg";
    item1.name = "MẮT BIẾC";
    item1.description = "Mắt Biếc: Một sự kết hợp tinh tế vẻ đẹp thuần khiết của văn chương Nguyễn Nhật Ánh, với những khung hình mãn nhãn đặc trưng của Victor Vũ, đã từng khiến khán giả choáng ngợp từ “Thiên mệnh anh hùng” tới “Tôi thấy hoa vàng trên cỏ xanh”";
    
    item2.img = "/poster/movie/2.jpg";
    item2.name = "TRẺ TRÂU KHỞI NGHIỆP";
    item2.description = 'Những tưởng đường đời sẽ dễ thở hơn trường học, đôi bạn Taek-Il (Park Jung-Min) và Sang-Pil (Jung Hae-In) quyết nghỉ học để dấn thân vào đời. Taek-il xin làm shipper cho tiệm mì của đầu bếp Ma Dong-seok "cục súc", còn Sang-Pil đi theo bọn cho vay nặng lãi đòi nợ thuê. Từ đây hai thanh niên "trẻ trâu" mới có cơ hội nếm vị trưởng thành sau những lần bị đời vùi dập.';
    
    item3.img = "/poster/movie/3.jpg";
    item3.name = "ĐIỆP VIÊN ẨN DANH";
    item3.description = "Biệt đội giải cứu thế giới của siêu điệp viên Lance Sterling và các phụ tá siêu tài năng và thông minh!";
    
    bigposter.push(item1);
    bigposter.push(item2);
    bigposter.push(item3);

    let watch =[];
    let i1 = {};
    i1.img = "/poster/movie/1i.jpg";
    i1.name = "MẮT BIẾC";
    i1.category ="Tình cảm";

    let i2 = {}, i3={};

    i2.img = "/poster/movie/2i.jpg";
    i2.name = "Trẻ trâu khởi nghiệp";
    i2.category ="Hài";

    i3.img = "/poster/movie/3i.jpg";
    i3.name = "ĐIỆP VIÊN ẨN DANH";
    i3.category ="Hoạt hình";
    
    watch.push(i1);
    watch.push(i2);
    watch.push(i3);
    watch.push(i1);
    watch.push(i2);
    watch.push(i3);
    watch.push(i1);
    watch.push(i2);
    watch.push(i3);

    res.render("index.hbs",{title:"Movie Cinema", bigposter:bigposter, watch:watch});

}