const mongoose = require('mongoose');
const shortid = require('shortid');

const shortUrlSchema= new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type: String,
        required: true,
        default: shortid.generate
    },
    clicks: {
        type: Number,
        default: 0,
        required: true
    }
});

module.exports = mongoose.model('ShortUrl', shortUrlSchema);