import { create } from 'zustand';

const useUserStore = create((set) => ({
    students: [],
    setStudents: (students) => set({ students }),

    teachers: [],
    setTeachers: (teachers) => set({teachers}),
}));

export default useUserStore;