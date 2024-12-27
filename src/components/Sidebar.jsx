// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaFilm, FaGamepad, FaUserAlt } from 'react-icons/fa'; // Example icons

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 p-4 space-y-4">
      <ul className="space-y-4">
        <li>
          <Link to="/" className="flex items-center space-x-2 hover:bg-blue-600 p-2 rounded">
            <FaHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/anime" className="flex items-center space-x-2 hover:bg-blue-600 p-2 rounded">
            <FaFilm />
            <span>Anime</span>
          </Link>
        </li>
        <li>
          <Link to="/movies" className="flex items-center space-x-2 hover:bg-blue-600 p-2 rounded">
            <FaFilm />
            <span>Movies</span>
          </Link>
        </li>
        <li>
          <Link to="/games" className="flex items-center space-x-2 hover:bg-blue-600 p-2 rounded">
            <FaGamepad />
            <span>Games</span>
          </Link>
        </li>
        <li>
          <Link to="/profile" className="flex items-center space-x-2 hover:bg-blue-600 p-2 rounded">
            <FaUserAlt />
            <span>Profile</span>
          </Link>
        </li>
      </ul>
      
      {/* Logout Button */}
      {/* <div className="absolute bottom-4 left-4 w-full">
        <button className="w-full bg-red-600 text-white p-2 rounded hover:bg-red-700">
          Logout
        </button>
      </div> */}
    </div>
  );
};

export default Sidebar;
