// productRoutes.js
const express = require('express');
const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController.js'); // Ensure this path is correct
const { protect } = require('../middleware/authMiddleware.js'); // Ensure this path is correct

const router = express.Router();

// Product routes
router.post('/', protect, createProduct); // Only admins can create products
router.put('/:id', protect, updateProduct); // Only admins can update products
router.delete('/:id', protect, deleteProduct); // Only admins can delete products
router.get('/', getAllProducts); // All users can get products
router.get('/:id', getProductById); // All users can get product by ID

// Export the router
module.exports = router;
