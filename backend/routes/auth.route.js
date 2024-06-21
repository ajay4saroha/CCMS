import express from 'express';
import { login, signup, logout, getStudents,getTeachers, deleteUser,deleteStudent } from '../controller/auth.controller.js';
import protectRoute from '../middleware/protectedRoute.js';

const router = express.Router();

router.post('/signup', protectRoute, signup);
router.post('/login', login);
router.post('/logout', logout);

router.get('/students', getStudents);
router.get('/teachers', getTeachers);


router.delete("/delete/user", deleteUser);
router.delete("/delete/student", deleteStudent);

export default router;