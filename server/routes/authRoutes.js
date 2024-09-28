const express = require('express');
const router = express.Router();
const { registerUSer, authUser, getUserProfile, updateUserProfile, deleteUser } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Registration route
router.post('/register', registerUSer);

// Login route
router.post('/login', authUser);


router.get('/profile', protect, getUserProfile);

router.put('/profile', protect, updateUserProfile);

// Delete user (protected route)
router.delete('/:id', protect, deleteUser); // Delete by user ID

module.exports = router;
