import { Link } from 'react-router';
import type { Movie } from '../../../services/types.ts';
import MovieRating from '../../MovieRating';
import Poster from '../../Poster';
import SmallText from '../../common/SmallText';
import styles from './index.module.scss';

const MovieItem = ({ id, title, poster_path, vote_average = 0 }: Movie) => {
  return (
    <Link to={`${id}`} className={styles.link}>
      <Poster title={title} poster_path={poster_path} />
      <div className={styles.details}>
        <SmallText className={styles.title}>{title}</SmallText>
        <MovieRating className={styles.rating} vote_average={vote_average} />
      </div>
    </Link>
  );
};

export default MovieItem;
