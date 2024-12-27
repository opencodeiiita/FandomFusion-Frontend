import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import FriendSuggestions from "../components/FriendSuggestions";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); 

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} />

      {/* Sidebar and Main Content Wrapper */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } w-64 bg-gray-800 text-white min-h-screen md:block`}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex flex-grow">
          {/* Feed (Stretches between sidebars) */}
          <div className="flex-1 p-4">
            <Feed />
          </div>

          {/* Right Sidebar (Friend Suggestions) */}
          <div className="w-64 p-4 bg-gray-100 hidden lg:block">
            <FriendSuggestions />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
