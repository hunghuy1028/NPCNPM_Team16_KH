const Movie = require('../models/movies');

exports.home = async (req, res, next) =>
{
    let bigposter = [];
    const indexposter = await Movie.aggregate([{$sample: {size: 4}}]);
    
    for(var i=0;i< indexposter.length;i++)
    {
        let item={};
        item.id = indexposter[i]._id;
        item.cover=indexposter[i].Cover;
        item.name=indexposter[i].Name;
        item.description = indexposter[i].Description;

        bigposter.push(item);
    }

    let watch =[];
    const indexwatch = await Movie.find({Comingsoon: false}).limit(6);

    for(var i=0;i<indexwatch.length;i++)
    {
        let item={};
        item.id = indexwatch[i]._id;
        item.poster=indexwatch[i].Poster;
        item.name=indexwatch[i].Name;
        item.category= indexwatch[i].Category;

        watch.push(item);
    }

    let featurewatch =[];

    const indexfeaturewatch = await Movie.find({Comingsoon: true}).limit(6);
    for(var i=0;i<indexfeaturewatch.length;i++)
    {
        let item={};
        item.id = indexfeaturewatch[i]._id;
        item.poster=indexfeaturewatch[i].Poster;
        item.name=indexfeaturewatch[i].Name;
        item.category= indexfeaturewatch[i].Category;

        featurewatch.push(item);
    }

    
    res.render("index.hbs",{title:"Movie Cinema", bigposter:bigposter, watch:watch, featurewatch: featurewatch});

}