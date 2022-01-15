const mongoose = require("mongoose");
const articlesSchema = new mongoose.Schema({
  
  link: {
    type: String,
    // required: true
  },

});


const Articles = new mongoose.model("Articles", articlesSchema);

