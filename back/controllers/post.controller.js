const {Post} = require("../models/post.model");
const fs = require("fs");
const posts = []

function createPost(req, res) {
  const content = req.body.content
  const hasImage = req.file != null
  const url = hasImage ? createImageUrl(req) : null
  const post = { content, imageUrl: url }
  posts.unshift(post)
  res.status(201).json({post})
}

function createImageUrl(req) {
let pathToImage = req.file.path.replace("\\", "/")
const protocol = req.protocol
const host = req.get("host")
return `${protocol}://${host}/${pathToImage}`

}

function modifyPost(req, res) {
  const postObjet = req.file
    ? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  Post.updateOne({ _id: req.params.id }, { ...postObjet, _id: req.params.id })
    .then(() => res.status(200).json())
    .catch((error) => res.status(400).json({ error }));
}
function deletePost(req, res) {
  Post.findOne({ _id: req.params.id }).then((post) => {
    if (post.userId != req.userId) {
      res
        .status(403)
        .json();
      return;
    }

    const filename = post.imageUrl.split("/images/")[1];
    fs.unlink(`images/${filename}`, () => {
      Post.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json())
        .catch((error) => res.status(400).json({ error }));
    });
  });
}
function getPosts(req,res) {
  const email = req.email
res.send({posts, email})
}


module.exports = {
  createPost,
  deletePost,
  getPosts,
  modifyPost,
};