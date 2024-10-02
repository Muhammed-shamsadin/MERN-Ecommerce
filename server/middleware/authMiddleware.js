import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Log decoded token to see if it has expired
        console.log('Decoded Token:', decoded);

        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        console.error('Token verification error:', error);
        res.status(401).json({ message: 'Not authorized, token failed' });
    }
};


const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(401).json({ message: 'Not authorized as an admin' });
    }
};

export { 
    protect, 
    admin,
 };
