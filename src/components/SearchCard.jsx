import React from "react";

const SearchCard = ({ image, title, rating }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={title}
        className="sm:w-full sm:h-74 md:h-73 md: w-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/150";
        }}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-yellow-500 font-medium mt-2">⭐ {rating || "N/A"}</p>
      </div>
    </div>
  );
};

export default SearchCard;   