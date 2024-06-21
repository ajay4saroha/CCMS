import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength:6
    },
    role: {
        type: String,
        enum: ["teacher", "student", "admin"],
        default: "student",
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;