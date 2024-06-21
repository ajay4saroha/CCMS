import toast from "react-hot-toast"
import { useEffect } from "react"

import useEnquiryStore from "../../zustand.store/Enquiries.store"

const useGetJobEnquiry = () => {


    const {jobEnquiries,setJobEnquiries} = useEnquiryStore();

    const getJobEnquiries = async () => {

        const toastId = toast.loading("Loading Job Enquiries...")

        try {

            const res = await fetch("/api/job/all");

            const data = await res.json();

            if(data.error) throw new Error(data.error);

            setJobEnquiries(data);

            toast.success("Loaded Successfully...",{
                id: toastId,
                duration: 1000,
            })


        } catch (error) {
            toast.error(error.message,{
                id: toastId,
                duration: 1000,
            })
        }
    }


    useEffect(() => {
        getJobEnquiries();
    },[]);


  return {jobEnquiries};
}

export default useGetJobEnquiry
