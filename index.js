const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000
//Connect to mongodb atlas
mongoose.connect(process.env.MONGO_URL,
{useNewUrlParser: true}).then(()=>{
    console.log("Connect with mongodb atlas")
}).catch(error=>{
    console.log("Something Wrong Happened!",error);
})



app.listen(PORT,()=>{
    console.log("Server started at PORT: ",PORT);
})