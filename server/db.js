const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://axilldcunha:vasai2205@happilyeverafter.ov4nl.mongodb.net/r123?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;