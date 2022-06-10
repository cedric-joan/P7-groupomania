const { Post } = require("../models/post.model");
const fs = require("fs");
const posts = [];

function createPost(req, res) {
  const { content } = req.body;
  const post = new Post({
    imageUrl: `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`,
    content: content,
  });
  post.save().then(() => res.send({ post }));
  posts.unshift(post);
}

function getPosts(req, res) {
  const email = req.email;
  res.send({ posts, email });
}







function deletePost(req, res) {
  Post.findOne({ id: req.params.id }).then((post) => {
    if (post.userId != req.userId) {
      return res.status(403).send({ message: "utilisateur non autorisé" });
    }
    const filename = post.imageUrl.split("/images/")[1];
    fs.unlink(`images/${filename}`, () => {
      Post.deleteOne({ id: req.params.id })
        .then(() => res.status(200).json())
        .catch((error) => res.status(400).json({ error }));
    });
    const index = posts.indexOf(post);
    posts.splice(index, 1);
    res.send({ message: "post supprimé" });
  });
}


module.exports = {
  createPost,
  deletePost,
  getPosts,
};
