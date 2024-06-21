import { Stack, Group } from "@mantine/core";
import { Flex, Avatar, Button, Popconfirm } from "antd";
import { UserOutlined} from "@ant-design/icons";

import { useAuthContext } from "../../context/AuthContext";

import { useNavigate } from "react-router-dom";
import useGetAnswerSheet from "../../hooks/useGetAnswerSheets";
import useAllExam from "../../zustand.store/useAllExam";

import DashboardTable from "../Dashboards/DashboardTable";

const AllAnswerSheet = () => {

  const navigate = useNavigate();
  const {answerSheets} = useGetAnswerSheet();
  const {authUser} = useAuthContext();

  const { setSelectedAnswerSheet } = useAllExam();
  
  const handleCheckAnswerSheet = (answerSheet) => {
      setSelectedAnswerSheet(answerSheet);
      if (answerSheet.checked) { 
          navigate("/exam/answerSheets");
      } else {
          navigate("/exam/check/answerSheet");
      }
  }

  const columns = [
    {title: 'Student Name', dataIndex: 'name', key: 'SName', width: 300},
    {title: 'Batch', dataIndex: 'batch', key: 'batch', width: 300},
    {title: 'Marks', dataIndex: 'marks', key: 'marks', width: 300}, 
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      width: 300 ,
      render: (record) => {
        return (
          <>
            <Button type="link" size="large"
            onClick={() => handleCheckAnswerSheet(record.answerSheet)}
            disabled = {record.checked}
            >
              {record.checked ? "Checked" : "Answer Sheet"}
            </Button>
          </>
        )
      },
    },
  ]

  const data = [];
  answerSheets.forEach((answerSheet,idx) => {

    const name = answerSheet?.studentId?.studentName;
    const batch = answerSheet?.studentId?.batch;
    const marks = answerSheet?.studentId?.marks?.find((m) =>
    m.answerSheetId === answerSheet._id);


    return (
      data.push({
        key: idx,
        _id: answerSheet._id,
        name: name,
        batch: batch,
        marks: answerSheet.checked ? marks.marks : "Not Checked",
        checked: answerSheet.checked,
        answerSheet: answerSheet
      })
    )
  })


  return (
    <>
    <Group
        justify="space-between"
        align="center"
        className="py-4 px-10 bg-green-400 fixed top-0 left-0 w-full z-[999]"
    >
        <h1 className="text-3xl font-semibold">Hartron</h1>
        <Group align="center">
          <Group>
            <Avatar size={44} icon={<UserOutlined />} />
            <Stack gap={0}>
            <h1>{authUser?.fullName}</h1>
            <h3>{authUser?.role !== "student" ? authUser.email : authUser.admissionNumber}</h3>
            </Stack>
          </Group>
        </Group>
    </Group>
    <Group className="bg-blue-500 max-w-[100vw] w-full pt-[82px] h-screen" justify="center" align="start" gap={0}> 
      <div className="w-[95%]">
        <DashboardTable data={data} columns={columns}/>
      </div>
    </Group>
  </>

  )
}

export default AllAnswerSheet;

