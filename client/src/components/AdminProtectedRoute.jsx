import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminProtectedRoute = ({ children }) => {
  const { user, loading } = useSelector((state) => state.user);

  // If user is still loading, show a loading state
  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner
  }

  // If user is not logged in or not admin, redirect to login page
  if (!user || !user.isAdmin) {
    return <Navigate to="/login" />;
  }

  return children; // Allow access if user is an admin
};

export default AdminProtectedRoute;
