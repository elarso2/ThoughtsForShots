const mongoose = require("mongoose");
const moment = require("moment");

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
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => moment(timestamp).format("MM DD, YYYY [at] hh:mm a"),
  },
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
