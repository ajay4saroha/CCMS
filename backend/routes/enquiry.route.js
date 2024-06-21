import express from 'express';

import isHR from '../middleware/isHR.js';
import protectRoute from '../middleware/protectedRoute.js';
import { newEnquiry, getAllEnquiries, deleteEnquiry, updateEnquiry } from '../controller/enquiry.controller.js';



const router = express.Router();

router.post("/add",newEnquiry);
router.get("/all",protectRoute, isHR, getAllEnquiries); 
router.delete("/delete",protectRoute, isHR, deleteEnquiry); 
router.post("/update",protectRoute, isHR, updateEnquiry); 



export default router;