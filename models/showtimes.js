const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Showtime = new Schema({
    MovieID: {
        type: ObjectId,
        require: true,
        ref: 'movies'
    },
    Time: {
        type: Date,
        require: true
    },
    CinemaID: {
        type: ObjectId,
        require: true,
        ref: 'cinemas'
    }
})

module.exports = mongoose.model('showtimes', Showtime);