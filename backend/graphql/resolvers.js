const Quote = require('../models/quote');


module.exports = {
    quotes: async function () {
        const quotes = Quote.find();
        return {
            quotes: quotes.map((q) => {
                return q;
            })
        }
    },
    createQuote: async function ({ quoteInput }) {
        const quote = new Quote({
            quote: quoteInput.quote,
            author: quoteInput.author
        })

        const createQuote = await quote.save();

        return createQuote;
    },
    updateQuote: async function ({ id, quoteInput }) {
        const quote = await Quote.findById(id);

        if (!quote) {
            throw new Error("No quote found !")
        }
        quote.quote = quoteInput.quote;
        quote.author = quoteInput.author;

        const updatedQuote = await quote.save();

        return updatedQuote;
    },
    deleteQuote: async function ({ id }) {
        const quote = await Quote.findById(id);

        if (!quote) {
            throw new Error("No quote found !")
        }
        const deleteQuote = await Quote.findByIdAndRemove(id);

        return deleteQuote;
    }
}