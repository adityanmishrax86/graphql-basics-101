const Koa = require("koa");
const { ApolloServer } = require("apollo-server-koa");
const { typeDefs } = require("./typeDefs/typeDefs");
const { Query } = require("./resolvers/Query");
const { name } = require("faker");

const app = new Koa();

app.listen({ port: 4000 }, () => {
    console.log(`Server is running`)
})

const mockResolver = {
    Query: () => ({
        persons: () => [
            {
                firstname: name.firstName(),
                lastname: name.lastName()
            },
            {
                firstname: name.firstName(),
                lastname: name.lastName()
            }
        ]
    })
}

const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query
    },
    mocks: process.env.NODE_ENV === 'mock' ? mockResolver : false
})


server.applyMiddleware({ app })