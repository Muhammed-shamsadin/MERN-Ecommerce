import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; 
import Login from './pages/Login';
import Register from './pages/Register';
import ProductList from './pages/ProductList'; 
import ProductDetailPage from './pages/ProductDetailPage'; 
import CartPage from './pages/CartPage'; 
import CheckoutPage from './pages/Checkout'; 
import ProtectedRoute from './components/ProtectedRoute';
// import AdminProtectedRoute from './components/AdminProtectedRoute';

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

            <Route path="/products/:id" element={
              <ProtectedRoute>
                <ProductDetailPage />
              </ProtectedRoute>
            } />
            <Route path="/cart" element={
              <ProtectedRoute>
                <CartPage />
              </ProtectedRoute>
            } />
            <Route path="/checkout" element={
              <ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>
            } />
            
            {/* Admin Protected Route */}
            {/* <Route path="/admin" element={ */}
              {/* // <AdminProtectedRoute> */}
                {/* The admin panel will be handled by AdminJS */}
                {/* No need for Navigate or extra component */}
                {/* <div>Redirecting to Admin Panel...</div> </AdminProtectedRoute> */}
              {/* </AdminProtectedRoute> */}
            {/* // } /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
