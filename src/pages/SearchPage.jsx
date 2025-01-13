import React, { useState } from 'react';
import { Search, Grid, List } from 'lucide-react';
import SearchResults from '../components/SearchResults';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [isGridView, setIsGridView] = useState(true);
  const [searchResults, setSearchResults] = useState({ books: [], movies: [], games: [] });
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsLoading(true);

    try {
      // In a real application, replace this with actual API calls
      const mockResults = {
        books: [
          { id: 'b1', title: 'The Great Gatsby', image: '/placeholder.svg?height=200&width=150', rating: 4.5, type: 'book' },
          { id: 'b2', title: 'To Kill a Mockingbird', image: '/placeholder.svg?height=200&width=150', rating: 4.8, type: 'book' },
        ],
        movies: [
          { id: 'm1', title: 'The Shawshank Redemption', image: '/placeholder.svg?height=200&width=150', rating: 4.9, type: 'movie' },
          { id: 'm2', title: 'The Godfather', image: '/placeholder.svg?height=200&width=150', rating: 4.7, type: 'movie' },
        ],
        games: [
          { id: 'g1', title: 'The Legend of Zelda: Breath of the Wild', image: '/placeholder.svg?height=200&width=150', rating: 4.9, type: 'game' },
          { id: 'g2', title: 'Red Dead Redemption 2', image: '/placeholder.svg?height=200&width=150', rating: 4.7, type: 'game' },
        ],
      };

      setSearchResults(mockResults);
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredResults = activeTab === 'all'
    ? [...searchResults.books, ...searchResults.movies, ...searchResults.games]
    : searchResults[activeTab];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-black dark:text-white">
          Search Your Fandom
        </h1>
        
        <form onSubmit={handleSearch} className="mb-12">
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for books, movies, or games..."
              className="flex-grow"
            />
            <Button type="submit" disabled={isLoading} variant="outline" size="icon">
              {isLoading ? (
                <span className="animate-spin">🔄</span>
              ) : (
                <Search className="h-4 w-4" />
              )}
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </form>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="books">Books</TabsTrigger>
              <TabsTrigger value="movies">Movies</TabsTrigger>
              <TabsTrigger value="games">Games</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsGridView(true)}
              className={isGridView ? 'bg-gray-200 dark:bg-gray-700' : ''}
            >
              <Grid className="h-4 w-4" />
              <span className="sr-only">Grid view</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsGridView(false)}
              className={!isGridView ? 'bg-gray-200 dark:bg-gray-700' : ''}
            >
              <List className="h-4 w-4" />
              <span className="sr-only">List view</span>
            </Button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + (isGridView ? 'grid' : 'list')}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SearchResults
              results={filteredResults}
              isGridView={isGridView}
              isLoading={isLoading}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchPage;

