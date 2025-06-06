/**
 * @file userController.js
 * @description Contains controller logic for handling user-related routes.
 *              
 * @author Naga Gopi Mallolu
 * @version 1.0.0
 * @date June 5, 2025
 */
const mongoose = require('mongoose');
const User = require('../models/User');

/**
 * @function getUserById
 * @description Fetches a user by ID and checks if they are older than 21.
 *              Returns user data or appropriate error messages.
 * 
 * @param {Object} req -  request object containing user ID in params.
 * @param {Object} res -  response object to send the result.
 * 
 * @returns {Object} JSON response with user data or error message.
 */
const getUserById = async (req, res) => {
  const { id } = req.params;

  // Validate ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid user ID format' });
  }

  try {
    const user = await User.findOne({ _id: id, age: { $gt: 21 } });

    if (!user) {
      return res.status(404).json({ message: 'User not found or underage' });
    }      
    return res.json(user);
    
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getUserById };