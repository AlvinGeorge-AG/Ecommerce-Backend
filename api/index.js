const express = require('express');
const path = require('path');
const app = express();
const products = require(path.join(__dirname, './products'));
const data = products;

app.get('/',(req,res)=>{
    res.json(data);
})



app.listen(3000,()=>{
    console.log("Rumnning!!!");
})

module.exports = app;