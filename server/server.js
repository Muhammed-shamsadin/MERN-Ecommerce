// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js'); // Adjust path based on your structure

// Load environment variables
dotenv.config();

// Import Express and initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to the database
connectDB();

// Start the server
const start = () => {
  try {
    console.log('Starting server...');

    // Import Routes
    const authRoutes = require('./routes/authRoutes.js'); // Change to require
    const productRoutes = require('./routes/productRoutes.js'); // Change to require
    const orderRoutes = require('./routes/orderRoutes.js'); // Change to require

    // Use the imported routers
    app.use('/api/auth', authRoutes);
    app.use('/api/products', productRoutes);
    app.use('/api/orders', orderRoutes);

    // Basic route
    app.get('/', (req, res) => res.send('API is running...'));

    // Start server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Error during server startup:', error);
  }
};

// Call the start function
start();
