const Sale = require("../models/sales");

exports.detailsDeals = async (req,res,next)=>
{
    let deals = [];
    
    const alldeals = await Sale.find({});
    for(var i=0;i< alldeals.length;i++)
    {
        let item={};

        item.id = alldeals[i]._id;
        item.name = alldeals[i].Name;
        item.condition = alldeals[i].Condition;
        item.description = alldeals[i].Description;
        item.discount = alldeals[i].Discount;

        var dates = new Date(alldeals[i].DueDate);
        var temp = dates.toJSON();
        console.log(temp);
        var day = temp.substring(8,10);
        var month = temp.substring(5,7);
        var year = temp.substring(0,4);

        item.date = day +"/"+month+"/"+year;

        deals.push(item);
    }
    res.render("deals.hbs",{title: "Ưu đãi", deals:deals});
}