import React from 'react';
import PropTypes from 'prop-types';
import { Star, Gamepad, Film, Tv } from 'lucide-react';

// Media Type Icons using Lucide React Icons
const MediaTypeIcons = {
  game: Gamepad,
  movie: Film,
  anime: Tv,
};

const Card = ({
  type,
  title,
  subtitle,
  imageUrl,
  imdbRating,
  starRating,
  platformLogos,
  genres,
  releaseYear,
}) => {
  // Determine the appropriate media type icon
  const MediaTypeIcon = MediaTypeIcons[type] || Tv;

  return (
    <div className="group relative max-w-sm w-full mx-auto bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl border border-gray-200">
      {/* Media Type Badge - More Prominent */}
      <div className="absolute top-3 left-3 z-10">
        <div className="bg-primary/70 text-white p-2 rounded-lg shadow-md transform transition-transform duration-300 group-hover:scale-105">
          <MediaTypeIcon className="w-6 h-6 stroke-[1.5]" />
        </div>
      </div>

      {/* Main Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Media-Specific Overlays */}
        {type === 'game' && platformLogos && (
          <div className="absolute top-3 right-3 flex space-x-2">
            {platformLogos.map((logo, index) => (
              <img 
                key={index} 
                src={logo} 
                alt="Platform" 
                className="w-7 h-7 bg-white/70 rounded-full p-1"
              />
            ))}
          </div>
        )}

        {/* Ratings Overlay */}
        <div className="absolute bottom-3 right-3 flex items-center space-x-1">
          {type === 'movie' && imdbRating && (
            <div className="bg-blue-500 text-black px-3 py-1 rounded-md flex items-center font-bold">
              IMDb: {imdbRating}
            </div>
          )}
          {(type === 'anime' || type === 'game') && starRating && (
            <div className="bg-yellow-500 text-black px-3 py-1 rounded-md flex items-center font-bold">
              <Star className="w-5 h-5 mr-1 text-yellow-600 stroke-[1.5]" />
              {starRating}/10
            </div>
          )}
        </div>
      </div>

      {/* Card Details */}
      <div className="p-4 bg-gray-50">
        <div className="flex justify-between items-start">
          <div className="w-full">
            <h3 className="text-xl font-bold text-gray-800 truncate">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mt-1 truncate">
              {subtitle || genres?.join(' • ') || 'No additional info'}
            </p>
            {releaseYear && (
              <span className="text-xs text-gray-500 mt-1 block truncate">
                Released: {releaseYear}
              </span>
            )}
          </div>
        </div>

        {/* Add to Profile Button */}
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md transition duration-300 ease-in-out transform hover:bg-blue-600 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500">
          Add to Profile
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  type: PropTypes.oneOf(['game', 'movie', 'anime']).isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  imdbRating: PropTypes.number,
  starRating: PropTypes.number,
  platformLogos: PropTypes.arrayOf(PropTypes.string),
  genres: PropTypes.arrayOf(PropTypes.string),
  releaseYear: PropTypes.number,
};

Card.defaultProps = {
  subtitle: '',
  imdbRating: null,
  starRating: null,
  platformLogos: [],
  genres: [],
  releaseYear: null,
};

export default Card;