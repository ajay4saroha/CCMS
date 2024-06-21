import express from 'express';
import multer from "multer"

import path from 'path';

import { newJobEnquiry, getJobEnquiries, deleteJobEnquiry } from '../controller/job.controller.js';

const router = express.Router();

const __dirname = path.resolve();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if (file.fieldname === 'resume') {
        cb(null,path.join(__dirname, 'backend', 'uploads', 'resumes'));
      } else if (file.fieldname === 'image') {
        cb(null, path.join(__dirname, 'backend' ,'uploads', 'images'));
      }
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });



router.post("/new", upload.fields([{ name: 'resume', maxCount: 1 }, { name: 'image', maxCount: 1 }]), newJobEnquiry);


router.get("/all", getJobEnquiries);
router.delete("/delete", deleteJobEnquiry);


export default router;