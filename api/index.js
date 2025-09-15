const express = require('express');
const app = express();
import cors from "cors";

// Import products from same folder
const products = require('./products');
const cartdata = require("./cart");
app.use(cors());

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/cart',(req,res)=>{
  res.json(cartdata);
})

module.exports = app;
