import { MicroText, Text, Subtitle } from '../common';
import Poster from '../Poster';
import MovieRating from '../MovieRating';
import MovieTag from '../MovieTag';
import FavouritesButton from '../FavouriteButton';
import type { MovieDetails } from '../../services/types.ts';
import styles from './index.module.scss';

const MovieDetailsCard = ({
  id,
  title,
  poster_path,
  vote_average,
  genres = [],
  overview,
}: MovieDetails) => {
  return (
    <div className={styles.container}>
      <Poster
        title={title}
        poster_path={poster_path}
        className={styles.poster}
      />
      <div className={styles.details}>
        <div className={styles.title_wrapper}>
          <Subtitle>{title}</Subtitle>
          <MovieRating vote_average={vote_average || 0} />
        </div>
        <div className={styles.genres}>
          {genres.map((genre) => (
            <MovieTag key={genre.id}>
              <MicroText>{genre.name}</MicroText>
            </MovieTag>
          ))}
        </div>
        {overview && <Text className={styles.overview}>{overview}</Text>}
        <FavouritesButton movieId={id} />
      </div>
    </div>
  );
};

export default MovieDetailsCard;
