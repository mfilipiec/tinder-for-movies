import './Discover.scss';
import MovieCard from '../MovieCard/MovieCard';
import DiscoverControls from '../DiscoverControls/DiscoverControls';
import Tips from '../Tips/Tips';
import NoMoviesIcon from '../../icons/NoMoviesIcon';
import LoadingIcon from '../../icons/LoadingIcon';
import Watchlist from '../Watchlist/Watchlist';
import { useMovies } from '../../hooks/useMovies';

export type HandleDiscoverStackTypes = (type: 'accept' | 'reject') => void;

export default function Discover() {
  const { currentMovie, status, handleMovie, watchlist } = useMovies();

  if (status === 'pending')
    return (
      <main className="discover">
        <p className="discover__wrapper">
          <LoadingIcon className="discover__icon discover__icon--loading" />
          Loading movies...
        </p>
      </main>
    );

  return (
    <main className="discover">
      {currentMovie ? (
        <>
          <Tips />
          <MovieCard
            movie={currentMovie}
            handleDiscoverStack={handleMovie}
          />
          <DiscoverControls handleDiscoverStack={handleMovie} />
        </>
      ) : (
        <>
          <p className="discover__wrapper">
            <NoMoviesIcon className="discover__icon" />
            No more movies to discover
          </p>
          <Watchlist list={watchlist} />
        </>
      )}
    </main>
  );
}
