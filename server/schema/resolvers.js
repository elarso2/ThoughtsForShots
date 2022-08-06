const { AuthenticationError } = require("apollo-server-express");
const { User, Thought, Comment } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")(SECRETKEYGOESHERE);

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("thoughts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("thoughts");
    },
    thoughts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Thought.find(params).sort({ createdAt: -1 });
    },
    thought: async (parent, { thoughtId }) => {
      return Thought.findOne({ _id: thoughtId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("thoughts");
      }
      throw new AuthenticationError("You must log in.");
    },
  },
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
    deleteThought: 
  },
};

module.exports = resolvers;