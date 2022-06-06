const {Post} = require("../models/post.model");
const fs = require("fs");

function createPost(req, res) {
  const imageUrl = req.imageUrl
  const content = req.content
  const post = {content, imageUrl}
  res.status(201).json( post )
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
function getOnePost(req, res) {
  Post.findOne({ _id: req.params.id })
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(404).json({ error }));
}
function getAllPost(res) {
  Post.find()
    .then((posts) => res.status(200).json(posts))
    .catch((error) => res.status(400).json({ error }));
}


module.exports = {
  createPost,
  deletePost,
  getAllPost,
  getOnePost,
  modifyPost,
};
