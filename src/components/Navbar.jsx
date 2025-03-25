import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserGraduate, FaChalkboardTeacher, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("Select User Type");
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const userTypes = [
    { label: "Student", icon: <FaUserGraduate />, value: "/login" },
    { label: "Faculty", icon: <FaChalkboardTeacher />, value: "/faculty-login" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="relative w-full z-50 bg-green-800 text-white px-6 py-3 shadow-lg h-14 flex items-center">
      <div className="w-full flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-green-800 md:bg-transparent md:flex 
          md:items-center text-lg font-bold space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0 
          transition-all duration-300 ease-in-out ${menuOpen ? "block" : "hidden md:flex"}`}
        >
          <li>
            <a href="/" className="block py-2 border border-white rounded-md px-3 hover:border-green-500 hover:bg-green-700 transition">
              Home
            </a>
          </li>
          <li>
            <button onClick={() => navigate("/about")} className="block w-full text-left py-2 border border-white rounded-md px-3 hover:border-green-500 hover:bg-green-700 transition">
              About
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/contact")} className="block w-full text-left py-2 border border-white rounded-md px-3 hover:border-green-500 hover:bg-green-700 transition">
              Contact
            </button>
          </li>
        </ul>

        {/* User Type Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 px-5 py-2 bg-white text-gray-700 font-medium rounded-full border border-gray-300 shadow-md 
              hover:border-green-600 hover:shadow-lg focus:ring focus:ring-green-300 transition-all duration-200"
          >
            {selectedUser} <FaChevronDown className="text-gray-500 transition-transform duration-200 transform" />
          </button>

          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white text-gray-700 border border-gray-300 rounded-lg shadow-md divide-y">
              {userTypes.map((user) => (
                <li
                  key={user.value}
                  onClick={() => {
                    setSelectedUser(user.label);
                    navigate(user.value);
                    setDropdownOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-green-100 cursor-pointer transition"
                >
                  {user.icon} {user.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
