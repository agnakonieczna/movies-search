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
  vote_average = 0,
  genres = [],
  overview,
}: MovieDetails) => {
  return (
    <div className={styles.container} data-testid="movie-card-item">
      <Poster
        title={title}
        poster_path={poster_path}
        className={styles.poster}
        data-testid={`movie-card-poster-${id}`}
      />
      <div className={styles.details}>
        <div className={styles.title_wrapper}>
          <Subtitle data-testid={`movie-card-title-${id}`}>{title}</Subtitle>
          <MovieRating
            data-testid={`movie-card-rating-${id}`}
            vote_average={vote_average}
          />
        </div>
        <div className={styles.genres} data-testid={`movie-card-genres-${id}`}>
          {genres.map((genre) => (
            <MovieTag key={genre.id}>
              <MicroText>{genre.name}</MicroText>
            </MovieTag>
          ))}
        </div>
        {overview && (
          <Text
            className={styles.overview}
            data-testid={`movie-card-overview-${id}`}
          >
            {overview}
          </Text>
        )}
        <FavouritesButton movieId={id} />
      </div>
    </div>
  );
};

export default MovieDetailsCard;
