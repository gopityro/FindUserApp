const express = require('express');
const router = express.Router();
const { getUserById } = require('../controllers/userController');

router.get('/users/:id', getUserById);


module.exports = router;