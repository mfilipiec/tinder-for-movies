import './Watchlist.scss';
import StarIcon from '../../icons/StarIcon';
import { Movie } from '../Discover/Discover';
import { motion } from 'motion/react';

export default function MovieListItem({ list }: { list: Movie[] }) {
  return (
    <div className="watchlist">
      <motion.h2
        className="watchlist__header"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Your watchlist:
      </motion.h2>
      {list.map((movie, index) => {
        const { id, imageURL, title, summary, rating } = movie;

        return (
          <motion.div
            className="watchlist__item"
            key={id}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.75 + index * 0.25, duration: 0.5 }}
          >
            <img className="watchlist__image" src={imageURL} alt={title} />
            <div className="watchlist__details">
              <h3 className="watchlist__title">{title}</h3>
              <div className="watchlist__rating">
                <StarIcon className="watchlist__rating-icon" /> {rating}/10
              </div>
              <p className="watchlist__summary">{summary}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
