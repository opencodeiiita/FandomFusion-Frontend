import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-100 py-8">
      <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row justify-between items-center">
        {/* Links Section */}
        <div className="mb-6 lg:mb-0">
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-8">
            <li>
              <Link
                to="/"
                className="hover:text-blue-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/landing"
                className="hover:text-blue-400 transition duration-300"
              >
                Landing Page
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-400 transition duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div className="text-sm text-center lg:text-right">
          © 2024 FandomFusion. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
