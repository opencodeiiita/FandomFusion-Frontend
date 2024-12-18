
import React from "react";
import PropTypes from "prop-types";
import { FaStar, FaUserAlt, FaPlayCircle, FaEye, FaTag, FaThumbsUp, FaCommentDots } from "react-icons/fa"; // Importing icons
import Button from "./Button";


const Card = ({
  type,
  title,
  subtitle,

  tags,
  genres,

  imageUrl,
  imdbRating,
  starRating,
  platformLogos,
  views,
  players,
  votes,
  totalReviews,
  onActionClick,
}) => {
  return (
    <div>
      {/* Inject the keyframes CSS for the rotate effect */}
      <style>
        {`
          @keyframes rotate {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(1deg); }
            50% { transform: rotate(-1deg); }
            75% { transform: rotate(1deg); }
            100% { transform: rotate(0deg); }
          }

          .hover\\:animate-rotate:hover {
            animation: rotate 0.6s ease-in-out;
          }
        `}
      </style>

      <div
        className="relative bg-white rounded-lg overflow-hidden shadow-card transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-blue-400/50 group hover:animate-rotate"
        style={{ width: "320px", height: "550px" }} // Adjusted for new height
      >
        {/* Image Section */}
        <div className="relative w-full h-full">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Hover Overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 text-black opacity-0 group-hover:opacity-100 flex flex-col justify-between p-6 transition-opacity duration-500 ease-in-out"
            style={{
              background: `linear-gradient(to top, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3) 20%), rgba(255, 255, 255, 0.8)`,
            }}
          >
            {/* Media Information */}
            <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              {type === "movie" && imdbRating && (
                <p className="text-xs mb-2 flex items-center" style={{ fontSize: "1rem" }}>
                  <FaStar className="mr-2 text-lg" style={{ color: '#FFA500' }} /> IMDb: <span style={{ color: 'green', fontWeight: 'bold', marginLeft: '12px', fontSize: "1.2rem" }}>{imdbRating}%</span>
                </p>
              )}
              {type === "anime" && starRating && (
                <p className="text-xs mb-2 flex items-center" style={{ fontSize: "1rem" }}>
                  <FaStar className="mr-2 text-lg" style={{ color: '#FFA500' }} /> <span style={{ color: 'green', fontWeight: 'bold', marginLeft: '12px', fontSize: "1.2rem" }}>{starRating}%</span>
                </p>
              )}
              {type === "game" && platformLogos && (
                <div className="flex space-x-3 mb-3">
                  {platformLogos.map((logo, index) => (
                    <img
                      key={index}
                      src={logo}
                      alt="platform"
                      className="h-8 w-8"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Title and Subtitle */}
            <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <h2 className="text-lg font-bold mb-2 truncate">{title}</h2>
              <p className="text-sm mb-3 truncate">{subtitle}</p>
            </div>

            {/* Tags or Genres */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-3 text-xs text-gray-700 mb-4">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-2 bg-gray-200 rounded-md"
                  >
                    <FaTag className="mr-2 text-gray-500 text-sm" /> {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Additional Info: Votes, Views, and Total Reviews */}
            <div className="flex justify-between text-gray-700 text-xs mb-4">
              {views && (
                <span className="flex items-center">
                  <FaEye className="mr-2 text-lg text-blue-500" /> {views.toLocaleString()} Views
                </span>
              )}
              {votes && (
                <span className="flex items-center">
                  <FaThumbsUp className="mr-2 text-lg text-blue-500" /> {votes.toLocaleString()} Votes
                </span>
              )}
              {totalReviews && (
                <span className="flex items-center">
                  <FaCommentDots className="mr-2 text-lg text-blue-500" /> {totalReviews.toLocaleString()} Reviews
                </span>
              )}
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex gap-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <Button label="Add to Profile" />
              <Button label="Learn More" onClick={onActionClick} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};


// Prop Validation
Card.propTypes = {
  type: PropTypes.oneOf(["movie", "anime", "game"]).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string), // New: For tags or genres
  genres: PropTypes.arrayOf(PropTypes.string), // Optional additional genres
  imageUrl: PropTypes.string.isRequired,
  imdbRating: PropTypes.number,
  starRating: PropTypes.number,
  platformLogos: PropTypes.arrayOf(PropTypes.string),

  views: PropTypes.number,
  players: PropTypes.number,
  votes: PropTypes.number, // New: Votes section
  totalReviews: PropTypes.number, // New: Reviews count
  onActionClick: PropTypes.func,
};

export default Card;
