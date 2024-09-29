import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../store/slices/userSlice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(userData));
  };

  return (
    <div>
        <RegisterForm
          userData={userData}
          setUserData={setUserData}
          handleSubmit={handleSubmit}
          loading={loading}
          error={error}
        />
    </div>
  );
};

export default Register;
