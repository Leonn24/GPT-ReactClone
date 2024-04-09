const express = require("express");
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const dotenv = require("dotenv");
const connectDB = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

dotenv.config();


const PORT = process.env.PORT || 3000;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const startApolloServer = async () => {
    await server.start();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use('/graphql', expressMiddleware(server, {
        context: authMiddleware
    }));

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '../client/dist')));

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '../client/dist/index.html'));
        });
    }

  connectDB();
  app.listen(PORT)
};

startApolloServer();