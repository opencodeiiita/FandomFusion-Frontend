// src/pages/Home.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import FriendSuggestions from '../components/FriendSuggestions';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Sidebar and Main Content Wrapper */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex flex-grow">
          {/* Feed (Stretches between sidebars) */}
          <div className="flex-1 p-4">
            <Feed />
          </div>

          {/* Right Sidebar (Friend Suggestions) */}
          <div className="w-64 p-4 bg-gray-100">
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
