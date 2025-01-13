import React, { useState } from "react";
import axios from "axios";
import SearchCard from "../components/SearchCard"; 

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getAuthToken = () => {
    return localStorage.getItem("authToken");
  };

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a valid search query.");
      return;
    }

    setIsLoading(true);
    setError("");
    setResults([]);

    const AUTH_TOKEN = getAuthToken();
    if (!AUTH_TOKEN) {
      setError("Unauthorized: Please log in to continue.");
      return;
    }
    
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/media/anime/search?q=${encodeURIComponent(query)}`,
        
        {
          headers: {
            Authorization: `Bearer ${AUTH_TOKEN}`, 
          },
        }
      );
      console.log(response)
      console.log(response.data.data)
       
      if (response.data && response.data.data && response.data.data.length > 0) {
        setResults(response.data.data);
      } else {
        setError("No results found.");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Unauthorized: Please check your credentials.");
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-7">
        {/* Search Bar */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for anime..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="w-full p-4 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Search
          </button>
        </div>

        {/* Loading Animation */}
        {isLoading && (
          <div className="flex justify-center items-center mt-6">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        )}

        {/* Error Message */}
        {error && !isLoading && (
          <p className="text-red-500 text-center mt-6">{error}</p>
        )}

        {/* Search Results */}
        {!isLoading && results.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 mt-6">
          {results.map((anime) => (
            <SearchCard
              key={anime.publicDbId}
              image={anime.imageUrl || "https://via.placeholder.com/150"}
              title={anime.title_english}
              rating={anime.score}
            />
          ))}
        </div>
        )}

        {!isLoading && !error && results.length === 0 && query && (
          <p className="text-gray-600 text-center mt-6">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
