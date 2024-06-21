import { useState } from "react"
import toast from "react-hot-toast";

const useDeleteQuestionPaper = () => {

    const [loading, setLoading] = useState(false);
    
    const deleteQuestionPaper = async ({ questionPaperId }) => {
        const toastId = toast.loading("deleting question paper...")
        try {
            const res = await fetch("/api/exam/deleteQuestionPaper", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ questionPaperId})
            })
            const data = await res.json();

            if (data.error) throw new Error(data.error);

            toast.success("Question Paper deleted successfully", {
                id: toastId,
            })
        } catch (error) {
            toast.error(error.message,{
                id: toastId,
            })
        } finally {
            setLoading(false);
        }
    }

    return { deleteQuestionPaper };
}

export default useDeleteQuestionPaper;
