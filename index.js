const Koa = require("koa");
const { ApolloServer } = require("apollo-server-koa");
const { typeDefs } = require("./typeDefs/typeDefs");
const { Query } = require("./resolvers/Query");

const app = new Koa();

app.listen({ port: 4000 }, () => {
    console.log(`Server is running`)
})

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query
    }
})


server.applyMiddleware({ app })