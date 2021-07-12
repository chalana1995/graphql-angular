const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    quote: {
        type: String,
        rquired: true
    },
    author: {
        type: String,
        rquired: true
    }
})

module.exports = mongoose.model('Quote', quoteSchema);