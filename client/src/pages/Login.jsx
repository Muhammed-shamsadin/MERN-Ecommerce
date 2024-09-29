import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/slices/userSlice';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

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
