const mongoose = require('mongoose');

const Movie = new mongoose.Schema({
    Name: {
        type: String,
        require: true
    },
    Length: {
        type: Number
    },
    Category: {
        type: String,
        require: true
    },
    Director: {
        type: String
    },
    Trailer: {
        type: String
    },
    Year: {
        type: Number
    },
    Description: {
        type: String
    },
    Comingsoon:
    {
        type: Boolean
    },
    Poster:
    {
        type: String
    },
    Cover:
    {
        type: String
    }

})

module.exports = mongoose.model('movies', Movie);