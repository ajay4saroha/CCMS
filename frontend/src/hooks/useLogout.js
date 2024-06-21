import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext"
import useAllExam from "../zustand.store/useAllExam";

const useLogout = () => {

    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const {setSelectedQuestionPaper} = useAllExam();

    const logout = async () => {

        setLoading(true);
        const toastId = toast.loading("Logging out...");
        
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            });
            
            const data  = await res.json();

            if (data.error) { 
                throw new Error(data.error);
            }

            localStorage.removeItem("cc-auth-user");
            localStorage.removeItem("selectedQuestionPaper")
            setAuthUser(null);
            setSelectedQuestionPaper(null)
            

            toast.success("User logged out successfully", {
                id: toastId
            });

        } catch (error) {
            toast.error(error.message, {
                id: toastId
            });
        } finally { 
            setLoading(false);
        }
    }
    
    return { loading, logout };
}

export default useLogout
