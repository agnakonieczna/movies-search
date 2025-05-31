import { MicroText, Text, Title } from '../common';
import Poster from '../Poster';
import MovieRating from '../MovieRating';
import MovieTag from '../MovieTag';
import FavouritesButton from '../FavouriteButton';
import type { MovieDetails } from '../../services/types.ts';
import styles from './index.module.scss';

const MovieDetailsCard = ({ movieDetails }: { movieDetails: MovieDetails }) => {
  return (
    <div className={styles.container}>
      <Poster
        title={movieDetails.title}
        poster_path={movieDetails.poster_path}
        className={styles.poster}
      />
      <div className={styles.details}>
        <div className={styles.title_wrapper}>
          <Title>{movieDetails.title}</Title>
          <MovieRating vote_average={movieDetails.vote_average || 0} />
        </div>
        {movieDetails.genres?.length > 0 && (
          <div className={styles.genres}>
            {movieDetails.genres.map((genre) => (
              <MovieTag key={genre.id}>
                <MicroText>{genre.name}</MicroText>
              </MovieTag>
            ))}
          </div>
        )}
        {movieDetails.overview && (
          <Text className={styles.overview}>{movieDetails.overview}</Text>
        )}
        <FavouritesButton movieDetails={movieDetails} />
      </div>
    </div>
  );
};

export default MovieDetailsCard;
