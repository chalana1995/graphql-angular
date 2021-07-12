const Quote = require('../models/quote');


module.exports = {
    quotes: async function() {
        const quotes = Quote.find();
        return {
            quotes: quotes.map((q) => {
                return {
                    ...q._doc,
                    _id: q._id.toString()
                }
            })
        }
    }
}