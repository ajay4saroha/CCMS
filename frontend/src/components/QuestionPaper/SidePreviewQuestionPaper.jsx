import { Fragment } from "react"
import { MdDelete } from "react-icons/md";
import useSaveQuestion from "../../hooks/useSaveQuestion";

const SidePreviewQuestionPaper = ({ questions , setQuestions , forBatch , endTime , duration, questionPaperId, examType}) => {

  const { loading, saveQuestions} = useSaveQuestion();

  const handleSaveQuestion = async (e) => {
    e.preventDefault();
    await saveQuestions({ questions, forBatch, endTime, duration, questionPaperId, examType});
  }

  const handleDeleteQuestion = (e, idx) => { 
      e.preventDefault();
      const updatedQuestions = questions.filter((_, index) => index !== idx);
      setQuestions(updatedQuestions);
  }

  return (
    <div className="form-control w-full items-center border mx-4 gap-2">
      <h1 className="text-3xl font-bold py-6 px-4">Question Paper Preview</h1>

      <div className="w-full px-8 form-control gap-2 ">
        {questions.map((q, idx) => (
          <Fragment key={idx}>
            {q.type === "subjective" && (
              <div className="form-control items-center w-full">
                <label className="flex items-center gap-4 label w-full justify-start">
                    <span className="label-text text-xl ">{idx + 1}.</span>
                    <span className="label-text text-xl ">{q.questionText}</span>
                        <button className="btn btn-sm btn-square btn-error"
                            onClick={(e) => handleDeleteQuestion(e, idx)}    
                        >
                        <MdDelete size={25} />
                    </button>      
                </label>
                <textarea className="textarea textarea-bordered w-full" placeholder="write your answer here" disabled/>
              </div>
            )}
            {q.type === "objective" && (
              <div className="flex flex-col items-center w-full">
                <div className="flex items-center gap-4 w-full">
                    <label>{idx + 1}.</label>
                    <label className="label flex gap-4">
                        <span className="label-text text-xl ">{q.questionText}</span>
                        <button className="btn btn-sm btn-square btn-error"
                            onClick={(e) => handleDeleteQuestion(e,idx)}    
                        >
                        <MdDelete size={25} />
                    </button>  
                    </label>
                </div>
                <ul className="flex item-center justify-evenly gap-4 w-full">
                  {q.options.map((opt, i) => ( 
                    <label className="label cursor-pointer flex gap-2" key={i}>
                      <input type="checkbox" className="checkbox checkbox-primary" disabled/>
                      <span className="label-text">{opt}</span>
                    </label>
                  ))}
                </ul>
              </div>
            )}
          </Fragment>
        ))}
      </div>
      <div className="w-20">              
        <button className=" btn btn-success btn-square btn-block "
          onClick={(e) => handleSaveQuestion(e)}
          disabled = {questions.length === 0}
        >
          {loading ? <span className="loading loading-spinner" /> : "Save"}
        </button>
      </div>
    </div>
  )}

export default SidePreviewQuestionPaper
