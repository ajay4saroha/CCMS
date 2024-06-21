import { Fragment } from "react"
import useAllExam from "../../zustand.store/useAllExam";
import { useNavigate } from "react-router-dom";

import { Textarea } from '@mantine/core';

const PreviewQuestionPaper = () => {

    const navigate = useNavigate();
    const { selectedQuestionPaper } = useAllExam();

  return (
    <div className="max-w-[1440px]  mx-auto form-control w-full items-center gap-2 my-10">
      <h1 className="text-3xl font-bold py-6 px-4">Question Paper Preview</h1>

      <div className="w-full px-8 form-control gap-2 ">
        {selectedQuestionPaper?.questions.map((q, idx) => (
          <Fragment key={idx}>
            {q.type === "subjective" && (
              <div className="form-control items-center w-full">
                <label className="flex items-center gap-4 label w-full justify-start">
                    <span className="label-text text-xl ">{idx + 1}.</span>
                    <span className="label-text text-xl ">{q.questionText}</span>      
                </label>
                <Textarea
                  variant="filled"
                  size="md"
                  radius="md"
                  placeholder="Input placeholder"
                  className="w-full"
                />
              </div>
            )}
            {q.type === "objective" && (
              <div className="flex flex-col items-center w-full">
                <div className="flex items-center gap-4 w-full">
                    <label>{idx + 1}.</label>
                    <label className="label flex gap-4">
                        <span className="label-text text-xl ">{q.questionText}</span>
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
      <div className="w-28 my-10">              
        <button className=" btn btn-success btn-square btn-block "
            onClick={() => navigate("/dashboard/exam")}
        >
          Go Back
        </button>
      </div>
    </div>
  )}

export default PreviewQuestionPaper
