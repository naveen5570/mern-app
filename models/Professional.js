// models/Book.js

const mongoose = require('mongoose');

const ProfessionalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  displayName: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  photo_id: {
    type: String
  },
  registered_address: {
    type: String
  },
  office_address: {
    type: String
  },
  country: {
    type: String
  },
  city:{type: String},
  zipcode:{type: String},
  specialisation:{type:String},
  experience:{type:String},
  qualification:{type:String},
  standard_fees:{type:String},
  state_or_province: {
    type: String
  },
  radius_to_cater: {
    type: String
  },
  professional_card: {
    type: String
  },
  status: {
    type: String
  },
  
},{ timestamps: true });

module.exports = Professional = mongoose.model('professional', ProfessionalSchema);