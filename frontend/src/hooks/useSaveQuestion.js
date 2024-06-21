import { useState } from "react"
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const useSaveQuestion = () => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    
    const saveQuestions = async ({questions, forBatch, endTime, duration, questionPaperId,examType}) => {

        const success = handleError({ questions, forBatch, endTime, duration, questionPaperId, examType});
        if (!success) return;

        const toastId = toast.loading("Saving New Exam...")
        setLoading(true);
        try {
            const res = await fetch('/api/exam/setNew', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({duration, endTime, forBatch, examType,questionPaperId, questions})
            })
            
            const data = await res.json();

            if (data.error) {
                throw new Error(data.error)
            }
            toast.success("Saved Successfully!", {
                id: toastId,
            })
            navigate("/dashboard/exam");

        } catch (error) {
            toast.error(error.message, {
                id : toastId
            });
        } finally {
            setLoading(false);
        }

    }

    return { loading, saveQuestions};
}

export default useSaveQuestion


const handleError = ({questions, forBatch, endTime, duration, questionPaperId,examType}) => {
    if (questions.length === 0) { 
        toast.error("No Question to save", {
           duration : 2000,
       });
        return false;
    }

    if (!forBatch || !endTime || !duration || !questionPaperId || !examType) {
        toast.error("Please provide all necessary details", {
            duration: 2000
        });
        return false;
    }

    const currentDate = new Date();
    const examEndTime = new Date(endTime)

    if (examEndTime < currentDate) {
        toast.error("Exam end time must be greater than current time", {
            duration: 2000
        });
        return false;
    }

    return true;
}