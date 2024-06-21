import mongoose from "mongoose";

const AnswerSheetSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    questionPaperId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "QuestionPaper",
        required: true
    },
    answers: [{
        type: String,
    }],
    checked: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const AnswerSheet = mongoose.model("AnswerSheet", AnswerSheetSchema);

export default AnswerSheet;