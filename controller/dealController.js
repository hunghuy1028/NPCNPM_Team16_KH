exports.detailsDeals = (req,res,next)=>
{
    let deals = [];
    let deal1={} , deal2 ={}, deal3={}, deal4={};
    deal1.img = "/poster/deals/tetga.jpg";
    deal1.name = "Ưu đãi đồng giá 50k";
    deal1.time ="Đến hết 1/2020";
    deal1.price = "45.000Đ"
    deal1.description ="Điều kiện khuyến mãi: Có thẻ HS hoặc SV. Thời gian: Từ thứ 2 đến chủ nhật hằng tuần trước 31/1/2020.Không áp dụng cho dịp lễ, tết và khách hàng trên 22 tuổi"

    deal2.img="/poster/deals/member.jpg";
    deal2.name="Khách hàng thân thiết";
    deal2.time="Từ 12/2019";
    deal2.price="45.000Đ";
    deal2.description="Thẻ thành viên trên tay, mua ngay vé chỉ từ 45k.Điều kiện khuyến mãi: Có thẻ thành viên.Thời gian: Từ 12/2019"

    deal3.img="/poster/deals/refill.jpg";
    deal3.name="Thêm thỏa thích";
    deal3.time="Đến hết tháng 3/2020";
    deal3.price="Free";
    deal3.description="Miễn phí refill lại bắp nước.Điều kiện khuyến mãi: Khách hàng mua combo refill. Thời gian: Thứ 5 hằng tuần đến hết 3/2020"

    deal4.img="/poster/deals/ten.jpg";
    deal4.name="Mốc 10h";
    deal4.time="Đến hết tháng 3/2020";
    deal4.price="45.000đ";
    deal4.description="Điều kiện áp dụng: Mua vé tại rạp trước 10h sáng mỗi ngày từ 1/1/2020. Giá chỉ từ 45k"


    deals.push(deal1);
    deals.push(deal2);
    deals.push(deal3);
    deals.push(deal4);

    res.render("deals.hbs",{title: "Ưu đãi", deals:deals});
}