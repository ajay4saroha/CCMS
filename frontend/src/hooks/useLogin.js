import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import toast from "react-hot-toast";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async ({email, password,admissionNumber, role}) => {
        const success = handleUserError({ email, password,admissionNumber,role});
        if (!success) return;

        setLoading(true);
        const toastId = toast.loading("Logging in...");
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password, admissionNumber, role})
            });
            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("cc-auth-user", JSON.stringify(data));

            setAuthUser(data);
            toast.success(`Welcome 👋, ${data.fullName}`, {
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
    return { loading, login };
}

export default useLogin


const handleUserError = ({email, password,admissionNumber, role}) => { 

    if (role !== "student") {
        if (!email || !password ) {
            toast.error("please fill all fields");
            return false;
        }
       
        if (password.length < 6) {
            toast.error("password must be at least 6 characters");
            return false;
        } 
    
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isValidEmail = emailRegex.test(email);
        if (!isValidEmail) {
            toast.error("email format is invalid");
            return false;
        }
    }else {
        if (!admissionNumber) {
            toast.error("please fill admissionNumber");
            return false;
        }
    }
    return true;
}