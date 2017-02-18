const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Song = new Schema({
    title: String,
    author: String,
    album: String,
    text: {
        verses: [{
            _id: false,
            quotes: [{
                _id: false,
                phrase: String
            }]
        }]
    }
})

module.exports = mongoose.model('Song', Song)
