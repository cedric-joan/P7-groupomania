require("dotenv").config();
const bcrypt = require("bcrypt")

const jwt = require("jsonwebtoken");

const User = require("../models/user.model")

function signup(req, res) {
  console.log(req.body)
  const NUMBER_OF_ROUNDS = 10;
  bcrypt.hash(req.body.password, NUMBER_OF_ROUNDS).then((hash) => {
    const user = new User({
      userId: req.body.userId,
      pseudo: req.body.pseudo,
      email: req.body.email,
      password: hash,
    });
    user
      .save()
      .then(() => res.status(201).json({ message: "Utilisateur créé" }))
      .catch(() => res.status(400).json({ message: "email déjà utilisé !" }));
  });
}

function login(req, res) {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({message: "utilisateur non trouvé !"});
      }
      return bcrypt
        .compare(req.body.password, user.password)
        .then((isValid) => ({ isValid, user }));
    })
    .then((obj) => {
      const { isValid, user } = obj;
      if (!isValid) {
        return res.status(401).json({message:"mot de passe incorrect !"}) ;
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


function getAllUsers(res){
  User.find().select("-password")
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(404).json({ error }));
}
function getOneUser(req, res) {
  User.findOne({ _id: req.params.id })
    .then((user) => res.status(200).json(user))
    .catch((error) => res.status(404).json({ error }));
}
function deleteUser(req, res){
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
})
}




module.exports = { signup, login, getAllUsers, getOneUser,deleteUser };
