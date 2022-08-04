const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        thoughts: [Thought]
        comments: [Comment]
    }

    type Thought {
        _id: ID
        user: User
        comments: [Comment]
    }

    type Comment {
        _id: ID
        user: User
        body: String
        thought: Thought
    }

    type Checkout {
        session: ID
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {

    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        createThought()
        
    }
`;

module.exports = typeDefs;
