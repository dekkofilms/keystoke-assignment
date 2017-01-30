const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  firstname: String,
  lastname: String,
  description: String,
  picture: Buffer,
  created_at: Date,
  updated_at: Date
});

const User = mongoose.model('User', userSchema);
