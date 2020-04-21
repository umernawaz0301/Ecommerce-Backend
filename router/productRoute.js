const express = require("express");
const router = express.Router();
const ProductsModel = require("../models/Products");

router.get("/list", async (req, res) => {
  // res.send("hello world");
  try {
    console.log("reached");
    const productlist = await ProductsModel.find();

    res.send(JSON.stringify(productlist));
  } catch (error) {
    res.send({ message: error });
  }
});

router.post("/add", async (req, res) => {
  console.log(JSON.stringify(req.headers));
  res.send(JSON.stringify(req.headers));
  // const productsAdd = ProductsModel({
  //   name: req.body.name,
  //   description: req.body.description,
  //   price: req.body.price,
  //   currency: req.body.currency,
  //   image: req.body.image,
  //   size: req.body.size,
  //   quantity: req.body.quantity,
  // });
  // try {
  //   const productsSave = await productsAdd.save();
  //   res.json(productsSave);
  // } catch (error) {
  //   res.json({ message: error });
  // }
});

module.exports = router;
