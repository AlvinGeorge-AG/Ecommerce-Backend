const express = require('express');
const fs = require("fs");
const app = express();

const cors = require("cors"); 

// Import products from same folder
const products = require('./products');
const cartdata = require("./cart.json");
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
  res.send(cartdata);
})

app.get('/orders',(req,res)=>{
  res.json(orders);
})

app.post('/addtocart',(req,res)=>{
  console.log(req.body);
  cartdata.push(req.body);
  fs.writeFileSync("./cart.json", JSON.stringify(cartdata, null, 2));
})

// app.listen(3000,()=>{
//   console.log("Running : 3000");
// })



module.exports = app;
