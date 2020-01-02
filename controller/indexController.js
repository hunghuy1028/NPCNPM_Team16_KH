const Movie = require('../models/movies');
const Admin = require('../models/admins');

exports.home = async (req, res, next) =>
{
    let bigposter = [];
    const indexposter = await Movie.find({}).limit(3);
    console.log(indexposter);
    for(var i=0;i<=2;i++)
    {
        let item={};
        item.img=indexposter[i]._id;
        item.name=indexposter[i].Name;
        item.Description = indexposter[i].Description;

        bigposter.push(item);
    }

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