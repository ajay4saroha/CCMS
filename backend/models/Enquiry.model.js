import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    parentMobile: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true,
        enum: ["8", "9", "10", "11", "12", "Graduate"],
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "processing", "completed"]
    }
}, { timestamps: true });

const Enquiry = mongoose.model("Enquiry", enquirySchema);

export default Enquiry;