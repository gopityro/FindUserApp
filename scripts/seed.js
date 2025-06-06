/**
 * @file seed.js
 * @description
 * Seed Script for FindUserApp
 * 
 * Inserts sample user documents into the 'users' collection.
 * Only run this in development or test environments.
 * 
 * How to run this script:
 *      1. Ensure MongoDB is running.
 *      2. Set the MONGO_URI environment variable or use the default.
 *      3. Run the script using Node.js: `node scripts/seed.js`
 * 
 * @author Naga Gopi Mallolu
 * @version 1.0.0
 * @date June 5, 2025
 */

require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../src/config/db');
const User = require('../src/models/User');

const seedUsers = async () => {
  try {
    const dbConnection = await connectDB();

    if (dbConnection.readyState !== 1) {
      throw new Error('MongoDB connection not established.');
    }

    console.log('Connected to MongoDB');

    await User.deleteMany();

    const users = [
      {
        name: "John Doe",
        email: "johndoe@email.com",
        age: 30
      },
      {
        name: "Gopi Mallolu",
        email: "gopimallolu@email.com",
        age: 25
      },
      {
        name: "Underage User",
        email: "teen@example.com",
        age: 18
      }
    ];

    const inserted = await User.insertMany(users);
    console.log(`Success: Inserted ${inserted.length} users:`);
    inserted.forEach(user => {
      console.log({
        _id: user._id,
        name: user.name,
        email: user.email,
        age: user.age
      });
    });

    process.exit(0);
  } catch (err) {
    console.error('Seeding error:', err.message);
    process.exit(1);
  }
};

seedUsers();