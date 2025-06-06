/**
 * @file db.js
 * @description Establishes a connection to the MongoDB database using Mongoose.
 *              Loads environment variables from the .env file.
 * @author Naga Gopi Mallolu
 * @version 1.0.0
 * @date June 5, 2025
 */

require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
    return conn.connection; // return the connection object
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;