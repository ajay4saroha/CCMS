import { useState } from "react";
import toast from "react-hot-toast";


const useNewEnquiry = () => {
    const [loading, setLoading] = useState(false);

    const newEnquiry = async ({name, fatherName, mobile, parentMobile, qualification, address}) => {
        
        const success = handleSuccess({ name, fatherName, mobile, parentMobile, qualification, address });

        if (!success) return;

        const toastId = toast.loading("Submitting....");
        setLoading(true);
        try {

            const res = await fetch("/api/enquiry/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({name, fatherName, mobile, parentMobile,qualification, address})
            })

            const data = await res.json();
            if (data.error) throw new Error(data.error);

            toast.success("Successfully added", {
                id: toastId,
            })
            return true;

        } catch (error) {
            toast.error(error.message, {
                id: toastId,
            });
            return false;
        } finally {
            setLoading(false);
        }

    }



    return { loading, newEnquiry };
}

export default useNewEnquiry

const handleSuccess = ({name, fatherName, mobile, parentMobile, qualification, address}) => {
    if (name.length ===0 || fatherName.length === 0 || mobile.length ===0  || parentMobile.length === 0  || qualification.length === 0  || address.length === 0 ) {
        toast.error("Please provide all details",);
        return false;
    }
    
    if (mobile.length < 10 || parentMobile.length < 10) {
        toast.error("Please enter correct mobile number");
        return false;
    }
    return true;
}