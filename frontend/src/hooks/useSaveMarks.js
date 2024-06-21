import { useState } from "react"
import toast from "react-hot-toast"

const useSaveMarks = () => {

    const [loading, setLoading] = useState(false)

    const saveMarks = async ({ marks, answerSheetId, studentId }) => {
        
        const toastId = toast.loading("Saving marks...")
        try {
            const res = await fetch("/api/exam/saveMarks", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({marks, answerSheetId, studentId})
            })

            const data = await res.json();

            if (data.error) throw new Error(data.error);

            toast.success("Saved successfully", {
                id: toastId,
            })
        } catch (error) {
            toast.error(error.message, {
                id: toastId
            })
        } finally { 
            setLoading(false);
        }
    }

    return { loading, saveMarks };
}

export default useSaveMarks
