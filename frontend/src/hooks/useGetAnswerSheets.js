import { useEffect ,useState } from "react"
import useAllExam from "../zustand.store/useAllExam"
import { toast } from 'react-hot-toast';


const useGetAnswerSheet = () => {

    const [loading, setLoading] = useState(false);
    const { answerSheets, setAnswerSheets, selectedQuestionPaper } = useAllExam();

    const questionPaperId = selectedQuestionPaper?._id;

    useEffect(() => {
        setAnswerSheets([])
        const getAnswerSheets = async () => {
            const toastId = toast.loading("Loading all Answer Sheets...");
            setLoading(true);
            try {
                const res = await fetch("/api/exam/getAnswerSheets", {
                    method: "post",
                    headers: { "Content-type": "application/json" },
                    body: JSON.stringify({questionPaperId})
            });
            const data = await res.json();

            if (data.error) throw new Error(data.error);

            if (Array.isArray(data) && data.length <= 0) {
                return toast.error("No AnswerSheet", {
                id: toastId,
                duration: 2000
                });
            }
            setAnswerSheets(data);
            toast.success("loaded Successfully ", {
                id: toastId
            })

            } catch (error) {
            toast.error(error.message, {
                id: toastId
            });
            } finally {
            setLoading(false);
            }
        }

        getAnswerSheets();

    },[questionPaperId])

  
  return { loading, answerSheets};

}

export default useGetAnswerSheet;
