import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ['objective', 'subjective'],
        required: true
    },
    questionText: {
        type: String,
        required: true
    },
    options: [{
        type: String
    }]
}, { _id: false });

const questionPaperSchema = new mongoose.Schema({
    duration: {
        type: Number,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    forBatch: {
        type: String,
        enum: ["morning","mid-morning","noon","afternoon","evening","late-evening"],
        required: true
    },
    examType: {
        type: String,
        default: "unit",
        enum: ["unit","final"],
    },
    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    questionPaperId: {
        type: String,
        unique: true,
        required: true
    },
    questions: [questionSchema]
}, { timestamps: true });

const QuestionPaper = mongoose.model("QuestionPaper", questionPaperSchema);

export default QuestionPaper;