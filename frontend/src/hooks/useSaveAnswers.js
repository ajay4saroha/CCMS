import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSaveAnswers = () => {

  const [loading, setLoading] = useState();
  const { setAuthUser } = useAuthContext();

  const saveAnswer = async ({ questionPaperId, answers }) => {
    
    const toastId = toast.loading("Saving AnswerSheet...");
    setLoading(true)
    try {
      const res = await fetch("/api/exam/saveAnswerSheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ questionPaperId, answers })
      })

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setAuthUser(data);
      localStorage.setItem("cc-auth-user", JSON.stringify(data));

      toast.success("Saved Successfully", {
        id: toastId,
      })
    } catch (error) {
      toast.error(error.message, {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  }

  return { loading, saveAnswer };
}

export default useSaveAnswers;
