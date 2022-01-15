const mongoose = require("mongoose");
const articlesSchema = new mongoose.Schema({
  
  link: {
    type: String,
    // required: true
  },
  name:{
    type:String,
  },
  date:{
    type: Date,
    default: Date.now
},

});


const Articles = new mongoose.model("Articles", articlesSchema);

