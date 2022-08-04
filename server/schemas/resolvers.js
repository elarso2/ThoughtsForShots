const { AuthenticationError } = require("apollo-server-express");
const { User, Thought, Comment } = require("../models");
const { signToken } = require("../utils/auth");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const resolvers = {
  Query: {
    tab: async () => {
      return await Thought.find();
    },
    drink: async (parent, { tab, name }) => {
      const params = {};

      if (tab) {
        params.tab = tab;
      }

      if (name) {
        params.name = {
          $regex: name,
        };
      }

      return await Thought.find(params).populate("category");
    },
  },
};
