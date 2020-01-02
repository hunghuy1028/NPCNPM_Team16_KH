const Movie = require('../models/movies');

exports.home = async (req, res, next) =>
{
    let bigposter = [];
    const indexposter = await Movie.aggregate([{$sample: {size: 3}}]);
    
    for(var i=0;i< indexposter.length;i++)
    {
        let item={};
        console.log(indexposter[i]._id);
        item.img=indexposter[i]._id;
        item.name=indexposter[i].Name;
        item.description = indexposter[i].Description;

        bigposter.push(item);
    }

    let watch =[];
    const indexwatch = await Movie.aggregate([{$sample: {size: 7}}]);

    for(var i=0;i<indexwatch.length;i++)
    {
        let item={};
        item.img=indexwatch[i]._id;
        item.name=indexwatch[i].Name;
        item.category= indexwatch[i].Category;

        watch.push(item);
    }

    let featurewatch =[];

    const indexfeaturewatch = await Movie.find({Year: {$gt: 2019}});
    for(var i=0;i<indexfeaturewatch.length;i++)
    {
        let item={};
        item.img=indexfeaturewatch[i]._id;
        item.name=indexfeaturewatch[i].Name;
        item.category= indexfeaturewatch[i].Category;

        featurewatch.push(item);
    }

    
    res.render("index.hbs",{title:"Movie Cinema", bigposter:bigposter, watch:watch, featurewatch: featurewatch});

}