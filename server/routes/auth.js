const express = require('express');
const router = express.Router();
const { registerUSer, authUser } = require('../controllers/authController');

// Registration route
router.post('/register', registerUSer);

// Login route
router.post('/login', authUser);

module.exports = router;
