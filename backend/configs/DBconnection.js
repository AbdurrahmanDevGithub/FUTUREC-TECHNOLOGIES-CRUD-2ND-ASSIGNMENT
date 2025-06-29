const mongoose = require("mongoose")
require('dotenv').config()

const MONGO_URI = `mongodb://localhost:27017/${process.env.DB_NAME}`

const dbconnect = async()=>{
  try{
    mongoose.connect(MONGO_URI)
    console.log("Database connected successfully");
  }catch(error){
    console.log("Error in database connection",error);
  }
}

module.exports = dbconnect
