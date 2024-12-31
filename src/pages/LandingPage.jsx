import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/landing.jpg";

const Home = () => {
  const handleSmoothScroll = (event, id) => {
    event.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      {/* Header Section */}
      <header className="flex justify-between items-center px-8 py-4 bg-gray-800 fixed w-full z-50">
        < Link to="/" className="text-2xl font-bold text-blue-400">FandomFusion</Link>
        <nav className="flex space-x-6">
          <a
            href="#features"
            onClick={(e) => handleSmoothScroll(e, "#features")}
            className="hover:text-blue-400 transition"
          >
            Features
          </a>
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "#about")}
            className="hover:text-blue-400 transition"
          >
            About Us
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="hover:text-blue-400 transition"
          >
            Contact Us
          </a>
        </nav>
      </header>


      <section className="pt-24 bg-blue-500 text-gray-900">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-8 py-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-6">
              Unite Your Fandoms in One Place
            </h1>
            <p className="text-lg mb-8">
              Discover, connect, and share your love for movies, anime, and
              games like never before.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <Link
                to="/signup"
                className="bg-gray-900 text-blue-400 px-6 py-3 rounded-md font-bold hover:bg-gray-700 transition"
              >
                Sign Up
              </Link>
              <Link
              to="/Auth"

              className="bg-transparent border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-md font-bold hover:bg-gray-900 hover:text-gray-100 transition">
                Log In
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2  mt-8 lg:mt-0 pl-14">
            <img
              src={img}
              alt="Hero"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-36
      
       bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">
            {"Features You'll Love"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Track Your Favorites</h3>
              <p>
                Keep track of movies, anime, and games you love, all in one
                place.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Connect with Friends</h3>
              <p>
                Follow your friends and see what they’re watching or playing.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Discover New Titles</h3>
              <p>
                Explore recommendations and expand your collection of fandoms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* about us */}
      <section id="about" className="py-16 bg-blue-500 text-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            FandomFusion is the ultimate platform to unite all your favorite
            fandoms. Whether it’s movies, anime, or games, we make it easy to
            explore, share, and connect with others who share your interests.
          </p>
        </div>
      </section>

      {/* contact us */}
      <section id="contact" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <form className="max-w-lg mx-auto space-y-6">
            <div>
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-400 text-gray-900 py-3 rounded-md font-bold hover:bg-blue-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;