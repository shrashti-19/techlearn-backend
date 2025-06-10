const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  password: { type: String, required: true },
  github: { type: String },
  isAdmin: {type: Boolean, default: false},
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
