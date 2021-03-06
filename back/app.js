const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const postRoutes = require('./routes/post.routes');
const userRoutes = require("./routes/user.routes");
const bodyParser = require("body-parser")

const mongoose = require("mongoose");
const password = process.env.DB_PASS;
const userName = process.env.DB_USERNAME;

mongoose
  .connect(
    `mongodb+srv://${userName}:${password}@cluster22.goshd.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));



app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/images", express.static(path.join(__dirname, "images")));


app.use("/auth/user", userRoutes);
app.use("/posts", postRoutes); 

  module.exports = app;
