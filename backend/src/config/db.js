const mongoose = require("mongoose");

const colors = require("colors");

const connectDb = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected ${conn.connection.host}`.cyan.underline);
    }catch(error)
    {
        console.log("Connection Failed", error.message);
        process.exit(1);
    }
};

module.exports = connectDb;