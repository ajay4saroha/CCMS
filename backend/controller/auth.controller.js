import bcryptjs from 'bcryptjs'
import User from "../models/User.model.js";
import Student from '../models/Student.model.js';
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";


export const signup = async (req, res) => {
    try {
        const { fullName, email, password, confirmPassword, role, batch , admissionNumber } = req.body;
        // signup other than student
        if (role !== "student") {
            if (password !== confirmPassword) {
                return res.status(404).json({error: "Password and Confirm Password doesn't match"});
            }
            const user = await User.findOne({ email });

            if (user) {
                return res.status(400).json({ error: "Account already exists" });
            } 
            
            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(password, salt);
            
            const newUser = new User({
                fullName,
                email,
                password: hashedPassword,
                role,
            }); 
            
            await newUser.save();

            return res.status(200).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                role: newUser.role
            });
        }

        if (role === "student") {
            
            const student = await Student.findOne({ admissionNumber });

            if (student) {
                return res.status(400).json({ error: "Account already exists" });
            } 

            const newStudent = new Student({
                studentName: fullName,
                admissionNumber,
                batch,
            })
            await newStudent.save();
    
            return res.status(200).json({
                _id: newStudent._id,
                fullName: newStudent.studentName,
                admissionNumber: newStudent.admissionNumber,
                role: role,
                batch: newStudent.batch,
                marks: newStudent.marks,
                attemptedExamId: newStudent.attemptedExamId,
            });
        }
    } catch (error) {
        console.error("Error in sign up controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const login = async (req, res) => { 
    try {
        const { email, password, admissionNumber, role} = req.body;

        if (role !== "student") {
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            const isPasswordCorrect = bcryptjs.compare(password, user.password);
    
            if (!isPasswordCorrect) {
              return res.status(404).json({ error: "Invalid Password" });
            }

            generateTokenAndSetCookie(user._id, res);

            return res.status(200).json({
                _id: user._id,
                fullName: user.fullName,
                email: user.email,
                role: user.role
            });
        }

        if (role === "student") {
            
            const student = await Student.findOne({ admissionNumber });

            if (!student) {
                return res.status(404).json({ error: "Student account not found" });
            } 

            generateTokenAndSetCookie(student._id, res);

            return res.status(200).json({
                _id: student._id,
                fullName: student.studentName,
                admissionNumber: student.admissionNumber,
                role: role,
                batch: student.batch,
                marks: student.marks,
                attemptedExamId: student.attemptedExamId,
            });
        }
        

    } catch (error) {
        console.error("Error in Login controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const logout = async (req, res) => { 
    try {
        res.cookie("computerCenter", "", { maxAge: 0 });
       return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in Login Controller", error.message);
       return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getStudents = async (req, res) => { 
    try {
        
        const students = await Student.find();

        if(students.length === 0) {
            return res.status(404).json({error: "No students found "});
        }

        return res.status(200).json(students);

    } catch (error) {
        console.log("Error in Get Students Controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


export const getTeachers = async (req, res) => { 
    try {
        const users = await User.find();

        if(users.length === 0) {
            return res.status(404).json({error: "No Teacher found "});
        }

        return res.status(200).json(users);

    } catch (error) {
        console.log("Error in Get Students Controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


export const deleteUser = async (req, res) => {

    try {
        const userToDelete = req.body;
    
        const Id = userToDelete._id;
    
        const deletedUser = await User.findByIdAndDelete(Id);
    
        if(!deletedUser) {
            return res.status(404).json({error: "Record Not Found"});
        }
    
        return res.status(200).json(deletedUser);
        
    } catch (error) {
        console.log("Error in Delete User Controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }

}

export const deleteStudent = async (req, res) => {
    
    try {
        const studentToDelete = req.body;
        const Id = studentToDelete._id;

        const deletedStudent = await Student.findByIdAndDelete(Id);
    
        if(!deletedStudent) {
            return res.status(404).json({error: "Record Not Found"});
        }
    
        return res.status(200).json(deletedStudent);        
    } catch (error) {
        console.log("Error in Delete Students Controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }


}