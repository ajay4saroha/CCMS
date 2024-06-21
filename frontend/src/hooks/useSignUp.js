import { useState } from "react";
import toast from "react-hot-toast"

const useSignUp = () => {
    
    const [loading, setLoading] = useState(false);

    const signup = async ({fullName, admissionNumber, email, password , confirmPassword, role, batch}) => {
        const success = handleUserError({ fullName, admissionNumber, email, password, confirmPassword, role, batch })
        if (!success) return

        setLoading(true);
        const toastId = toast.loading("Creating Account!! please wait...")
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify({fullName, email, password , confirmPassword, role, batch,admissionNumber})
            })

            const data = await res.json();

            if (data.error) {
                throw new Error(data.error);
            }

            toast.success(`Successfully Registered  ${data.fullName} as ${data.role}`, {
                id: toastId
            })

        } catch (error) {
            toast.error(error.message, {
                id: toastId,
            });
        } finally {
            setLoading(false);
        }
    }
 
    return { loading, signup };
}

export default useSignUp;


const handleUserError = ({fullName, email, password , confirmPassword, role, batch, admissionNumber,}) => { 

    if (!fullName || !role) {
        toast.error("Please fill in full name and select a role");
        return false;
    }

    if (role !== "student") {
        if (!email || !password || !confirmPassword) {
            toast.error("Please fill in all teacher-related fields");
            return false;
        }
        if (password !== confirmPassword) {
        toast.error("password and confirm password do not match");
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

    } else if (role === "student") {
        if (!admissionNumber || !batch) {
            toast.error("Please fill in all student-related fields");
            return false;
        }
    }

  
    return true;
}