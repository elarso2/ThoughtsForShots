const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    thoughts: [Thought]
  }

  type Thought {
    _id: ID!
    thoughtText: String
    username: String
    createdAt: String
    comments: [Comment]
  }

  type Drink {
    _id: ID!
    price: String
    quantity: String
  }

  type Comment {
    _id: ID!
    author: String
    commentText: String
    createdAt: String
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    drink: Drink
    users: [User]
    checkout(drinks: [ID]!): Checkout
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String): User
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!, username: String!): Thought
    addComment(thoughtId: ID!, commentText: String!, author: String!): Thought
    deleteThought(thoughtId: ID!): Thought
    deleteComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
