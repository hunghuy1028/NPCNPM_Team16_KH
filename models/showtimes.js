const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Showtime = new Schema({
    MovieID: {
        type: String,
        require: true,
    },
    Time: {
        type: Date,
        require: true
    },
    CinemaID: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model('showtimes', Showtime);