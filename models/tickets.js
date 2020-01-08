const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Ticket = new Schema({
    StaffID: {
        type: String,
        require: true
    },
    ShowtimeID:
    {
        type: String,
        require: true
    },
    Position: {
        type: String,
        require: true,
    },
    SaleID: {
        type: String,
        require: true
    },
    Cost:
    {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('tickets', Ticket);