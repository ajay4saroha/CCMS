import { useState } from "react"
import AddQuestions from "./AddQuestions";
import SidePreviewQuestionPaper from "./SidePreviewQuestionPaper";

const CreateQuestionPaper = () => {

  const [forBatch, setForBatch] = useState("morning");
  const [endTime, setEndTime] = useState();
  const [duration, setDuration] = useState("0");
  const [examType, setExamType] = useState("unit");
  const [questionPaperId, setQuestionPaperId] = useState();

  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState({
    type: "objective",
    questionText: "",
    options: []
  });

  const handleOptionChange = (idx, option) => { 
    const updateOptions = [...newQuestion.options];
    updateOptions[idx] = option;
    setNewQuestion({ ...newQuestion, options: updateOptions });
  }

  const handleAddOption = (e) => {
    e.preventDefault();
    const newOptions = [...newQuestion.options, ""]
    setNewQuestion({...newQuestion, options: newOptions});
  }

  const handleDeleteOption = (e, idx) => {
    e.preventDefault();
    const updatedOptions = [...newQuestion.options];
    updatedOptions.splice(idx, 1);
    setNewQuestion({ ...newQuestion, options: updatedOptions });
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();
    setQuestions([...questions, newQuestion]);
    setNewQuestion({ ...newQuestion, 
      questionText: "",
      options: []
    })
  }

  const handleClear = (e) => {
      e.preventDefault();
      setNewQuestion({ ...newQuestion, 
      type: "objective",
      questionText: "",
      options: []
    })
  }

  return (
    <div className="min-h-screen flex flex-col items-center p-4 gap-10">
      <h1 className="text-3xl  font-bold py-6 px-4">New Question Paper</h1>
      <form className="flex flex-col items-center justify-center min-w-96 gap-8">

        <div className="flex items-center justify-center gap-8 w-3/6">
          <div className="flex items-center justify-center w-full gap-4">
            <label className="label label-text text-xl">For Batch</label>
            <select className="dropdown input input-bordered text-xl"
              value={forBatch}
              onChange={(e) => setForBatch(e.target.value)}
            >
              <option>morning</option>
              <option>mid-morning</option>
              <option>noon</option>
              <option>afternoon</option>
              <option>evening</option>
              <option>late-evening</option>
            </select>
            
          </div>

          <div className="flex items-center justify-center w-full gap-4">
            <label className="label label-text text-xl">Exam Type</label>
            <select className="dropdown input input-bordered text-xl"
              value={examType}
              onChange={(e) => setExamType(e.target.value)}
            >
                <option>unit</option>
                <option>final</option>
              </select>
          </div>
          
        </div>

        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center justify-between w-full">
            <label className="label label-text text-xl">End Time</label>
            <input type="datetime-local"
              className="input input-bordered text-xl"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between w-full">
            <label className="label label-text text-xl">Duration</label>
            <input type="text"
              placeholder="duration (in hrs)"
              className="input input-bordered text-xl"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between w-full">
            <label className="label label-text text-xl">Question Paper Id</label>
            <input type="text"
              placeholder="Enter Paper Id"
              className="input input-bordered text-xl"
              value={questionPaperId}
              onChange={(e) => setQuestionPaperId(e.target.value)}
              required
            />
          </div>

        </div>

      </form>

      <div className="flex w-full">

        <AddQuestions
          newQuestion={newQuestion}
          setNewQuestion={setNewQuestion}
          handleAddOption={handleAddOption}
          handleOptionChange={handleOptionChange}
          handleAddQuestion={handleAddQuestion}
          handleDeleteOption={handleDeleteOption}
          handleClear={handleClear}
        />

        <SidePreviewQuestionPaper
          questions={questions}
          setQuestions={setQuestions}
          forBatch={forBatch}
          endTime={endTime}
          duration={duration}
          questionPaperId={questionPaperId}
          examType={examType}
        />

      </div>
    </div>
  )
}

export default CreateQuestionPaper
