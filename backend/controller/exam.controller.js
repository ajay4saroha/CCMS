import QuestionPaper from "../models/QuestionPaper.model.js"
import AnswerSheet from "../models/AnswerSheet.model.js";
import Student from "../models/Student.model.js";
import User from "../models/User.model.js";


export const saveQuestionPaper = async (req, res) => {
    try {
        const { duration,endTime, forBatch, examType,questionPaperId ,questions  } = req.body;
        const teacherId = req.user._id;

        const questionPaper = await QuestionPaper.findOne({ questionPaperId });

        if (questionPaper) { 
            return res.status(403).json({ error: "Already exist a QuestionPaper with give Id!" });
        }
        
        const newQuestionPaper = new QuestionPaper({
            duration,
            endTime,
            forBatch,
            examType,
            teacherId,
            questionPaperId,
            questions
        });

        newQuestionPaper.save();

       return res.status(200).json(newQuestionPaper);

    } catch (error) {
        console.error("Error in Create new Exam Controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
} 


export const getAllQuestionPaper = async (req, res) => { 
    try {
        const questionPapers = await QuestionPaper.find();
        return res.status(200).json(questionPapers);
    } catch (error) {
        console.error("Error in getAllExams controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


export const deleteQuestionPaper = async (req, res) => { 
    try {
        const { questionPaperId } = req.body;
        const questionPaper = await QuestionPaper.findByIdAndDelete(questionPaperId);
        if (!questionPaper) {
            return res.status(404).json({ error: "No question paper found to delete" })
        } 
        return res.status(200).json(questionPaper);
    } catch (error) {
        console.error("Error in getAllExams controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}



export const saveAnswerSheet = async (req, res) => { 

    try {
        const { questionPaperId, answers } = req.body;
        const studentId = req.user._id;

        const student = await Student.findById(studentId);
        let newAnswerSheet;
        if (student) {
            newAnswerSheet = new AnswerSheet({
                studentId,
                questionPaperId,
                answers
            })
            student.attemptedExamId.push(questionPaperId);
            const marks = {
                answerSheetId: newAnswerSheet._id
            }
            student.marks.push(marks);
        }

        await Promise.all([student.save(), newAnswerSheet.save()]);

        return res.status(200).json({
            _id: student._id,
            fullName: student.studentName,
            admissionNumber: student.admissionNumber,
            role: "student",
            batch: student.batch,
            marks: student.marks,
            attemptedExamId: student.attemptedExamId,
        });
        
    } catch (error) {
        console.error("Error in saveAnswerSheet controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }

}


export const getAnswerSheets = async (req, res) => { 
    try {
        const { questionPaperId } = req.body;

        const answerSheet = await AnswerSheet.find({ questionPaperId: questionPaperId }).populate("studentId");

        if (!answerSheet) {
            return res.status(403).json({error: "No Answer Sheet"})
        } 

        return res.status(200).json(answerSheet);
    } catch (error) {
        console.error("Error in getAllExams controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}


export const getAnswerSheetsByUserId = async (req, res) => { 
    try {
        const userId = req.user._id;

        const answerSheet = await AnswerSheet.find({ studentId: userId });

        if (!answerSheet) {
            return res.status(403).json({error: "No Answer Sheet"})
        } 

        return res.status(200).json(answerSheet);
    } catch (error) {
        console.error("Error in getAllExams controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const saveMarks = async (req, res) => { 
    try {
        const { marks, answerSheetId,studentId } = req.body;
        
        const student = await Student.findByIdAndUpdate(studentId,
            {
                $set: {
                'marks.$[elem].marks': marks,
                },
            },
            {
                arrayFilters: [{ 'elem.answerSheetId': answerSheetId }],
                new: true,
            }
        )

        if (!student) {
            return res.status(403).json({error: "Student not found"})
        }

        const answerSheet = await AnswerSheet.findByIdAndUpdate(answerSheetId,{ $set: { checked: true } },
        { new: true })

        if (!answerSheet) { 
            return res.status(403).json({ error: "Answer Sheet not found" });
        }



        await Promise.all([student.save(), answerSheet.save()]);
        return res.status(200).json(answerSheet);

    } catch (error) {
        console.error("Error in saveMarks controller", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}