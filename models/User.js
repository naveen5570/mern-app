// models/Book.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  otp_verified: {
    type: String
  },
},{ timestamps: true });

module.exports = User = mongoose.model('user', UserSchema);