require("dotenv").config();
const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken");

const User = require("../models/user.model")

function signup(req, res) {
  const NUMBER_OF_ROUNDS = 10;
  bcrypt.hash(req.body.password, NUMBER_OF_ROUNDS).then((hash) => {
    const user = new User({
      email: req.body.email,
      password: hash,
    });
    user
      .save()
      .then(() => res.status(201).json({ message: "Utilisateur créé" }))
      .catch((error) => res.status(400).json({ error }));
  });
}

function login(req, res) {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return sendErrorMessage(res, "utilisateur non trouvé !");
      }
      return bcrypt
        .compare(req.body.password, user.password)
        .then((isValid) => ({ isValid, user }));
    })
    .then((obj) => {
      const { isValid, user } = obj;
      if (!isValid) {
        return sendErrorMessage(res, "mot de passe incorrect !");
      }
      const jwtPassword = process.env.JWT_PASSWORD;
      res.status(200).json({
        userId: user._id,
        token: jwt.sign({ userId: user._id }, jwtPassword, {
          expiresIn: "24h",
        }),
      });
    })
    .catch((error) => res.status(500).json({ error }));
}
function sendErrorMessage(res, error) {
  res.status(401).json({ error });
}
module.exports = { signup, login };
