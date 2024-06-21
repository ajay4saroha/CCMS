import './App.css'
import { Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from './context/AuthContext';
import { useEffect } from 'react';


import Home from './pages/home/Home'; 
import SignUp from './pages/signup/SignUp';
import Login from './pages/login/Login';

import CreateQuestionPaper from './components/QuestionPaper/createQuestionPaper';
import StartTest from './components/Exam/StartTest';

import PreviewQuestionPaper from './components/QuestionPaper/PreviewQuestionPaper';



import AllAnswerSheet from './components/Exam/AllAnswerSheet';
import CheckAnswerSheet from './components/Exam/CheckAnswersSheets';



import Dashboard from './pages/Dashboard/Dashboard';
import EnquiryDashboard from './pages/Dashboard/EnquiryDashboard';
import UserDashboard from './pages/Dashboard/UserDashboard';
import JobEnquiryDashboard from './pages/Dashboard/JobEnquiryDashboard';

import Navbar from './pages/home/Navbar/Navbar';


import AboutUs from './pages/AboutUs/AboutUs';
import Course from './pages/Courses/Course';
import Placement from './pages/Placement/Placement';
import OnlineClasses from './pages/OnlineClasses/OnlineClasses';
import Enquiry from './pages/Enquiry/Enquiry';
import JobEnquiry from './pages/Job/JobEnquiry';



function App() {

  const { authUser } = useAuthContext();
  const location = useLocation();

  useEffect(() => { 
    if (location.pathname === "/exam/startTest" || location.pathname === "/exam/preview" || location.pathname === "/exam/answerSheets" || location.pathname === "/exam/check/answerSheet")
    {
      return;
    } else {
      localStorage.removeItem("totalSeconds");
      localStorage.removeItem("selectedQuestionPaper");
      localStorage.removeItem("selectedAnswerSheet");
    }
  }, [location])
  

  return (
    <>
      {/* Toast Messages */}
      <Toaster position="top-left" reverseOrder={false}/>
      <Routes>

        {/* General Navbar Routes */}
        <Route path='/' element={authUser ? <Navigate to="/dashboard/exam" /> :<Home/>} />
        <Route path='/aboutUs' element={authUser ? <Navigate to="/dashboard/exam" /> : <AboutUs/>} />
        <Route path='/course' element={authUser ? <Navigate to="/dashboard/exam" /> : <Course/>} />
        <Route path='/placement' element={authUser ? <Navigate to="/dashboard/exam" /> : <Placement/>} />
        <Route path='/onlineClasses' element={authUser ? <Navigate to="/dashboard/exam" /> : <OnlineClasses/>} />
        <Route path='/enquiry' element={authUser ? <Navigate to="/dashboard/exam" /> : <Enquiry />} />
        <Route path='/jobEnquiry' element={authUser ? <Navigate to="/dashboard/exam" /> : <JobEnquiry />} />
        
        

        {/* Dashboard */}
        <Route path='/dashboard/users' element={authUser ? <UserDashboard /> : <Navigate to="/" />} />
        <Route path='/dashboard/enquiry'  
          element={authUser ? <EnquiryDashboard /> : <Navigate to="/" />} 
        />
        <Route path='/dashboard/jobEnquiry'  
          element={authUser ? <JobEnquiryDashboard /> : <Navigate to="/" />} 
        />
        <Route path='/dashboard/exam'  
          element={authUser ? <Dashboard /> : <Navigate to="/" />} 
        />
        
        {/* Exam Related */}
        <Route path='/exam'>
          <Route path='/exam/new' index
            element={authUser?.role === "teacher" ? <CreateQuestionPaper /> : <Navigate to="/login" />}
          />
          <Route path='/exam/startTest' index
            element={authUser?.role === "student"? <StartTest /> : <Navigate to="/login" />}
          />
          <Route path='/exam/preview' index
            element={authUser?.role !== "student"? <PreviewQuestionPaper /> : <Navigate to="/login" />}
          />
          <Route path='/exam/answerSheets' index
            element={authUser?.role === "teacher"? <AllAnswerSheet /> : <Navigate to="/login" />}
          />
          <Route path='/exam/check/answerSheet' index
            element={authUser?.role === "teacher"? <CheckAnswerSheet /> : <Navigate to="/login" />}
          />
        </Route>

        
        {/* SignUp and Login */}
        <Route path='/signup' element={authUser?.role === "admin" ? <SignUp /> : <Navigate to ="/" />} />
        <Route path='/login' element={authUser ? <Navigate to ="/dashboard/exam" /> : <Login />} />
      </Routes>
    </>
  )
}

export default App
