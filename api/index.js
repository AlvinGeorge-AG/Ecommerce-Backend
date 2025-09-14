const express = require('express');

const app = express();



app.get('/data',(req,res)=>{
    res.send("HI");
})



// app.listen(3000,()=>{
//     console.log("Rumnning!!!");
// })

module.exports = app;