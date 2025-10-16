const jwt = require('jsonwebtoken');
const User = require('../models/User.js');

exports.protect = async (req, res, next) => {
    // Check the auth header for a bearer toekn 
    let token = req.headers.authorization?.split(" ")[1] ; 
    if (!token) return res.status(401).json({ message: "No authorized, no token"});

    try {
        // user verify() to decode and validate token again secret key stored in env
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // once verified, retrieve user from db and attach to req object. 
        req.user = await User.findById(decoded.id).select('-password');
        next()
    } catch (err) {
        res.status(401).json({ message: "Not authorized, token failed" })
    }
}