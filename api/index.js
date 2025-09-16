const express = require('express');
const app = express();

const cors = require("cors"); 

// Import products from same folder
const products = require('./products');
const cartdata = require("./cart");
const orders = require("./orders");


app.use(cors());


// Middleware to parse JSON body
app.use(express.json());

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));


app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/cart',(req,res)=>{
  res.json(cartdata);
})

app.get('/orders',(req,res)=>{
  res.json(orders);
})

app.post('/addtocart',(req,res)=>{
  console.log(req.body);
  res.json({ message: "Data received successfully!", data: req.body });
})



module.exports = app;
