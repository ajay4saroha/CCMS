import toast from "react-hot-toast";
import { useEffect } from "react";
import useUserStore from "../../zustand.store/users.store";

const useGetTeachers = () => {

    const {teachers, setTeachers} = useUserStore();

    const getTeachers = async () => {

        const toastId = toast.loading("Loading students...");

        try {
            const res = await fetch("/api/auth/teachers");

            const data = await res.json();

            if (data.error) throw new Error(data.error);

            setTeachers(data);

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
        getTeachers();
    },[])



  return {teachers};
}

export default useGetTeachers