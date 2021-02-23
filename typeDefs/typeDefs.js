const { gql } = require("apollo-server-koa");

const typeDefs = gql`
    type Person {
        lastname: String
        firstname: String
    }

    type Query {
        persons:[Person]
    } 
`

module.exports = {
    typeDefs
}