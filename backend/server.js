require('dotenv').config();
const express = require("express");
const connectDb= require("./src/config/db");
const color = require("colors");
const cors = require("cors");

PORT = process.env.PORT || 8080;    

const app = express();



app.use(cors());
app.use(express.json());

connectDb();



app.get("/" , (req,res)=>{
    res.send("API id Running".green.bold);
});

app.listen(PORT ,()=>
{
    console.log(`Backend Server is RUNNING on https://localhost${PORT}/`.yellow.bold);
});
