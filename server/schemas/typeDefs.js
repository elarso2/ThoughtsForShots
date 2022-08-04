const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Tab {
    _id: ID
    name: String
  }

  type Drink {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    tab: Tab
  }

  type Order {
    _id: ID
    purchaseDate: String
    drink: [Drink]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    tab: [Tab]
    drinks(tab: ID, name: String): [Drink]
    drink(_id: ID!): Drink
    user: User
    order(_id: ID!): Order
    checkout(drinks: [ID]!): Checkout
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addOrder(drinks: [ID]!): Order
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    updateDrink(_id: ID!, quantity: Int!): Drink
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
