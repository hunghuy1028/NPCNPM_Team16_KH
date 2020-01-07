const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Sale = new Schema({
    Name: {
        type: String,
        require: true,
    },
    Condition:
    {
        type: String,
    },
    Description: {
        type: String,
    },
    Discount: {
        type: String,
    },
    DueDate: {
        type: String,
    }
})

module.exports = mongoose.model('sales', Sale);