import { Stack, Group } from "@mantine/core";
import { Flex, Avatar, Button, Popconfirm } from "antd";
import { UserOutlined} from "@ant-design/icons";

import SideBar from '../../components/Dashboards/SideBar';
import DashboardTable from "../../components/Dashboards/DashboardTable";

import { useAuthContext } from "../../context/AuthContext";

import useGetQuestionPapers from "../../hooks/useGetQuestionPapers";
import useGetAnswerSheetByUserId from "../../hooks/useGetAnswerSheetByUserId";
import useDeleteQuestionPaper from "../../hooks/useDeleteQuestionPaper";
import useAllExam from "../../zustand.store/useAllExam";

import { useNavigate } from "react-router-dom";

import useLogout from "../../hooks/useLogout";

const Dashboard = () => {

  const navigate = useNavigate();

  const {authUser} = useAuthContext();
  const { questionPapers } = useGetQuestionPapers();

  const { answerSheets } = useGetAnswerSheetByUserId();

  const {setSelectedQuestionPaper} = useAllExam();
  const { deleteQuestionPaper } = useDeleteQuestionPaper();


  const handleStartTest = (questionPaper) => {
    setSelectedQuestionPaper(questionPaper);
    navigate("/exam/startTest");
  }

  const handlePreview = (questionPaper) => { 
    setSelectedQuestionPaper(questionPaper); 
    navigate("/exam/preview");
  }

  const handleAnswerSheets = (questionPaper) => { 
    setSelectedQuestionPaper(questionPaper);
    navigate("/exam/answerSheets")
  }

  const handleDeleteQuestionPaper = async (questionPaper) => { 
    const questionPaperId = questionPaper?._id;
    await deleteQuestionPaper({questionPaperId})
  }

  const { logout } = useLogout();
  const handleLogout = async () => {
      await logout();
  }

  const columns = [
    {title: 'Id', dataIndex: 'id', key: 'id', width: 300},
    {title: 'Batch', dataIndex: 'batch', key: 'batch', width: 300},
    {title: 'endTime', dataIndex: 'endTime', key: 'endTime', width: 300},
    {title: 'duration', dataIndex: 'duration', key: 'duration', width: 300},
    {title: 'examType', dataIndex: 'examType', key: 'examType', width: 300},
  ]

  authUser.role === "student" && columns.push(
    {title: 'Marks', dataIndex: 'marks', key: 'marks', width: 300}, 
  )

  columns.push(
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      width: 300 ,
      render: (record) => {
        return (
          <>
            {authUser.role === "teacher" && <Popconfirm
            placement="left"
            title= 'Are you sure to delete this task?'
            description='Delete the task'
            okText="Yes"
            cancelText="No"
            okButtonProps={{style:{backgroundColor: "red"}}}
            onConfirm={() => handleDeleteQuestionPaper(record.questionPaper)}
            >
              <Button type="link" size="large">Delete</Button>
            </Popconfirm>}
            {authUser.role === "student" && 
              <Button type="link" size="large"
                disabled = {record.isSubmitted || record.timesUp} 
                onClick={ () => handleStartTest(record.questionPaper)}             
              >
              {record.isSubmitted ? "Submitted" : (record.timesUp ? "Time Passed" : "StartTest")}
            </Button>}
            {authUser.role !== "student" && 
            <Button type="link" size="large"
              onClick={() => handlePreview(record.questionPaper)}
            >
              Preview
            </Button>}
            {authUser.role === "teacher" && 
            <Button type="link" size="large"
              onClick={() => handleAnswerSheets(record.questionPaper)}
            >
              Answer Sheets
            </Button>}
          </>
        )
      },
    },
  )

  const data = [];

  questionPapers?.forEach((questionPaper, idx) => {

    const isTeacher = authUser.role === "teacher"
    const isStudent = authUser.role === "student"
    const isAdmin = authUser.role === "admin"
    const isTeacherIdMatch = questionPaper.teacherId === authUser._id;
    const isCorrectBatch = questionPaper.forBatch === authUser.batch;
    const teacherVerified = isTeacher && isTeacherIdMatch;
    const studentVerified = isStudent && isCorrectBatch;

    const currentTime = new Date();
    const endTimeUTC = new Date(questionPaper.endTime);
    const endTimeLocal = endTimeUTC.toLocaleString();
    const timesUp = currentTime > endTimeUTC;

    const isSubmitted = authUser?.attemptedExamId?.includes(questionPaper._id);
    const sheet = answerSheets?.filter(answerSheet =>
      answerSheet.questionPaperId === questionPaper._id);

    const marksRecord = authUser?.marks?.filter(m => m.answerSheetId == sheet[0]?._id)
    const marks = marksRecord ? marksRecord[0]?.marks : "0";
    return ( (teacherVerified || studentVerified || isAdmin) &&
      data.push({
        key: idx,
        _id: questionPaper._id,
        id: questionPaper.questionPaperId,
        batch:questionPaper.forBatch,
        endTime:endTimeLocal,
        duration:questionPaper.duration + "hrs",
        examType:questionPaper.examType,
        marks: marks ? marks : (timesUp ? (isSubmitted ? "Not Checked" : "Absent") : (isSubmitted ? "Not Checked" : "Not Attempted")),
        questionPaper:questionPaper,
        isSubmitted:isSubmitted === undefined ? false : isSubmitted,
        timesUp:timesUp,
      })
    )
  })

  return (
    <>
      <Group
          justify="space-between"
          align="center"
          className="py-4 px-10 fixed top-0 left-0 w-full z-[999] shadow-xl"
      >
          <h1 className="text-3xl font-semibold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Hartron
          </h1>
          <Group align="center">
            <Group>
              {authUser.role === "teacher" && 
              <Button type="link" size="large"
                onClick={() => navigate("/exam/new")}
              >
                New
              </Button>}
              {authUser.role !== "admin" && 
              <Button type="link" size="large"
                onClick={handleLogout}
              >
                Logout
              </Button>}

            </Group>
            <Group>
              <Avatar size={44} icon={<UserOutlined />} />
              <Stack gap={0}>
              <h1>{authUser?.fullName}</h1>
              <h3>{authUser?.role !== "student" ? authUser.email : authUser.admissionNumber}</h3>
              </Stack>
            </Group>
          </Group>
      </Group>
      <Group className="max-w-[100vw] w-full pt-[82px]" justify="center" align="start" gap={0}> 
        {authUser.role === "admin" && <SideBar />}
        <div className={`${authUser.role === "admin" ? "w-[85%]" : "w-[95%]"}`}>
          <DashboardTable data={data} columns={columns} heading="Exam" />
        </div>
      </Group>
    </>
)}

export default Dashboard;

