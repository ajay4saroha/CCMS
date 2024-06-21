import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    admissionNumber: {
        type: String,
        required: true,
        unique: true
    },
    batch: {
        type: String,
        required: true,
        enum : ["morning","mid-morning","noon","afternoon","evening","late-evening"]
    },
    marks: [{
        answerSheetId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "AnswerSheet"
        },
        marks: {
            type: String,
            default: null
        }
    }],
    attemptedExamId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionPaper",
        unique: true
    }],

}, { timestamps: true });


const Student = mongoose.model("Student", studentSchema);

export default Student;