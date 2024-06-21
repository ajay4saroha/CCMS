import toast from "react-hot-toast";
import { useEffect } from "react";
import useUserStore from "../../zustand.store/users.store";

const useGetStudents = () => {

    const {students, setStudents} = useUserStore();

    const getStudents = async () => {

        const toastId = toast.loading("Loading students...");

        try {
            const res = await fetch("/api/auth/students");

            const data = await res.json();

            if (data.error) throw new Error(data.error);

            setStudents(data);

            toast.success("Successfully Loaded",{
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
        getStudents();
    },[])



  return {students};
}

export default useGetStudents
