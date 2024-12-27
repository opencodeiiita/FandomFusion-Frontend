import React from 'react';
import { FaThumbsUp, FaComment, FaShare, FaFilm, FaGamepad, FaTv } from 'react-icons/fa';

const Feed = () => {
  // Sample posts data
  const posts = [
    {
      id: 1,
      username: 'JohnDoe123',
      title: 'The Grand Adventure',
      mediaType: 'Movie',
      description: 'An epic tale of heroism and bravery.',
      profilePic: 'https://cdn-icons-png.freepik.com/512/4209/4209019.png',
    },
    {
      id: 2,
      username: 'AnimeLover98',
      title: 'Journey to the Unknown',
      mediaType: 'Anime',
      description: 'A breathtaking anime filled with twists and turns.',
      profilePic: 'https://cdn-icons-png.freepik.com/512/4209/4209019.png',
      image: 'https://wallpapers.com/images/high/blue-boy-6klqmipm5nq8f6pu.webp',
    },
    {
      id: 3,
      username: 'GamerPro',
      title: 'Virtual Showdown',
      mediaType: 'Game',
      description: 'An intense game that will keep you on the edge of your seat.',
      profilePic: 'https://cdn-icons-png.freepik.com/512/4209/4209019.png',
    },
  ];

  // Map media types to corresponding icons
  const mediaTypeIcons = {
    Movie: <FaFilm className="text-green-500" />,
    Anime: <FaTv className="text-green-500" />,
    Game: <FaGamepad className="text-green-500" />,
  };

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white p-4 rounded-lg shadow-md mb-4 max-w-3xl mx-auto transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          {/* Profile Section */}
          <div className="flex items-center mb-4">
            <img
              src={post.profilePic}
              alt="Profile"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <span className="block font-semibold text-lg">{post.title}</span>
              <span className="text-sm text-gray-500">@{post.username}</span>
            </div>
          </div>

          {/* Media Type */}
          <div className="flex items-center text-sm text-green-500 font-medium mb-2">
            {mediaTypeIcons[post.mediaType]}
            <span className="ml-2">{post.mediaType}</span>
          </div>

          {/* Image Section (if present) */}
          {post.image && (
            <div className="mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}

          {/* Content Section */}
          <div className="mb-4">
            <p className="text-gray-700">{post.description}</p>
          </div>

          {/* Interaction Section (Like, Comment, Share) */}
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-500 transition duration-300">
              <FaThumbsUp />
              <span>Like</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-500 transition duration-300">
              <FaComment />
              <span>Comment</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-500 transition duration-300">
              <FaShare />
              <span>Share</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
