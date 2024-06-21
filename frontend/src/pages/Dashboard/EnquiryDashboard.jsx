import { Stack, Group,TextInput ,NumberInput,NativeSelect,Textarea    } from "@mantine/core";
import { Flex, Avatar, Button,Popconfirm, Modal } from "antd";
import { UserOutlined} from "@ant-design/icons";

import { useState } from "react";

import SideBar from "../../components/Dashboards/SideBar";
import DashboardTable from "../../components/Dashboards/DashboardTable";

import useGetAllEnquiry from "../../hooks/Enquiries/useGetAllEnquiry";
import useDeleteEnquiry from "../../hooks/Enquiries/useDeleteEnquiry";
import useUpdateEnquiry from "../../hooks/Enquiries/useUpdateEnquiry";


import { useAuthContext } from "../../context/AuthContext";

const EnquiryDashboard = () => {

    const [modalOpen , setModalOpen] = useState(false);
    const [editingRecord, setEditingRecord] = useState(null);



    const { enquiries } = useGetAllEnquiry();
    const {deleteEnquiry} = useDeleteEnquiry();
    const {updateEnquiry} = useUpdateEnquiry();

    const {authUser} = useAuthContext();



    const handleDeleteEnquiry = async (record) => {
      const enquiryToDelete = record;
      await deleteEnquiry(enquiryToDelete);
    }

    const handleUpdateEnquiry = async () => {
      setModalOpen(false);
      const enquiryToUpdate = {
        _id: editingRecord._id,
        name: editingRecord.name,
        fatherName: editingRecord.FName,
        mobile: editingRecord.MNo,
        parentMobile: editingRecord.PMNo,
        qualification:editingRecord.qualification,
        address:editingRecord.address,
        status:editingRecord.status
      }
      await updateEnquiry(enquiryToUpdate);
    }


    const columns = [
      { title: 'Name', dataIndex: 'name', key: 'name', width: 300 },
      { title: "Father's Name", dataIndex: 'FName', key: 'FName', width: 300 },
      { title: 'Mobile No', dataIndex: 'MNo', key: 'MNo', width: 300  },
      { title: 'Parent Mobile No', dataIndex: 'PMNo', key: 'PMNo', width: 300  },
      { title: 'Qualification', dataIndex: 'qualification', key: 'qualification', width: 300  },
      { title: 'Address', dataIndex: 'address', key: 'address', width: 300  },
      { title: 'Status', dataIndex: 'status', key: 'status', width: 300  },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        width: 300 ,
        render: (record) => {
          return (
            <>
              <Button type="link" 
                size="large"
                onClick={() => {
                  setModalOpen(true);
                  setEditingRecord(record);
                }}
              >
                Update
              </Button>
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
    enquiries.forEach((enquiry,idx) => {
      data.push({
        key : idx,
        _id: enquiry._id,
        name:enquiry.name,
        FName:enquiry.fatherName,
        MNo:enquiry.mobile,
        PMNo:enquiry.parentMobile,
        qualification:enquiry.qualification,
        address: enquiry.address,
        status: enquiry.status
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
                <DashboardTable data={data} columns={columns} heading="Enquiries"/>
            </div>
            <Modal open={modalOpen} 
              title = {<h1 className="text-xl">Edit Record</h1>}
              okText="Save" 
              okButtonProps={{style: {backgroundColor: "green"}}}
              onCancel={() => {
                  setModalOpen(false) 
                  setEditingRecord(null);
                }}
              onOk={handleUpdateEnquiry}
              centered
              >
              <Stack>
                <TextInput
                  variant="filled"
                  label="Name"
                  placeholder="Name"
                  size="md"
                  value={editingRecord?.name}
                  onChange={(e) => setEditingRecord({...editingRecord, name: e.target.value})}
                />
                <TextInput
                  variant="filled"
                  label="Father's Name"
                  placeholder="Father's Name"
                  size="md"
                  value={editingRecord?.FName}
                  onChange={(e) => setEditingRecord({...editingRecord, FName: e.target.value})}
                />
                <NumberInput
                  variant="filled"
                  hideControls
                  label="Mobile Number"
                  placeholder="Mobile Number"
                  minLength={10}
                  maxLength={10}
                  size="md"
                  value={editingRecord?.MNo}
                  onChange={(e) => setEditingRecord({...editingRecord, MNo: e})}
                />
                <NumberInput
                  variant="filled"
                  hideControls
                  label="Parent's Mobile Number"
                  placeholder="Parent's Mobile Number"
                  minLength={10}
                  maxLength={10}
                  size="md"
                  value={editingRecord?.PMNo}
                  onChange={(e) => setEditingRecord({...editingRecord, PMNo: e})}
                />
                <NativeSelect 
                  variant="filled" 
                  label="Qualification"
                  size="md"
                  data={["8", "9", "10", "11", "12", "Graduate"]} 
                  value={editingRecord?.qualification}
                  onChange={(e) => setEditingRecord({...editingRecord, qualification: e.target.value})}
                />
                <Textarea
                  variant="filled"
                  radius="md"
                  label="Address"
                  placeholder="Address"
                  value={editingRecord?.address}
                  onChange={(e) => setEditingRecord({...editingRecord, address: e.target.value})}
                />
                <NativeSelect 
                  variant="filled" 
                  label="Status"
                  size="md"
                  data={ ["pending", "processing", "completed"]} 
                  value={editingRecord?.status}
                  onChange={(e) => setEditingRecord({...editingRecord, status: e.target.value})}
                />
              </Stack>
            </Modal>
        </Group>
      </>
  )
}

export default EnquiryDashboard;

