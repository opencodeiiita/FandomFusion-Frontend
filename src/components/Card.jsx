
import React from "react";
import PropTypes from "prop-types";


const Card = ({
  type,
  title,
  subtitle,
  imageUrl,
  imdbRating,
  starRating,
  platformLogos = [],
}) => {
  return (
    <div className="relative group bg-secondary text-textPrimary rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl max-w-[260px]">
      {/* Main Image */}
      <div className="relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-80 object-fill group-hover:scale-110 transition duration-500"
        />

        {/* Title Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent text-white pb-8 pl-4 transition duration-500">
          <h3 className="text-md font-semibold drop-shadow-lg">{title}</h3>
          <p className="text-xs text-gray-300">{subtitle}</p>
        </div>

        {/* "See Reviews" Subheading */}
        <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-md cursor-pointer hover:bg-gray-700 transition duration-300">
          See Reviews
        </div>

        {/* Media-Specific Details */}
        {type === "game" && (
          <div className="absolute top-2 right-2 left-2 flex space-x-1">
            {platformLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Platform Logo"
                className="w-5 h-5"

              />
            ))}
          </div>
        )}

        {/* Movie Section */}
        {type === "movie" && (
          <div className="absolute top-2 left-6 bg-accent text-primary text-xs px-2 py-1 rounded-md">
            IMDb: {imdbRating}
          </div>
        )}

        {/* Anime Section */}
        {type === "anime" && (
          <div className="absolute top-2 left-6 bg-accent text-primary text-xs px-2 py-1 rounded-md">
            {starRating} ★
          </div>
        )}
      </div>

      {/* Buttons */}
      <div className="absolute bottom-2 w-full flex justify-between px-4">
        {/* Watch Now Button */}
        <button className="bg-buttonBg text-white text-xs px-2 py-1 rounded-lg flex items-center space-x-2 transform transition duration-300 hover:scale-110 hover:bg-buttonHover">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3h14c1.1 0 1.99.9 1.99 2L21 17c0 1.1-.89 2-1.99 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm0 14h14V5H5v12zm7-2h2v-2h-2v2z" />
          </svg>
          <span>Watch Now</span>
        </button>

        {/* Download Button */}
        <button className="bg-buttonBg text-white text-xs px-2 py-1 rounded-lg flex items-center space-x-2 transform transition duration-300 hover:scale-110 hover:bg-buttonHover">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8l-8 8-8-8" />
          </svg>
          <span>Download Now</span>

        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  imdbRating: PropTypes.number,
  starRating: PropTypes.number,
  platformLogos: PropTypes.array,
};

export default Card;
