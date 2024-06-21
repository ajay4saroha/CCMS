import { Stack, Group } from "@mantine/core";
import { Flex, Avatar, Button, Popconfirm } from "antd";
import { UserOutlined} from "@ant-design/icons";


import DashboardTable from "../../components/Dashboards/DashboardTable";
import SideBar from "../../components/Dashboards/SideBar";


import useGetStudents from "../../hooks/user/useGetStudents";
import useGetTeachers from "../../hooks/user/useGetTeachers";

import useDeleteStudent from "../../hooks/user/useDeleteStudent";
import useDeleteUser from "../../hooks/user/useDeleteUser";

import { useAuthContext } from "../../context/AuthContext";

const UserDashboard = () => {

  const {authUser} = useAuthContext();

  const {students} = useGetStudents();
  const {teachers} = useGetTeachers();

  const {deleteUser} = useDeleteUser();
  const {deleteStudent} = useDeleteStudent();

  const handleDeleteStudent = async (record) => {
    const studentToDelete =  record;
    await deleteStudent(studentToDelete);
  }
  const handleDeleteUser = async (record) => {
    const userToDelete = record;
    await deleteUser(userToDelete);
  }

  const studentColumns = [
      { title: 'Admission No.', dataIndex: 'adm', key: 'adm', width: 300 },
      { title: 'Name', dataIndex: 'name', key: 'name', width: 300 },
      { title: 'Batch', dataIndex: 'batch', key: 'batch', width: 300  },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        width: 300 ,
        render: (record) => {
          return (
            <Popconfirm
            placement="left"
            title= 'Are you sure to delete this task?'
            description='Delete the task'
            okText="Yes"
            cancelText="No"
            okButtonProps={{style:{backgroundColor: "red"}}}
            onConfirm={() => handleDeleteStudent(record)}
          >
            <Button type="link" size="large">Delete</Button>
          </Popconfirm>
          )
        },
      },
    ];

    const studentData = [];

    students.forEach((student,idx) => {
      studentData.push({
        key: idx,
        _id: student._id,
        name: student.studentName,
        adm: student.admissionNumber,
        batch: student.batch
      })
    });


    const teacherColumns = [
      { title: 'Name', dataIndex: 'name', key: 'name', width: 300 },
      { title: 'E-mail', dataIndex: 'email', key: 'email', width: 300 },
      { title: 'Designation', dataIndex: 'des', key: 'des', width: 300  },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        width: 300 ,
        render: (record) => {
          return (
            <Popconfirm
            placement="left"
            title= 'Are you sure to delete this task?'
            description='Delete the task'
            okText="Yes"
            cancelText="No"
            okButtonProps={{style:{backgroundColor: "red"}}}
            onConfirm={() => handleDeleteUser(record)}
          >
            <Button type="link" size="large">Delete</Button>
          </Popconfirm>
          )
        },
      },
    ];

    const teacherData = [];

    teachers.forEach((teacher, index) => {
      teacherData.push({
        key: index,
        _id: teacher._id,
        name: teacher.fullName,
        email: teacher.email,
        des: teacher.role,
      })
    })

  return (
    <>
        <Group
          justify="space-between"
          align="center"
          className="py-4 px-10 fixed top-0 left-0 w-full z-[999] shadow-xl"
        >
          <h1 className="text-3xl font-semibold">Hartron</h1>
          <Group>
            <Button type="link" size="large" href="/signup">Register</Button>
            <Avatar size={44} icon={<UserOutlined />} />
            <Stack gap={0}>
              <h1>{authUser.fullName}</h1>
              <h3>{authUser?.role !== "student" ? authUser.email : authUser.admissionNumber}</h3>
            </Stack>
          </Group>
        </Group>
        <Group className="max-w-[100vw] w-full pt-[82px]" justify="center" align="start" gap={0}> 
            <SideBar />
            <div className="w-[85%]">
                <DashboardTable data={studentData} columns={studentColumns} heading="Student"/>
                <DashboardTable data={teacherData} columns={teacherColumns} heading="Admin & Teacher"/>
            </div>
        </Group>
    </>
  )
}

export default UserDashboard
