import { Stack, Group,TextInput ,NumberInput,NativeSelect,Textarea    } from "@mantine/core";
import { Flex, Avatar, Button,Popconfirm, Modal } from "antd";
import { UserOutlined} from "@ant-design/icons";

import SideBar from "../../components/Dashboards/SideBar";
import DashboardTable from "../../components/Dashboards/DashboardTable";

import useGetJobEnquiry from "../../hooks/Job/useGetJobEnquiry";
import useDeleteJobEnquiry from "../../hooks/Job/useDeleteJobEnquiry";

import { useAuthContext } from "../../context/AuthContext";

const JobEnquiryDashboard = () => {

    const {jobEnquiries} = useGetJobEnquiry();
    const {deleteJobEnquiry} = useDeleteJobEnquiry();

    const {authUser} = useAuthContext();


    const handleOpenResume = async (resume) => {
        window.open(`http://localhost:5000/resume/${resume}`, "_blank");
    }


    const handleDeleteEnquiry = async (record) => {
      const jobEnquiryToDelete = record;
      await deleteJobEnquiry(jobEnquiryToDelete);
    }


    const columns = [
      { title: 'Name', dataIndex: 'name', key: 'name', width: 300 },
      { title: "Father's Name", dataIndex: 'FName', key: 'FName', width: 300 },
      { title: 'Qualification', dataIndex: 'qualification', key: 'qualification', width: 300  },
      { title: 'Experience', dataIndex: 'exp', key: 'exp', width: 300  },
      { title: 'Expertise', dataIndex: 'expertise', key: 'expertise', width: 300  },
      { title: 'Resume', 
       dataIndex: 'resume',
       key: 'resume', 
       width: 300,
       render: (resume) => {
            return (
                <>
                    <Button type="link" onClick={() => handleOpenResume(resume)}>
                        resume
                    </Button>
                </>
            )
       }
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        width: 300 ,
        render: (record) => {
          return (
            <>
              <Popconfirm
                placement="left"
                title="Are you sure to delete this task?"
                description="Delete the task"
                okText="Yes"
                cancelText="No"
                okButtonProps={{style:{backgroundColor:"red"}}}
                onConfirm={() => handleDeleteEnquiry(record)}
              >
                <Button type="link" size="large">Delete</Button>
              </Popconfirm>
            </>
          )
        },
      },
    ];

    const data = [];
    jobEnquiries?.forEach((enquiry,idx) => {
      data.push({
        key : idx,
        _id: enquiry._id,
        name:enquiry.name,
        FName:enquiry.fatherName,
        qualification:enquiry.qualification,
        exp:enquiry.experience,
        expertise: enquiry.expertise,
        resume: enquiry.resume,
      })
    });



  return (
      <>
        <Group
          justify="space-between"
          align="center"
          className="py-4 px-10 fixed top-0 left-0 w-full z-[999] shadow-xl"
        >
          <h1 className="text-3xl font-semibold">Hartron</h1>
          <Group>
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
                <DashboardTable data={data} columns={columns} heading="Job Enquiries"/>
            </div>

        </Group>
      </>
  )
}

export default JobEnquiryDashboard;

