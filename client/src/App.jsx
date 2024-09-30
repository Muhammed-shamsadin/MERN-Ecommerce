import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; // Adjust based on your folder structure
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList'; // Example for product listing
import ProductDetail from './pages/ProductDetail'; // Example for product details
import CartPage from './pages/CartPage'; // Import CartPage
// import CheckoutPage from './pages/Checkout'; // Import CheckoutPage

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} /> {/* Add Cart route */}
            {/* <Route path="/checkout" element={<Checkout />} /> Add Checkout route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
