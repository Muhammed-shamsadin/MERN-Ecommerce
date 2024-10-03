import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../store/slices/userSlice';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get the user, loading state, and error from the Redux store
  const { user, loading, error } = useSelector((state) => state.user);

  // Redirect logic based on whether the user is an admin or not
  useEffect(() => {
    if (!loading && user) {
      if (user.isAdmin) {
        navigate('/admin');  // Redirect to admin page if the user is admin
      } else {
        navigate('/');  // Redirect to home page if the user is not an admin
      }
    }
  }, [user, loading, navigate]);

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  return (
    <div>
      <LoginForm
        credentials={credentials}
        setCredentials={setCredentials}
        handleSubmit={handleSubmit}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default Login;
