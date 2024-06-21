import toast from "react-hot-toast";

const useDeleteUser = () => {

    const deleteUser =  async (userToDelete) => {
        const toastId = toast.loading("Deleting User...");
        try {
            const res = await fetch('/api/auth/delete/user',{
                method: 'DELETE',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(userToDelete)
            })

            const data = await res.json();

            if(data.error) throw new Error(data.error);

            toast.success("User deleted successfully",{
                id: toastId,
            })

        } catch (error) {
            console.log(error.message);
            toast.error("Can't Delete User",{
                id: toastId,
            })
        }
    }

  return  {deleteUser};
}

export default useDeleteUser;
