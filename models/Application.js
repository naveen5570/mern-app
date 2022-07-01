// models/Application.js

const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  time_of_service: {
    type: String
  },
  fees: {
    type: String
  },
  request_applied: {type:mongoose.Schema.Types.ObjectId,
    ref:'Request'
    },
  
  professional_id: {type:mongoose.Schema.Types.ObjectId,
    ref:'Professional'
    },
},{ timestamps: true });



module.exports = Application = mongoose.model('Application', ApplicationSchema);