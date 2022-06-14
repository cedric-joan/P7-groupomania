require("dotenv").config();
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const User = require("../models/user.model");

function signup(req, res) {
  console.log(req.body);
  const NUMBER_OF_ROUNDS = 10;
  bcrypt.hash(req.body.password, NUMBER_OF_ROUNDS).then((hash) => {
    const user = new User({
      userName: req.body.userName,
      email: req.body.email,
      password: hash,
    });
    user
      .save()
      .then(() => res.status(201).json({ user: user._id }))
      .catch(() => res.status(400).json({ message: "email déjà utilisé !" }));
  });
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });

    console.log(user);
    if (!user) {
      return res.status(401).json("Utilisateur non trouvé !");
    }
    const isValid = await bcrypt.compare(req.body.password, user.password);

    if (!isValid) {
      return res.status(400).json("Mot de passe incorrect !");
    }
    const jwtPassword = process.env.JWT_PASSWORD;
    res.status(200).json({
      userId: user._id,
      token: jwt.sign({ userId: user._id }, jwtPassword, {
        expiresIn: "24h",
      }),
    });
  } catch (error) {
    res.status(500).json({ error });
  }
}

function getOneUser(req, res) {
  User.findOne({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({ error }));
}
function deleteUser(req, res) {
  User.findOne({ _id: req.params.id }).then((user) => {
    if (user.userId != req.userId) {
      res
        .status(403)
        .json({ message: "utilisateur ne possède pas cette ressource" });
      return;
    }
    User.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Utilisteur supprimé !" }))
      .catch((error) => res.status(400).json({ error }));
  });
}

module.exports = { signup, login, getOneUser, deleteUser };
