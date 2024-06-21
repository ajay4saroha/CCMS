import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';
import Student from '../models/Student.model.js';

const protectRoute = async (req, res, next) => {

    try {
        const token = req.cookies.computerCenter;
        if (!token) {
            return res.status(403).json({ error: 'Unauthorized: No token provided' });
        }

        const decode = jwt.decode(token, process.env.JWT_SECRET_KEY);
        if (!decode) {
            return res.status(403).json({ error: 'Unauthorized: Invalid Token' });
        }

        const user = await User.findById(decode.userId).select("-password");
        const student = await Student.findById(decode.userId);
        if (!user && !student) { 
            return res.status(403).json({ error: 'No user found' });
        }

        if (user) {
            req.user = user;
        } else {
            req.user = student;
        }
        next();

    } catch (error) {
        console.error("Error in protectRoute", error.message);
        return res.status(500).json({error: "Internal Server Error"});
    }

};

export default protectRoute;