const express = require('express');
const products = require('./products');
const app = express();

const data = products;

app.get('/',(req,res)=>{
    res.json(data);
})



// app.listen(3000,()=>{
//     console.log("Rumnning!!!");
// })

module.exports = app;