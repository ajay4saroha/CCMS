import { useEffect, useState } from "react"
import useAllExam from "../zustand.store/useAllExam"
import { toast } from 'react-hot-toast';

const useGetQuestionPapers = () => {

  const [loading, setLoading] = useState(false);
  const { questionPapers, setQuestionPapers } = useAllExam();

  useEffect(() => {
    const allQuestionPapers = async () => {
      const toastId = toast.loading("Loading all QuestionPapers...");
      setLoading(true);
      try {
        const res = await fetch("/api/exam/getAll");
        const data = await res.json();

        if (data.error) throw new Error(data.error);

        if (Array.isArray(data) && data.length <= 0) {
          return toast.error("No QuestionPapers", {
            id: toastId,
            duration: 1000
          });
        }
        setQuestionPapers(data);
        toast.success("loaded Successfully ", {
          id: toastId,
          duration: 1000,
        })

      } catch (error) {
        toast.error(error.message, {
          id: toastId,
          duration: 1000,
        });
      } finally {
        setLoading(false);
      }
    }

    allQuestionPapers();
  }, [])
  
  return { loading, questionPapers };

}

export default useGetQuestionPapers
