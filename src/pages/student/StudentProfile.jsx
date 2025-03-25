import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const StudentProfile = () => {
  const [student, setStudent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudentData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/auth/student", {
          headers: { Authorization: token },
        });
        setStudent(response.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
        navigate("/login");
      }
    };

    fetchStudentData();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="text-xl font-bold">Student Dashboard</h1>
        <ul className="flex gap-4">
          <li><a href="/home" className="hover:underline">Home</a></li>
          <li><a href="/control-panel" className="hover:underline">Control Panel</a></li>
          <li><a href="/obe" className="hover:underline">OBE</a></li>
          <li><a href="/crn" className="hover:underline">CRN</a></li>
        </ul>
      </nav>

      {student ? (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
          <h2 className="text-2xl font-semibold">{student.name}</h2>
          <p className="text-gray-600">{student.email}</p>
          <p className="text-gray-600">Department: {student.department}</p>
          {student.otrImage && <img src={`http://localhost:5000/${student.otrImage}`} alt="OTR" className="mt-4 w-40 h-40 object-cover" />}
        </div>
      ) : (
        <p className="text-center mt-6">Loading profile...</p>
      )}
    </div>
  );
};

export default StudentProfile;
