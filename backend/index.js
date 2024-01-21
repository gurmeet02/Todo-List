const express = require("express");
const app = express();
const port = 8080;
const bodyParser = require("body-parser");

const dotenv = require("dotenv");

dotenv.config();

const todoRoutes = require("./routes/todo");

const mongoose = require("mongoose");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());
// app.get("/", console.log(process.env.DB_PASSWORD));
app.use(todoRoutes);

const db = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.czmapfu.mongodb.net/`;

mongoose
  .connect(db)
  .then(() => {
    app.listen(port);
  })
  .catch((err) => console.log(err));
