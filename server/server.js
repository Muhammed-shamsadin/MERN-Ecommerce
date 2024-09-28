const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Adjust path based on your structure

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json()); // Allows to handle JSON data
app.use(cors()); // Enables Cross-origin Resource Sharing

// MongoDB connection
connectDB();

// Import routes
const authRoutes = require('./routes/authRoutes'); // Adjust path based on your structure
const productRoutes = require('./routes/productRoutes');


app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);



// Basic route for testing the API
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
