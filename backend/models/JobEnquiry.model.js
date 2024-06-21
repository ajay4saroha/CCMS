import  mongoose from "mongoose";

const jobEnquirySchema = new mongoose.Schema({
    name: {
        type: "String",
        required: true,
    },
    fatherName: {
        type: "String",
        required: true,
    },
    qualification: {
        type: "String",
        required: true,
    },
    experience: {
        type: "String",
        required: true,
    },
    expertise:{
        type: "String",
        required: true,
    },
    image: {
        type: "String",
        required: true,
    },
    resume: {
        type: "String",
        required: true,
    }
},{timestamps: true});

const JobEnquiry = mongoose.model("JobEnquiry", jobEnquirySchema);

export default JobEnquiry;