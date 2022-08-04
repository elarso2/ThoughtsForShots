const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema({
  body: {
    type: Text,
    required: true,
    minLength: 5,
    maxLength: 280,
  },
  thought: {
    type: Schema.Types.ObjectId,
    ref: "Thought",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
