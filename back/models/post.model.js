const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  userId: { type: String},
  name: { type: String },
  content: { type: String },
  imageUrl: { type: String},
  date: { type: Date, default: Date.now},
})
const Post = mongoose.model("Post", postSchema);
module.exports = {Post}