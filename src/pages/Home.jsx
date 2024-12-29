import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import FriendSuggestions from "../components/FriendSuggestions";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} />

      {/* Sidebar and Main Content Wrapper */}
      <div className="flex flex-grow relative">
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ x: "-100%" }}  
              animate={{ x: 0 }}        
              exit={{ x: "-100%" }}      
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-16 left-0 z-50 w-64 bg-gray-800 text-white min-h-screen md:hidden"
            >
              <Sidebar />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Overlay for Mobile Sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Sidebar for Large Screens */}
        <div className="hidden md:block w-64 bg-gray-800 text-white min-h-screen">
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
