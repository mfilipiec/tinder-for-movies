import './MovieCard.scss';
import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { HandleDiscoverStackTypes, Movie } from '../Discover/Discover';
import StarIcon from '../../icons/StarIcon';

export default function MovieCard({
  movie,
  handleDiscoverStack
}: {
  movie: Movie;
  handleDiscoverStack: HandleDiscoverStackTypes;
}) {
  const { id, imageURL, title, summary, rating } = movie;
  const [isOpen, setIsOpen] = useState(false);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-18, 18]);
  const scale = useTransform(x, [-200, 0, 200], [0.8, 1, 0.8]);

  const handleCardDrag = () => {
    if (x.get() > 75) {
      handleDiscoverStack('accept');
    }
    if (x.get() < -75) {
      handleDiscoverStack('reject');
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCardUpdate = () => {
    if (x.get() < -130) {
      x.set(-130);
    } else if (x.get() > 130) {
      x.set(130);
    }
  };

  return (
    <motion.div
      style={{ x, rotate, scale }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onUpdate={handleCardUpdate}
      onDragEnd={handleCardDrag}
      dragElastic={0.5}
      className="card"
      key={id}
    >
      <img className="card__image" src={imageURL} alt={title} />
      <div className="card__details" onClick={handleToggle}>
        <h2 className={`card__title ${isOpen ? 'card__title--open' : ''}`}>
          {title}
        </h2>
        <div className="card__rating">
          <StarIcon className="card__rating-icon" /> {rating}/10
        </div>
        <p className={`card__summary ${isOpen ? 'card__summary--open' : ''}`}>
          {summary}
        </p>
      </div>
    </motion.div>
  );
}
