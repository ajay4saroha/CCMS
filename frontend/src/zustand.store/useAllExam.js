import { create } from 'zustand';

const useAllExam = create((set) => ({
    selectedQuestionPaper: JSON.parse(localStorage.getItem('selectedQuestionPaper')) || null,
    setSelectedQuestionPaper: (selectedQuestionPaper) => {
        set({ selectedQuestionPaper })
        localStorage.setItem('selectedQuestionPaper', JSON.stringify(selectedQuestionPaper));
    },

    clearSelectedQuestionPaper: () => {
        localStorage.removeItem('selectedQuestionPaper');
    },

    questionPapers: [],
    setQuestionPapers: (questionPapers) => set({ questionPapers }),


    selectedAnswerSheet : JSON.parse(localStorage.getItem('selectedAnswerSheet')) || null,
    setSelectedAnswerSheet: (selectedAnswerSheet) => {
        set({ selectedAnswerSheet })
        localStorage.setItem('selectedAnswerSheet', JSON.stringify(selectedAnswerSheet))
    },

    answerSheets: [],
    setAnswerSheets: (answerSheets) => set({ answerSheets }),
}));

export default useAllExam;