// server.mjs
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js'; // Adjust path based on your structure

// Load environment variables
dotenv.config();

// Import Express and initialize the app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to the database
connectDB();

// Load AdminJS configuration dynamically
const start = async () => {
  // Import the AdminJS configuration
  const { adminRouter } = await import('./adminConfig.js');

  // Use the AdminJS router
  app.use('/admin', adminRouter);

  // Routes
  const authRoutes = await import('./routes/authRoutes.js'); // Ensure you use .mjs
  const productRoutes = await import('./routes/productRoutes.js'); // Ensure you use .mjs
  const orderRoutes = await import('./routes/orderRoutes.js'); // Ensure you use .mjs

  app.use('/api/auth', authRoutes.default);
  app.use('/api/products', productRoutes.default);
  app.use('/api/orders', orderRoutes.default);

  // Basic route
  app.get('/', (req, res) => res.send('API is running...'));

  // Start server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

// Call the start function and handle any errors
start().catch((error) => console.error(error));
