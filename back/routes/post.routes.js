const express = require("express");
const router = express.Router();

const {
  createPost,
  modifyPost,
  deletePost,
  getOnePost: getPost,
  getAllPost: getPosts,
} = require("../controllers/post.controller");

// const imageUpload = require("../middleware/image-config")
const auth = require("../middleware/auth");
// const multer = require("../middleware/multer-config");

router.post("/", createPost);
router.put("/:id", auth, modifyPost);
router.delete("/:id", auth, deletePost);
router.get("/:id", auth, getPost);
router.get("/", auth, getPosts);

module.exports = router;