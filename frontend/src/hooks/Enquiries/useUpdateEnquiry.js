import { useState } from "react"
import toast from "react-hot-toast"


const useUpdateEnquiry = () => {

    const [loading, setLoading] = useState(false);

    const updateEnquiry = async (enquiryToUpdate) => {
        setLoading(true);
        const toastId = toast.loading("Updating...");
        try {
            const res = await fetch("/api/enquiry/update",{
                method: "POST",
                headers: { "Content-Type" : "application/json"},
                body: JSON.stringify(enquiryToUpdate)
            })

            const data = await res.json();
            if (data.error) throw new Error(data.error);

            toast.success("Updated Successfully",{
                id: toastId,
            })

        } catch (error) {
            toast.error(error.message,{
                id: toastId,
            })
        }finally {
            setLoading(false);
        }
    }
  return  {loading, updateEnquiry};
}

export default useUpdateEnquiry
