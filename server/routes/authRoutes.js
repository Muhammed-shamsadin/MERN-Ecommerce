// authRoutes.mjs
import express from 'express';
import {
    registerUser,
    authUser,
    getUserProfile,
    updateUserProfile,
    deleteUser,
    getAllUsers,
    updateUserRole
} from '../controllers/authController.js'; // Ensure this path is correct
import { protect, admin } from '../middleware/authMiddleware.js'; // Ensure this path is correct

const router = express.Router();

// Registration route
router.post('/register', registerUser);

// Login route
router.post('/login', authUser);

// User profile routes
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

// Admin routes
router.get('/', protect, admin, getAllUsers); // Get all users (admin only)
router.put('/:id', protect, admin, updateUserRole); // Update user role (admin only)
router.delete('/:id', protect, admin, deleteUser); // Delete user by ID (admin only)

// Export the router
export default router;
