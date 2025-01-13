import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SearchResults = ({ results, isGridView, isLoading }) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 dark:border-gray-100"></div>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center text-gray-800 dark:text-gray-200 text-2xl font-bold mt-12">
        No results found. Try a different search!
      </div>
    );
  }

  return (
    <div className={`grid gap-6 ${isGridView ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
      {results.map((item) => (
        <motion.div
          key={item.id}
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{item.title}</span>
                <span className="text-sm text-muted-foreground">{item.type}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`flex ${isGridView ? 'flex-col' : 'flex-row'} gap-4`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={`object-cover rounded-lg ${isGridView ? 'w-full h-48' : 'w-24 h-36'}`}
                />
                <div className="flex flex-col justify-between">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="font-bold text-gray-700 dark:text-gray-300">{item.rating.toFixed(1)}</span>
                  </div>
                  {!isGridView && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default SearchResults;

