import User from "../models/User.model.js"

const isHR = async (req, res, next) => {
    try {
        const userId = req.user._id;
    
        const user = await User.findById(userId);
        if (!user) {
           return res.status(404).json({ error: 'User not found' });
        }
        if (user.role !== "admin") {
            return res.status(404).json({ error: "You don't have access" });
        }
        next();

    } catch (error) {
        console.log("Error in isHR Middleware", error.message);
       return res.status(404).json({ error:"Internal Server Error" });
    }
}

export default isHR;