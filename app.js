const express = require("express");
const port = 8080;
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
const productRoute = require("./router/productRoute");

app.use("/product", productRoute);

app.get("/", (req, res) => {
  res.send("welcome");
});

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("connected to DB!");
});

// listen
app.listen(port);
