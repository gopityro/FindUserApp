/**
 * @file server.js
 * @description Entry point of the FindUserApp. Loads environment variables, 
 *              establishes a connection to MongoDB, and starts the Express server.
 * 
 * @author Naga Gopi Mallolu
 * @version 1.0.0
 * @date June 6, 2025
 */
require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 5050;

const startServer = async () => {
  try {
    await connectDB();  // Attempt to connect to DB
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();