// orderRoutes.js
import express from 'express';
import { 
    addOrderItems, 
    getOrderByID, 
    updateOrderToPaid, 
    updateOrderToDelivered,
    getAllOrders // Import for the new route
} from '../controllers/orderController.js'; 
import { protect, admin } from '../middleware/authMiddleware.js'; // Ensure admin middleware is imported

const router = express.Router();

// Order routes
router.post('/', protect, addOrderItems); // Regular users can create orders
router.get('/', protect, admin, getAllOrders); // Only admins can get all orders
router.get('/:id', protect, getOrderByID); // Regular users can get their own order by ID
router.put('/:id/pay', protect, admin, updateOrderToPaid); // Only admins can update to paid
router.put('/:id/deliver', protect, admin, updateOrderToDelivered); // Only admins can update to delivered

// Export the router
export default router;
