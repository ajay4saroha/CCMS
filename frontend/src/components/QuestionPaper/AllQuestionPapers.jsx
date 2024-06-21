import { MdDelete } from "react-icons/md";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";


import useAllExam from "../../zustand.store/useAllExam";
import useGetQuestionPapers from "../../hooks/useGetQuestionPapers"
import useGetAnswerSheetByUserId from "../../hooks/useGetAnswerSheetByUserId";
import useDeleteQuestionPaper from "../../hooks/useDeleteQuestionPaper";

const AllQuestionPapers = () => {


  const navigate = useNavigate();
  const { authUser } = useAuthContext();
  
  const {setSelectedQuestionPaper} = useAllExam();
  const { deleteQuestionPaper } = useDeleteQuestionPaper();
  const { questionPapers } = useGetQuestionPapers();

  const { answerSheets } = useGetAnswerSheetByUserId();


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
  
  return (
    <div className="max-w-[1440px] m-auto form-control items-center min-h-screen w-full p-8 gap-4">
      <h1 className="text-3xl font-bold py-6 px-4">Question Papers</h1>
      <div className="overflow-x-auto w-full">
        <table className="table text-xl" border={1}>
          {/* head */}
          <thead className="text-xl text-black">
            <tr>
              <td className="font-normal">Id</td>
              <th className="font-normal">Batch</th>
              <th className="font-normal">End Time</th>
              <th className="font-normal">Duration</th>
              <th className="font-normal">Exam Type</th>
              {authUser.role === "student" && 
                <th className="font-normal">Marks</th>
              }
            </tr>
          </thead>
          <tbody>
            {questionPapers.map((questionPaper) => {
              const currentTime = new Date();
              const isTeacher = authUser.role === "teacher"
              const isStudent = authUser.role === "student"
              const isAdmin = authUser.role === "admin"
              const isTeacherIdMatch = questionPaper.teacherId === authUser._id;
              const isCorrectBatch = questionPaper.forBatch === authUser.batch;
              const teacherVerified = isTeacher && isTeacherIdMatch;
              const studentVerified = isStudent && isCorrectBatch;
              const endTimeUTC = new Date(questionPaper.endTime);
              const endTimeLocal = endTimeUTC.toLocaleString();
              const isSubmitted = authUser?.attemptedExamId?.includes(questionPaper._id);
              const timesUp = currentTime > endTimeUTC;
              const sheet = answerSheets?.filter(answerSheet =>
                answerSheet.questionPaperId === questionPaper._id);

              const marksRecord = authUser?.marks?.filter(m => m.answerSheetId == sheet[0]?._id)
              const marks = marksRecord ? marksRecord[0]?.marks : "0";
          
              return ( (teacherVerified || studentVerified || isAdmin) &&
                <tr className="bg-base-200" key={questionPaper._id}>
                  <td>{questionPaper.questionPaperId}</td>
                  <td>{questionPaper.forBatch}</td>
                  <td>{endTimeLocal}</td>
                  <td>{questionPaper.duration} hrs</td>
                  <td>{questionPaper.examType}</td>
                  {isStudent && 
                    <td>{marks ? marks : (timesUp ? (isSubmitted ? "Not Checked" : "Absent") : (isSubmitted ? "Not Checked" : "Not Attempted"))}</td>
                  }
                  {studentVerified && <td>
                    <button className="btn btn-block btn-square btn-success disabled:bg-red-600 disabled"
                      onClick={isStudent ? () => handleStartTest(questionPaper) : () => handlePreview(questionPaper)}
                      disabled={isSubmitted || timesUp}
                    >
                      {isSubmitted ? "Submitted" : (timesUp ? "Time Passed" : "StartTest")}
                    </button>
                  </td>}
                  {(teacherVerified || isAdmin)&& <td>
                    <button className="btn btn-block btn-square btn-success "
                      onClick={() => handlePreview(questionPaper)}
                    >
                      Preview
                    </button>
                  </td>}
                  {teacherVerified && <td>
                    <button className="btn btn-block btn-square btn-warning"
                      onClick={() => handleAnswerSheets(questionPaper)}
                    >
                      Answer sheets
                    </button>
                  </td>}
                  {teacherVerified && <td>
                    <button className="btn btn-block btn-square btn-error"
                      onClick={() => handleDeleteQuestionPaper(questionPaper)}
                    >
                      <MdDelete size={20} />
                    </button>
                  </td>}
                </tr>
              )}
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllQuestionPapers


{/* <div className="w-28 my-10">              
<button className=" btn btn-success btn-square btn-block "
    onClick={() => navigate("/dashboard/users")}
>
  Go Back
</button>
</div> */}