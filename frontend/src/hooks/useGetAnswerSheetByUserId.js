import { useEffect ,useState } from "react"
import useAllExam from "../zustand.store/useAllExam"
import { toast } from 'react-hot-toast';
import { AuthContext, useAuthContext } from "../context/AuthContext";

const useGetAnswerSheetByUserId = () => {

    const [loading, setLoading] = useState(false);
    const { answerSheets, setAnswerSheets } = useAllExam();
    const {authUser} = useAuthContext()


    useEffect(() => {
        setAnswerSheets([])
        const getAnswerSheets = async () => {
            if (authUser.role === "student") {
                const toastId = toast.loading("Loading all Answer Sheets...");
                setLoading(true);
                try {
                const res = await fetch("/api/exam/getAnswerSheets/byUserId");
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
            } else {
                setAnswerSheets([]);
            }
        }
        
        getAnswerSheets();

    },[])

  
  return { loading, answerSheets};

}

export default useGetAnswerSheetByUserId;
