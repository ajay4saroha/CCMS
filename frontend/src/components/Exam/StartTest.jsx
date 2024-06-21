import { Fragment } from "react"
import React from "react";
import { useState, useEffect,} from "react";
import { useNavigate} from "react-router-dom";
import useAllExam from "../../zustand.store/useAllExam";
import useSaveAnswers from "../../hooks/useSaveAnswers";

const StartTest = () => {

  const navigate = useNavigate();
  const { selectedQuestionPaper, clearSelectedQuestionPaper } = useAllExam();
  const {loading, saveAnswer} = useSaveAnswers();
  const [answers, setAnswers] = useState([]);
  const questionPaperId = selectedQuestionPaper._id; 
  const duration = selectedQuestionPaper.duration;

  const handleAnswerChange = (idx, value) => {
    const newAnswer = [...answers];
    if (newAnswer[idx] === value) {
    newAnswer[idx] = ""; // Clear the selection
    } else {
    newAnswer[idx] = value;
    }
    setAnswers(newAnswer);
  }

  const handleSubmitAnswer = async () => { 

    await saveAnswer({ questionPaperId, answers });
    localStorage.removeItem("totalSeconds");
    localStorage.removeItem("selectedQuestionPaper")
    clearSelectedQuestionPaper();
    navigate("/")
  }


  // TIMER
  const [totalSeconds, setTotalSeconds] = useState(parseInt(localStorage.getItem('totalSeconds'),10) || duration * 60 * 60);
  const remainingSeconds = totalSeconds % 3600;
  const [hours, setHours] = useState(Math.floor(totalSeconds / 3600));
  const [minutes, setMinutes] = useState(Math.floor(remainingSeconds / 60))
  const [seconds, setSeconds ] = useState(Math.floor(remainingSeconds % 60))


  useEffect(() => { 

    const timer = setInterval(() => {
      if (seconds === 0 && minutes === 0 && hours === 0) {
        clearInterval(timer);
        return;
      }
      setSeconds((prev) => (prev > 0 ? prev - 1 : 59));
      setTotalSeconds((prev) => prev - 1);

      if (seconds === 0) {
        if (minutes > 0) {
          setMinutes((prev) => prev - 1);
        }

        if (minutes === 0 && hours > 0) {
          setHours((prev) => prev - 1);
          setMinutes(59);
        }
        setSeconds(59);
      }
    }, 1000)

    return () => {
      clearInterval(timer);

    };
  },[hours,minutes,seconds])
 
  useEffect(() => {
    if (selectedQuestionPaper) {
      if (totalSeconds >= 1) {
        localStorage.setItem('totalSeconds', totalSeconds.toString());
      }
      if (totalSeconds < 1) {
        localStorage.removeItem("totalSeconds")
      }
    }
  }, [totalSeconds]);


  useEffect(() => {
    document.addEventListener('copy', (e) => e.preventDefault());
    document.addEventListener('cut', (e) => e.preventDefault());
    document.addEventListener('paste', (e) => e.preventDefault());

    // Disable context menu
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    return () => {
      document.removeEventListener('copy',(e) => e.preventDefault());
      document.removeEventListener('cut',(e) => e.preventDefault());
      document.removeEventListener('paste', (e) => e.preventDefault());
      document.removeEventListener('contextmenu', (e) => e.preventDefault());
    }
  },[])

  return (
    <div className="max-w-[1440px] form-control items-center mx-auto my-10 gap-2">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold py-6 px-4">Question Paper</h1>
        {selectedQuestionPaper && (
          <div>
            Time remaining: {hours < 10 ? "0" + hours : hours}:{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}
          </div>
        )}
      </div>

      <div className="w-full px-8 form-control gap-2 ">
        {selectedQuestionPaper?.questions?.map((q, idx) => (
          <Fragment key={idx}>
            {q.type === "subjective" && (
              <div className="form-control items-center w-full">
                <label className="flex items-center gap-4 label w-full justify-start">
                  <span className="label-text text-xl ">
                    {idx + 1}.
                  </span>
                  <span className="label-text text-xl ">
                    {q.questionText}
                  </span>
                            
                </label>
                <textarea className="textarea textarea-bordered w-full"
                  placeholder="write your answer here (please press <spaceBar> for blank answer)"
                  value={answers[idx] || ""}
                  onChange={(e) => handleAnswerChange(idx, e.target.value)}
                />
              </div>
            )}
            {q.type === "objective" && (
              <div className="flex flex-col items-center w-full">
                <div className="flex items-center gap-4 w-full">
                  <label>{idx + 1}.</label>
                  <label className="label flex gap-4">
                    <span className="label-text text-xl ">
                      {q.questionText}
                    </span>
                  </label>
                </div>
                <ul className="flex item-center justify-evenly gap-4 w-full">
                  {q.options.map((opt, i) => (
                    <label className="label cursor-pointer flex gap-2" key={i}>
                      <input type="checkbox" className="checkbox checkbox-primary"
                        checked={answers[idx] === opt}
                        onChange={() => handleAnswerChange(idx, opt)}
                      />
                      <span className="label-text">{opt}</span>
                    </label>
                  ))}
                </ul>
              </div>
            )}
          </Fragment>
        ))}
      </div>
      {selectedQuestionPaper && (
        <div className="w-20 py-10">
          <button className=" btn btn-success btn-square btn-block "
            onClick={() => handleSubmitAnswer()}
          >
            {loading ? <span className="loading loading-spinner" /> : "Submit"}
          </button>
        </div>
      )}
      {!selectedQuestionPaper && (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold py-6 px-4">No Question Paper Selected</h1>
          <p className="text-2xl font-semibold ">Try Selecting Again</p>
          <div className="w-40 py-10">
            <button className=" btn btn-success btn-square btn-block "
              onClick={(e) => navigate("/exam/all")}
            >
              Back to All Exams
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default StartTest;

