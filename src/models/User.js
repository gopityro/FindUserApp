/**
 * @file User.js
 * 
 * @description Defines the schema for the 'users' collection in MongoDB.
 * Each user has a name, email, and age.
 * Used by the application and seed scripts to interact with user data.
 * 
 * @author Naga Gopi
 * @version 1.0.0
 * @date June 5, 2025
 */

require('dotenv').config();
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
  },
}, {
  timestamps: true,
});

module.exports = model('User', userSchema);