const mongoose = require("mongoose");

const { Schema } = mongoose;

const thoughtSchema = new Schema({
  content: {
    type: Text,
    required: true,
    minLength: 10,
    maxLength: 280,
  },
  username: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
