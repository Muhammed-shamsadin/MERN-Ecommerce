import Product from '../models/Product.js';

// CREATE (POST) a new product (only accessible to authenticated users)
const createProduct = async (req, res) => {
    const { name, price, description, countInStock, image } = req.body;

    try {
        const product = new Product({
            name, 
            price,
            description,
            countInStock,
            image,
        });

        await product.save();
        res.status(201).json(product);
    } catch (error) {
        console.error('Error creating products:', error);
        res.status(500).json({ message: 'Failed to create product' });
    }
};

// GET all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Failed to fetch products' });
    }
};

// GET Product by ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        res.status(200).json(product);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Failed to fetch products' });
    }
};

// PUT (UPDATE) a product (only accessible to authenticated users)
const updateProduct = async (req, res) => {
    const { name, price, description, countInStock, image } = req.body;

    try {
        const product = await Product.findById(req.params.id);

        if (!product) return res.status(404).json({ message: 'Product not found' });

        // Update product fields
        product.name = name || product.name;
        product.price = price || product.price;
        product.description = description || product.description;
        product.countInStock = countInStock || product.countInStock;
        product.image = image || product.image;

        const updatedProduct = await product.save();
        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ message: 'Failed to update product' });
    }
};

// DELETE a product by ID
const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);

        if (!product) return res.status(404).json({ message: 'Product not found' });

        res.json({ message: 'Product removed' });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ message: 'Failed to delete product' });
    }
};

export {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
