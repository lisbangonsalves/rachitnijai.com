const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    
    name:{
        type: String,
        required: true, 
    },
    link:{
        type: String,
        required: true, 
    },
    date:{
        type: Date,
        default: Date.now
    },
  });

  module.exports = mongoose.model('notes', NotesSchema);