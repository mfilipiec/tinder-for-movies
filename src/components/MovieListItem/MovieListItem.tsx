import './MovieListItem.scss';
import StarIcon from '../../icons/StarIcon';
import { Movie } from '../Discover/Discover';

export default function MovieListItem({ movie }: { movie: Movie }) {
  const { imageURL, title, summary, rating } = movie;

  return (
    <div className="item">
      <img className="item__image" src={imageURL} alt={title} />
      <div className="item__details">
        <h3 className="item__title">{title}</h3>
        <div className="item__rating">
          <StarIcon className="item__rating-icon" /> {rating}/10
        </div>
        <p className="item__summary">{summary}</p>
      </div>
    </div>
  );
}
