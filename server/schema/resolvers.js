const { AuthenticationError } = require("apollo-server-express");
const { User, Thought, Comment } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")(SECRETKEYGOESHERE);

const resolvers = {
  Query: {},
  Mutation: {
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    createThought: async (parent, { thoughts }, context) => {
      console.log(context);
      if (context.user) {
        const thought = new Thought({ thoughts });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { thoughts: thought },
        });

        return thought;
      }

      throw new AuthenticationError("Not logged in");
    },
  },
};
