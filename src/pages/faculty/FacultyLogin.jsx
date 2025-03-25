import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const FacultyLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 🔥 Toggle Password Visibility

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ensure username contains only numbers
    if (name === "username" && !/^\d*$/.test(value)) {
      setError("Username should contain only numbers.");
      return;
    }

    setFormData({ ...formData, [name]: value });
    setError(""); // Clear error on valid input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setError("Please enter both username and password.");
      return;
    }

    // Simulated API Authentication (Replace with actual API request)
    const mockStudent = { username: "123456", password: "student@123" };

    if (formData.username !== mockStudent.username || formData.password !== mockStudent.password) {
      setError("Invalid username or password.");
      return;
    }

    console.log("Login Successful!");
    // Redirect user to Student Dashboard
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        {/* 🖼 Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/images/logo.png" // 🔄 Replace with your actual logo path
            alt="Logo"
            className="h-16 w-16"
          />
        </div>

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Student Login</h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Username (Numbers Only)</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300 outline-none"
              placeholder="Enter your student ID"
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"} // 👁 Toggle password visibility
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded focus:ring focus:ring-blue-300 outline-none pr-10"
              placeholder="Enter your password"
            />
            {/* 👁 Show/Hide Password Button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-9 text-gray-600 hover:text-gray-800"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white p-2 rounded font-semibold transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default FacultyLogin;
