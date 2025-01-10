import { useState, useContext } from "react";
import { FaBars, FaUserCircle, FaUserAlt, FaSignOutAlt, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { AuthContext } from "../context/authContext"; // Import the AuthContext

const Header = ({ toggleSidebar }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useContext(AuthContext); // Access user and logout from context
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    navigate("/auth");
  };

  const handleSearchNavigate = () => {
    navigate("/search");
  };

  return (
    <header className="bg-blue-600 p-4 text-white flex items-center relative">
      {/* Sidebar Toggle Button */}
      <div className="md:hidden flex-none">
        <button aria-label="Toggle sidebar" onClick={toggleSidebar}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Header Title */}
      <h1 className="text-2xl font-bold text-center flex-grow">Fandom Fusion</h1>

      {/* Search Icon */}
      <button
        aria-label="Search"
        onClick={handleSearchNavigate}
        className="flex items-center space-x-2 mr-12"
      >
        <FaSearch size={24} />
      </button>

      {/* Profile Dropdown */}
      <div className="relative flex-none">
        <button
          onClick={toggleDropdown}
          aria-label="Open profile menu"
          className="flex items-center space-x-2"
        >
          <FaUserCircle size={24} />
        </button>

        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded-lg z-50"
            >
              <ul>
                <li className="flex items-center px-4 py-4 hover:bg-blue-500 hover:text-white cursor-pointer">
                  <FaUserAlt className="mr-4" size={16} />
                  {user ? user.username : "Profile"} {/* Display username or default */}
                </li>
                <li
                  className="flex items-center px-4 py-4 hover:bg-blue-500 hover:text-white cursor-pointer"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt className="mr-4" size={16} />
                  Logout
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
