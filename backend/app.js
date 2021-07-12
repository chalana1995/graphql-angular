const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const graphqlSchema = require('./graphql/schema');
const graphqlResolver = require('./graphql/resolvers');

require("dotenv").config();

const { graphqlHTTP } = require('express-graphql')

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
        schema: graphqlSchema,
        rootValue: graphqlResolver,
        graphiql: true
    })
)

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log("DB Connected");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running ${PORT}`);
})