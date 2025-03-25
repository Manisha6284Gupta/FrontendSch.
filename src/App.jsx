import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/header.jsx";
import Navbar from "./components/Navbar.jsx";
import MainContent from "./components/MainContent.jsx";
import Footer from "./components/Footer.jsx";
import FacultyMain from "./pages/faculty/FacultyMain.jsx";
import StudentMain from "./pages/student/StudentMain.jsx";
import StudentProfile from "./pages/student/StudentProfile.jsx";
import FacultyLogin from "./pages/faculty/FacultyLogin.jsx"; // ✅ Import FacultyLogin
import StudentLogin from "./pages/student/StudentLogin.jsx"; // ✅ Import StudentLogin

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/student-dashboard" element={<StudentMain />} /> 
            <Route path="/faculty-login" element={<FacultyLogin />} />  {/* ✅ Fixed */}
            <Route path="/profile" element={<StudentProfile />} />
            <Route path="/login" element={<StudentLogin />} />  {/* ✅ Fixed */}
            <Route path="/faculty-dashboard" element={<FacultyMain />} />
            <Route path="*" element={<Navigate to="/" />} />  {/* ✅ Fixed Redirect */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
