// models/Book.js

const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  specialisation: {
    type: String
  },
  repair_explanation: {
    type: String
  },
  repair_immediately: {
    type: String
  },
  address_1: {
    type: String
  },
  address_2: {
    type: String
  },
  country: {
    type: String
  },
  state_or_province: {
    type: String
  },
  city: {
    type: String
  },
  zipcode: {
    type: String
  },
  status: {
    type: String
  },
  user_id: {type:mongoose.Schema.Types.ObjectId,
    ref:'User'
    },
},{ timestamps: true });



module.exports = Request = mongoose.model('Request', RequestSchema);