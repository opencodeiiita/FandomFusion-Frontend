'use client'

import { useState } from 'react'
import { SearchCard } from '../components/SearchCard'
import { SearchInput } from '../components/SearchInput'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/v1/search/anime?q=${encodeURIComponent(query)}`)
      if (!response.ok) {
        throw new Error('Failed to fetch search results')
      }
      const data = await response.json()
      setResults(data)
    } catch (err) {
      setError('An error occurred while fetching results. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleAddToList = async (animeId, status = 'plan_to_watch') => {
    try {
      const response = await fetch('/api/v1/lists/anime/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          publicDbId: animeId,
          status,
          rating: 0,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to add anime to list')
      }

      alert('Anime added to your list!')
    } catch (err) {
      console.error('Error adding anime to list:', err)
      alert('Failed to add anime to your list. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-6">
        <SearchInput query={query} setQuery={setQuery} handleSearch={handleSearch} />

        {query && (
          <h2 className="text-xl font-semibold mb-4">
            Results for "{query}"
          </h2>
        )}

        {isLoading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 text-center py-4">{error}</div>
        ) : (
          <div className="space-y-8">
            {/* Trending Results */}
            <section>
              <h3 className="text-lg font-medium mb-4">Trending</h3>
              <div className="overflow-x-auto whitespace-nowrap pb-4 -mx-4 px-4">
                <div className="inline-flex gap-4">
                  {results.slice(0, 10).map((result) => (
                    <div key={result.id} className="w-48">
                      <SearchCard 
                        {...result} 
                        onAddToList={() => handleAddToList(result.id)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Main Results */}
            <section>
              <h3 className="text-lg font-medium mb-4">All Results</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {results.map((result) => (
                  <SearchCard 
                    key={result.id} 
                    {...result} 
                    onAddToList={() => handleAddToList(result.id)}
                  />
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  )
}

