import { useState } from "react"
import toast from "react-hot-toast"


const useNewJobEnquiry = () => {

    const [loading, setLoading] = useState(false);

    const jobEnquiry = async (formData) => {
        
        setLoading(true);
        const toastId = toast.loading("Loading...");
        try {

            const res = await fetch("/api/job/new",{
                method: "POST",
                body: formData
            })

            const data = await res.json();
            if(data.error) throw new Error(data.error);

            toast.success("Applied successfully",{
                id: toastId,
            })
            
        } catch (error) {
            toast.error(error.message,{
                id: toastId
            })
        }finally{
            setLoading(false);
        }
    }

  return {loading , jobEnquiry};
}

export default useNewJobEnquiry
