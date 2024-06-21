import User from "../models/User.model.js";

const isTeacher = async (req, res, next) => {
    try {
        const userId = req.user._id;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({error: 'User not found'});
        }

        if (user.role !== "teacher") {
            return res.status(404).json({ error: "You don't have access" });
        }

        next();

    } catch (error) {
        console.log("Error in Is Teacher Middleware", error.message);
        return res.status(500).json({error: "Internal Server Error"});
    }
}

export default isTeacher;