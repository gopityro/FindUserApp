
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('FindUserApp backend is running..');
});

app.use('/api', userRoutes);

module.exports = app;