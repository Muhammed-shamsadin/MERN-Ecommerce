// productRoutes.mjs
import express from 'express';
import {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
} from '../controllers/productController.js'; // Ensure this path is correct
import { protect, admin } from '../middleware/authMiddleware.js'; // Ensure this path is correct

const router = express.Router();

// Product routes
router.post('/', protect, admin, createProduct); // Only admins can create products
router.put('/:id', protect, admin, updateProduct); // Only admins can update products
router.delete('/:id', protect, admin, deleteProduct); // Only admins can delete products
router.get('/', getAllProducts); // All users can get products
router.get('/:id', getProductById); // All users can get product by ID

// Export the router
export default router;
