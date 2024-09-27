const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register a new user
const registerUSer = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if the user already exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        // Respond with user data
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            message: 'User registered successfully',
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Authenticate user and get token
const authUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email });

        // Validate the user and password
        if (user && (await bcrypt.compare(password, user.password))) {
            // Generate a JWT token
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
                expiresIn: '30d',
            });

            // Respond with user data and token
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token,
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Authentication error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { registerUSer, authUser };
