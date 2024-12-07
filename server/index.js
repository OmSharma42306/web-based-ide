const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    return res.json({msg:"hi"});
})


app.listen(3000,()=>{
    console.log("Server Started! on PORT : 3000")
})