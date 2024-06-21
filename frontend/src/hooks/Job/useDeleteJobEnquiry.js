import toast from  "react-hot-toast";

const useDeleteJobEnquiry = () => {

    const deleteJobEnquiry =  async (jobEnquiryToDelete) => {

        const toastId = toast.loading("Deleting...");
        try {

            const res = await fetch("/api/job/delete",{
                method: "DELETE",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(jobEnquiryToDelete)
            })

            const data = await res.json();

            if(data.error) throw new Error(data.error);

            toast.success("Deleted Successfully",{
                id: toastId,
            });


        } catch (error) {
            toast.error(error.message,{
                id: toastId
            })
        }
    }

  return  {deleteJobEnquiry};
}

export default useDeleteJobEnquiry
