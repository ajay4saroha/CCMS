import express from 'express';

import protectRoute from './../middleware/protectedRoute.js';
import isTeacher from '../middleware/isTeacher.js'
import { saveQuestionPaper, getAllQuestionPaper, saveAnswerSheet, getAnswerSheets, getAnswerSheetsByUserId, saveMarks, deleteQuestionPaper } from '../controller/exam.controller.js';

const router = express.Router();


router.post("/setNew", protectRoute, isTeacher, saveQuestionPaper);
router.get("/getAll", protectRoute,getAllQuestionPaper);
router.post("/saveAnswerSheet", protectRoute, saveAnswerSheet);
router.post("/getAnswerSheets", protectRoute, getAnswerSheets);
router.get("/getAnswerSheets/byUserId", protectRoute, getAnswerSheetsByUserId);
router.post("/saveMarks", protectRoute, saveMarks);
router.post("/deleteQuestionPaper", protectRoute, deleteQuestionPaper);

export default router;