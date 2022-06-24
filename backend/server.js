const express = require("express");
const mysql = require("mysql2");
const app = express();
var bodyParser = require('body-parser')
const cors = require("cors");
const db = require("./models");
const config = require("./config/config.js");
const path = require("path");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Routers
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
