import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (e) => {
    setQuery(e.target.value);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="p-6 bg-blue-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleSearch}
            className="w-full p-4 pl-12 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FiSearch className="text-blue-500 text-xl" />
          </div>
        </div>

        {/* No Query Entered */}
        {!query && !isLoading && (
          <p className="text-blue-600 text-center mt-4">
            Enter what you want to search.
          </p>
        )}

        {/* Loading Animation */}
        {isLoading && (
          <div className="flex justify-center items-center mt-4">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        )}

        {/* Sections */}
        {!isLoading && (
          <div className="mt-6 space-y-6">
            {/* Anime Section */}
            <div className="group p-4 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
              <h2 className="text-xl font-bold group-hover:text-white">
                {query ? "Animes" : "Top 5 Animes"}
              </h2>
              <p className="text-blue-600 group-hover:text-white">No Data Found</p>
            </div>

            
            <div className="group p-4 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
              <h2 className="text-xl font-bold group-hover:text-white">
                {query ? "Movies" : "Top 5 Movies"}
              </h2>
              <p className="text-blue-600 group-hover:text-white">No Data Found</p>
            </div>

            
            <div className="group p-4 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
              <h2 className="text-xl font-bold group-hover:text-white">
                {query ? "Games" : "Top 5 Games"}
              </h2>
              <p className="text-blue-600 group-hover:text-white">No Data Found</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
