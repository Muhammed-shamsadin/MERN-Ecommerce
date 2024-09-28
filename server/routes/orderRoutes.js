const express = require('express');
const router = express.Router();
const { addOrderItems, getOrderByID, updateOrderToPaid, updateOrderToDelivered } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');


router.post('/', protect, addOrderItems);

router.get('/:id', protect, getOrderByID);

router.put('/:id/pay', protect, updateOrderToPaid);

router.put('/:id/deliver', protect, updateOrderToDelivered);


module.exports = router;