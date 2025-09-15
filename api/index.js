const express = require('express');
const app = express();
import cors from "cors";

// Import products from same folder
const products = require('./products');
const cartdata = require("./cart");
const orders = require("./orders");
app.use(cors());

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/cart',(req,res)=>{
  res.json(cartdata);
})

app.get('/orders',(req,res)=>{
  res.json(orders);
})

module.exports = app;
