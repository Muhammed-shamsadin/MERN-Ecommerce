// authRoutes.js
const express = require('express');
const {
    registerUser,
    authUser,
    getUserProfile,
    updateUserProfile,
    deleteUser,
    getAllUsers,
    updateUserRole,
} = require('../controllers/authController.js'); // Ensure this path is correct
const { protect } = require('../middleware/authMiddleware.js'); // Ensure this path is correct

const router = express.Router();

// Registration route
router.post('/register', registerUser);

// Login route
router.post('/login', authUser);

// User profile routes
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

// Admin routes
// router.post('/admin/login', adminLogin); // Use the new admin login controller

router.get('/', protect, getAllUsers); // Get all users (admin only)
router.put('/:id', protect, updateUserRole); // Update user role (admin only)
router.delete('/:id', protect, deleteUser); // Delete user by ID (admin only)

// Export the router
module.exports = router;
