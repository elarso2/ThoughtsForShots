const { AuthenticationError } = require("apollo-server-express");
const { User, Thought, Comment, Drink } = require("../models");
const { signToken } = require("../utils/auth");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const resolvers = {
  Query: {
    drink: async (parent, { _id }) => {
      return await Drink.findById(_id);
    },

    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "tab.drink",
          populate: "tab",
        });

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },

    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const line_items = [];

      // const { drink } = await tab.populate("drink");

      for (let i = 0; i < drink.length; i++) {
        const price = await stripe.price.create({
          drink: drink._id,
          currency: "usd",
        });

        line_items.push({
          price: price._id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });
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
  },
};
