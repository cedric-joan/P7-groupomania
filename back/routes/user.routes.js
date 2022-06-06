const express = require("express");
const router = express.Router()
const auth = require("../middleware/auth");

const userController = require("../controllers/user.controller")

router.post("/signup", userController.signup);
router.post("/login",auth, userController.login);
router.get("/", auth, userController.getAllUsers);
router.get("/:id",auth, userController.getOneUser);
router.delete("/:id",auth, userController.deleteUser);

module.exports = router;