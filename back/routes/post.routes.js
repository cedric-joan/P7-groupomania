const express = require("express");
const router = express.Router();

const {
  createPost,
  modifyPost,
  deletePost,
  getPosts,
} = require("../controllers/post.controller");

// const imageUpload = require("../middleware/image-config")
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

router.post("/", multer, createPost);
router.put("/:id", auth, modifyPost);
router.delete("/:id", auth, deletePost);
router.get("/", auth, getPosts);

module.exports = router;