import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faDownload, faThumbsUp, faStar, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const Card = ({type,title,year,genre,duration,description,movieURL,imageUrl,imdbRating}) => {
  return (
    <div>
      <div className="w-[760px] h-[390px] mx-auto my-12 flex max-w-[770px] text-white bg-gradient-to-r from-[#92FE9D] to-[#00C9FF] rounded-lg">
        <div className="w-[90%] p-6">
          <div>
            <h1 className="text-2xl font-bold mb-4">{title}</h1>
            <div className="flex justify-between items-center">
              <p className="bg-[#92FE9D] text-black font-bold px-4 py-2 rounded-full shadow-md transition-transform transform hover:scale-110">
                {type}
              </p>
              <p className="font-bold">{year}</p>
              <p className="font-bold">{genre}</p>
              <p className="font-bold">{duration}</p>
            </div>
            <p className="text-sm leading-relaxed mt-4">
              {description}
            </p>
            <a
              href={movieURL}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-cyan-700 underline mt-2"
            >
              Read More
            </a>
            <div className="flex gap-4 mt-6">
              <button className="bg-[#92FE9D] text-black px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-110">
              <FontAwesomeIcon icon={faPlay} className="mr-2" /> SEE TRAILER
              </button>
              <button className="bg-[#92FE9D] text-black px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-110">
              <FontAwesomeIcon icon={faDownload} className="mr-2" /> DOWNLOAD
              </button>
              <button className="bg-[#92FE9D] text-black px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-110">
              <FontAwesomeIcon icon={faThumbsUp} className="mr-2" /> {imdbRating}
              </button>
              <button className="bg-[#92FE9D] text-black px-6 py-3 rounded-lg shadow-lg transform transition-transform hover:scale-110">
              <FontAwesomeIcon icon={faStar} />
              </button>
            </div>
          </div>
        </div>
        <div className=" relative">
          <img
            className="h-[390px] rounded-r-lg"
            src={imageUrl}
          />
          <div className="absolute inset-0 bg-[rgba(0,244,170,0.4)] flex items-center justify-center shadow-md">
            <a
              href="https://www.imdb.com/title/tt4912910/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#255] text-[160px] hover:text-aqua">
                <FontAwesomeIcon icon={faPlayCircle} className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card