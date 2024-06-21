import { CiCirclePlus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const AddQuestions = ({ newQuestion, setNewQuestion, handleAddOption, handleOptionChange,
                        handleAddQuestion, handleDeleteOption, handleClear }) => {
  return (
            <form className="form-control w-full items-center justify-center gap-8">
          <h1 className="text-3xl  font-bold py-6 px-4">Question Paper</h1>
          <div className="flex items-center justify-between w-full">
            <label className="label label-text text-xl">Question Type</label>
            <select className="dropdown input input-bordered text-xl"
              value={newQuestion.type}
              onChange={(e) => setNewQuestion({...newQuestion, type: e.target.value})}
            >
              <option>objective</option>
              <option>subjective</option>
            </select>
          </div>
          <div className="flex items-center justify-between w-full">
            <label className="label label-text text-xl w-full">Question Text</label>
            <textarea className="textarea textarea-bordered w-full"
              value={newQuestion.questionText}
              onChange={(e) => setNewQuestion({ ...newQuestion, questionText: e.target.value })}
              required
            />
          </div>
          {newQuestion.type === "objective" && (
            <div className={`flex ${newQuestion.options.length > 0 ? "flex-col" : ""} items-center justify-between w-full gap-4`}>
              <div className="flex items-center justify-between w-full">
                <label className="label label-text text-xl w-full">Options</label>
                  <div className="flex flex-col gap-4 " >
                    {newQuestion.options.map((option, idx) => (
                      <div className="flex items-center justify-center gap-4"  key={idx}>
                        <input type="text"
                          className="input input-bordered w-full"
                          value={option}
                          onChange={(e) => handleOptionChange(idx, e.target.value)}
                          required
                        />
                        <div className=" flex items-center justify-end btn-block">
                          <button className="hover:btn-error hover:text-black font-bold btn btn-square"
                            onClick={(e) => handleDeleteOption(e,idx)}
                          >
                            <MdDelete size={35}/>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
              </div>
              <div className=" flex items-center justify-end btn-block">
                <button className="hover:btn-success hover:text-black font-bold btn btn-square"
                  onClick={(e) => handleAddOption(e)}
                >
                  <CiCirclePlus size={35} />
                </button>
              </div>
            </div>
          )}

          <div className="flex items-center justify-center gap-8 ">
            <button className="btn btn-block btn-square btn-success"
              onClick={(e) => handleAddQuestion(e)}
            >
              Add
            </button>
            <button className="btn btn-block btn-square btn-error"
              onClick={(e) => handleClear(e)}
            >
              Clear
            </button>
          </div>
        </form>
  )
}

export default AddQuestions
