const express = require('express');
const app = express();
import cors from "cors";

// Import products from same folder
const products = require('./products');
app.use(cors());
app.get('/', (req, res) => {
  res.json(products);
});

module.exports = app;
