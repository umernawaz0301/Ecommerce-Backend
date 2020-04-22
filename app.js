const express = require("express");
const port = 8080;
const app = express();
const db = require("./db/index");
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
const productRoute = require("./router/productRoute");

app.use("/product", productRoute);

app.get("/", (req, res) => {
  res.send("welcome");
});

//db connection
db.connect().then(() => {
  // server start
  app.listen(port, () => {
    console.log("listening to the port: ", port);
  });
});

module.exports = app;
