const express = require("express");
const nodemon = require("nodemon");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");
const db = require("./models");
const config = require("./config/config.js");
require("dotenv").config();

app.use(cors());

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
