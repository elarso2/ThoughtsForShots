const mongoose = require("mongoose");
const moment = require("moment");

const { Schema, model } = mongoose;

const thoughtSchema = new Schema({
  content: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 280,
  },
  username: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => moment(timestamp).format("MM DD, YYYY [at] hh:mm a"),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
      },
      author: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) =>
          moment(timestamp).format("MM DD, YYYY [at] hh:mm a"),
      },
    },
  ],
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
