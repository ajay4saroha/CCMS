import { Flex, Avatar, } from "antd";
import { Stack, Group,Button } from "@mantine/core";

import { UserOutlined, ReconciliationOutlined, AlertOutlined, FileTextOutlined,LogoutOutlined } from "@ant-design/icons";

import { useAuthContext } from "../../context/AuthContext";

import useLogout from "../../hooks/useLogout";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {

    const navigate = useNavigate();
    const {authUser} = useAuthContext();
    const { logout } = useLogout();


    const handleLogout = async () => {
        await logout();
    }

  return (
    <>
        <Stack className="bg-blue-500 w-[15%] h-[calc(100vh-82px)] px-4 py-8 sticky left-0 top-[82px]  shadow-xl">
            <Group className="cursor-pointer"  onClick={() => navigate("/dashboard/exam")}> 
                <h1 className="text-2xl">
                    Dashboard
                </h1>
            </Group>

            {authUser.role === "admin" && 
                <Group align="center" className="cursor-pointer"
                    onClick={() => navigate("/dashboard/users")}
                >
                <UserOutlined />
                <h1 className="text-xl">
                    Users
                </h1>
            </Group>}

            {authUser.role === "admin" && 
            <Group  align="center" className="cursor-pointer"
              onClick={() => navigate("/dashboard/enquiry")}>
                <ReconciliationOutlined />
                <h1 className="text-xl">Enquiry</h1>
            </Group>}

            {authUser.role === "admin" &&
             <Group  align="center" className="cursor-pointer"  
                onClick={() => navigate("/dashboard/jobEnquiry")}>
                <AlertOutlined />
                <h1 className="text-xl">Job Enquiry</h1>
            </Group>}

            <Group  align="center" className="cursor-pointer"  onClick={() => navigate("/dashboard/exam")}>
                <FileTextOutlined />
                <h1 className="text-xl">Exam</h1>
            </Group>

            <Group className="mt-auto cursor-pointer"  align="center"  onClick={handleLogout}>
                <LogoutOutlined />
                <h1 className="text-xl">Logout</h1>
            </Group>
        </Stack>
    </>
  );
}

export default SideBar
