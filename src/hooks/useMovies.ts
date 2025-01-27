import { useState, useEffect, useCallback, useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import fetchMovies, { Movies } from './../data/fetchMovies';

export type HandleMovieTypes = (type: 'accept' | 'reject') => void;

export function useMovies() {
  const [isFirstFetch, setIsFirstFetch] = useState(true);
  const { data, fetchNextPage, status, hasNextPage } = useInfiniteQuery({
    queryKey: ['movies'],
    queryFn: fetchMovies,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length : undefined,
    enabled: isFirstFetch,
  });
  const [index, setIndex] = useState(1);
  const [watchlist, setWatchlist] = useState<Movies>([]);

  const currentMovie = useMemo(() => {
    return data?.pages[Math.floor((index - 1) / 10)]?.movies[(index - 1) % 10];
  }, [data, index]);

  const handleMovie: HandleMovieTypes = useCallback((type) => {
    console.log(`User ${type}ed the movie with id: ${currentMovie?.id}`);

    if (currentMovie && type === 'accept') {
      setWatchlist((prevWatchlist) => [...prevWatchlist, currentMovie]);
    }

    setIndex((prevIndex) => prevIndex + 1);
  }, [currentMovie]);

  useEffect(() => {
    if (hasNextPage && index % 5 === 0) {
      fetchNextPage();
    } else if (!hasNextPage) {
      setIsFirstFetch(false);
    }
  }, [index, fetchNextPage, hasNextPage]);

  return { currentMovie, status, handleMovie, watchlist };
}