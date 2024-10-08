// orderRoutes.js
const express = require('express');
const { 
    addOrderItems, 
    getOrderByID, 
    updateOrderToPaid, 
    updateOrderToDelivered,
    getAllOrders // Import for the new route
} = require('../controllers/orderController.js'); 
const { protect } = require('../middleware/authMiddleware.js'); // Ensure admin middleware is imported

const router = express.Router();

// Order routes
router.post('/', protect, addOrderItems); // Regular users can create orders
router.get('/', protect, getAllOrders); // Only admins can get all orders
router.get('/:id', protect, getOrderByID); // Regular users can get their own order by ID
router.put('/:id/pay', protect, updateOrderToPaid); // Only admins can update to paid
router.put('/:id/deliver', protect, updateOrderToDelivered); // Only admins can update to delivered

// Export the router
module.exports = router;
