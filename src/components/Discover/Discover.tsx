import './Discover.scss';
import { useEffect, useState, useCallback } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import movies from '../../data/exampleData';
import DiscoverControls from '../DiscoverControls/DiscoverControls';
import Tips from '../Tips/Tips';
import NoMoviesIcon from '../../icons/NoMoviesIcon';
import LoadingIcon from '../../icons/LoadingIcon';
import MovieListItem from '../MovieListItem/MovieListItem';

export type Movie = {
  id: string;
  imageURL: string;
  title: string;
  summary: string;
  rating: number;
};

type Movies = Movie[];
type DiscoverStack = Movies | [] | undefined;
export type HandleDiscoverStackTypes = (type: 'accept' | 'reject') => void;

export default function Discover() {
  const [discoverStack, setDiscoverStack] = useState<DiscoverStack>(undefined);
  const [watchlist, setWatchlist] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleDiscoverStack = useCallback<HandleDiscoverStackTypes>(
    (type) => {
      const currentMovie = discoverStack?.[0];

      // Mocked backend gets notified of the user's decision.
      console.log(`User ${type}ed the movie with id: ${currentMovie?.id}`);

      if (currentMovie && type === 'accept') {
        setWatchlist((prevWatchlist) => [...prevWatchlist, currentMovie]);
      }

      setDiscoverStack((prevStack) => prevStack?.slice(1) || []);
    },
    [discoverStack]
  );

  // Fake API call from mocked backend that returns data on GET request.
  const fetchMovies = useCallback(
    (page: number) => {
      if (isLoading) return;
      setIsLoading(true);

      setTimeout(() => {
        if (page >= movies.length) {
          setIsLoading(false);
          return;
        }

        const newMovies = movies[page]?.list || [];
        if (page === 0) {
          setDiscoverStack(newMovies);
        } else {
          setDiscoverStack((prevStack) => [...(prevStack || []), ...newMovies]);
        }
        setCurrentPage(page);
        setIsLoading(false);
      }, 500);
    },
    [isLoading]
  );

  // Technical requirement: "Should take into consideration performance of a very long movie list"
  // Solution: Loading the movie list in parts (for example using API-side paging) when the number of movies in the stack decreases
  useEffect(() => {
    if ((!discoverStack || discoverStack.length < 5) && !isLoading) {
      fetchMovies(currentPage + (discoverStack ? 1 : 0));
    }
  }, [discoverStack, currentPage, fetchMovies, isLoading]);

  const currentMovie = discoverStack?.[0];

  return (
    <main className="discover">
      {discoverStack === undefined ? (
        <p className="discover__wrapper">
          <LoadingIcon className="discover__icon discover__icon--loading" />
          Loading movies...
        </p>
      ) : currentMovie ? (
        <>
          <Tips />
          <MovieCard
            movie={currentMovie}
            handleDiscoverStack={handleDiscoverStack}
          />
          <DiscoverControls handleDiscoverStack={handleDiscoverStack} />
        </>
      ) : (
        <>
          <p className="discover__wrapper">
            <NoMoviesIcon className="discover__icon" />
            No more movies to discoverx
          </p>
          <div className="discover__watchlist">
            <h2 className="discover__title">Your watchlist:</h2>
            {watchlist.map((movie) => (
              <MovieListItem key={movie.id} movie={movie} />
            ))}
          </div>
        </>
      )}
    </main>
  );
}
