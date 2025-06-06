/**
 * @file app.js
 * @description Initializes the Express application. Serves as the entry point for the backend server.
 * @author Naga Gopi Mallolu
 * @version 1.0.0
 * @date June 6, 2025
 */
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('FindUserApp backend is running..');
});

app.use('/api', userRoutes);

module.exports = app;