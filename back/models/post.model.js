const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  userId: { type: String, required: true },
  pseudo: { type: String, required: true },
  content: { type: String, required: true },
  imageUrl: { type: String, required: true },
});
const Post = mongoose.model("Post", postSchema);
module.exports = {Post}