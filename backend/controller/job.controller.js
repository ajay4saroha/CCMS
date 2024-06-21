import JobEnquiry from "../models/JobEnquiry.model.js"
import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();

export const newJobEnquiry = async (req, res) => {
    try {
        const { name, fatherName, qualification, experience, expertise } = req.body;
  
        const resume = req.files['resume'][0];
        const image = req.files['image'][0];

        const jobEnquiry = new JobEnquiry({
            name,
            fatherName,
            qualification,
            experience,
            expertise,
            image:image.filename,
            resume: resume.filename
        })

        await jobEnquiry.save();

        return res.status(200).json(jobEnquiry);

    } catch (error) {
        console.log("Error in New Job Enquiry Controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


export const getJobEnquiries = async (req, res) => { 
    try {
        
        const enquiries = await JobEnquiry.find();
        
        if(enquiries.length === 0){
            return res.status(404).json({error: "No Job Enquiries"});
        }

        return res.status(200).json(enquiries);

    } catch (error) {
        console.log("Error in Get All Job Enquiry Controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


export const deleteJobEnquiry = async (req, res) => {
    try {
        const jobEnquiryToDelete = req.body;

        const Id = jobEnquiryToDelete._id;

        const deletedEnquiry = await JobEnquiry.findByIdAndDelete(Id);

        if(!deletedEnquiry) {
            return res.status(404).json({error: "Enquiry Not Found"});
        }

        const imageFilePath = path.join(__dirname,'backend', 'uploads', 'images',  deletedEnquiry.image);
        const pdfFilePath = path.join(__dirname, 'backend' ,'uploads', 'resumes', deletedEnquiry.resume);
        deleteFile(imageFilePath);
        deleteFile(pdfFilePath);

        return res.status(200).json(deletedEnquiry);


    } catch (error) {
        console.log("Error in Delete Job Enquiry Controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error('Error deleting file:', err);
        } else {
            console.log('File deleted successfully:', filePath);
        }
    });
}