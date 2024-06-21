import { create } from 'zustand';

const useEnquiryStore = create((set) => ({
    enquiries: [],
    setEnquiries: (enquiries) => set({ enquiries }),

    jobEnquiries: [],
    setJobEnquiries: (jobEnquiries) => set({jobEnquiries}),
}));

export default useEnquiryStore;