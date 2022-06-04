const express = require("express");
const router = express.Router();

const {
  createPost,
  modifyPost,
  deletePost,
  getOnePost: getPost,
  getAllPost: getPosts,
} = require("../controllers/post.controller");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.post("/", auth, multer, createPost);
router.put("/:id", auth, multer, modifyPost);
router.delete("/:id", auth, deletePost);
router.get("/:id", auth, getPost);
router.get("/", auth, getPosts);

module.exports = router;