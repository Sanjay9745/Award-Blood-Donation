const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,

  },
  place: {
    type: String,

  },
  blood_group: {
    type: String,

  },
  phone_number: {
    type: String,

  },
  district: {
    type: String,

  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
