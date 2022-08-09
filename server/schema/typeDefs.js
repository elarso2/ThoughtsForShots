const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    thoughts: [Thought]
  }

  type Thought {
    _id: ID
    content: String
    user: User
    comments: [Comment]
  }

  type Drink {
    _id: ID
    price: String
    quantity: String
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
    drink: Drink
    users: [User]
    checkout(drink: [ID]!): Checkout
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!): Auth
    updateUser(username: String, email: String): User
    login(email: String!): Auth
    createThought(thoughtText: String!, thoughtAuthor: String!): Thought
    createComment(
      thoughtId: ID!
      commentText: String!
      author: String!
    ): Thought
    deleteThought(thoughtId: ID!): Thought
    deleteComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
