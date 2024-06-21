import { useState } from "react"
import { toast } from 'react-hot-toast';

const useDeleteEnquiry = () => {
    const [loading, setLoading] = useState(false);

    const deleteEnquiry = async (enquiryToDelete) => {

        setLoading(true);
        const toastId = toast.loading("Deleting Enquiry....")
        try {

            const res = await fetch("/api/enquiry/delete",{
                method: "DELETE",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(enquiryToDelete)
            })

            const data = await res.json();
            if(data.error) throw new Error(data.error);

            toast.success("Deleted Successfully",{
                id: toastId,
            });

        } catch (error) {
            toast.error(error.message,{
                id: toastId,
            });
        }finally{
            setLoading(false);
        }
    }

  return {loading,deleteEnquiry};
}

export default useDeleteEnquiry;
