/**
 * @file userRoutes.js
 * @description Defines route for fetching user data by ID.
 *              Maps the user endpoint to the User controller logic.
 * 
 * 
 * @author Naga Gopi Mallolu
 * @version 1.0.0
 * @date June 6, 2025
 */

const express = require('express');
const router = express.Router();
const { getUserById } = require('../controllers/userController');

router.get('/users/:id', getUserById);

module.exports = router;