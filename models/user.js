const mongose = require('mongose');
const bcrypt = require('bcrypt');

const config = require("../models/database");

//user schema
const UserSchema = mongose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
    required: true
  },
  username:{
    type: String
    required: true
  },
  password:{
    type: String
    required: true
  },
});

const User = module.exports = mongose.model('User',UserSchema);
