import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  console.log("Token:", token); // Log the token to verify its presence

  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
