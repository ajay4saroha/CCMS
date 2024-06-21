import useEnquiryStore from "../../zustand.store/Enquiries.store";

import {useState, useEffect} from "react"
import { toast } from 'react-hot-toast';


const useGetAllEnquiry = () => {

    const [loading, setLoading] = useState(false);
    const { enquiries, setEnquiries } = useEnquiryStore();


    useEffect(() => { 
        const getAllEnquiries = async () => {

            setLoading(true);
            const toastId = toast.loading("Loading Enquiries...");
            try {
                const res = await fetch("/api/enquiry/all");
                const data = await res.json();

                if (data.error) throw new Error(data.error);

                if (Array.isArray(data) && data.length <= 0) {
                    return toast.error("No Enquiry found", {
                        id: toastId,
                        duration: 1000
                    });
                }
                setEnquiries(data);
                toast.success("Enquiries loaded successfully", {
                    id: toastId,
                    duration: 1000,
                })
            } catch (error) {
                toast.error(error.message, {
                    id: toastId,
                    duration: 1000,
                })
            } finally { 
                setLoading(false);
            }
        }

        getAllEnquiries();
    }, []);



    return { loading, enquiries };
}

export default useGetAllEnquiry;