import { Link } from 'react-router';
import type { Movie } from '../../../services/types.ts';
import MovieRating from '../../MovieRating';
import Poster from '../../Poster';
import SmallText from '../../common/SmallText';
import styles from './index.module.scss';
import { PATHS } from '../../../constants/paths.ts';

const MovieItem = ({ id, title, poster_path, vote_average = 0 }: Movie) => {
  return (
    <Link
      to={PATHS.DETAILS(id.toString())}
      className={styles.link}
      data-testid={`movie-item-${id}`}
    >
      <Poster
        title={title}
        poster_path={poster_path}
        data-testid={`movie-item-poster-${id}`}
      />
      <div className={styles.details}>
        <SmallText
          data-testid={`movie-item-title-${id}`}
          className={styles.title}
        >
          {title}
        </SmallText>
        <MovieRating
          data-testid={`movie-item-rating-${id}`}
          className={styles.rating}
          vote_average={vote_average}
        />
      </div>
    </Link>
  );
};

export default MovieItem;
