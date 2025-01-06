import './Watchlist.scss';
import StarIcon from '../../icons/StarIcon';
import { Movie } from '../Discover/Discover';

export default function MovieListItem({ list }: { list: Movie[] }) {
  return (
    <div className="watchlist">
      <h2 className="watchlist__header">Your watchlist:</h2>
      {list.map((movie) => {
        const { id, imageURL, title, summary, rating } = movie;

        return (
          <div className="watchlist__item" key={id}>
            <img className="watchlist__image" src={imageURL} alt={title} />
            <div className="watchlist__details">
              <h3 className="watchlist__title">{title}</h3>
              <div className="watchlist__rating">
                <StarIcon className="watchlist__rating-icon" /> {rating}/10
              </div>
              <p className="watchlist__summary">{summary}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
