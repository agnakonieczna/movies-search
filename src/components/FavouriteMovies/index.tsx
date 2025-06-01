import { useSelector } from 'react-redux';
import { selectFavouriteMovies } from '../../store/slices/favouriteMoviesSlice.ts';
import { Title } from '../common';
import EmptyView from '../views/EmptyView';
import FavouriteMovieItem from './FavouriteMovieItem';
import styles from './index.module.scss';

const FavouriteMovies = () => {
  const favouriteMovies = useSelector(selectFavouriteMovies);

  if (favouriteMovies.length === 0)
    return (
      <EmptyView>
        <Title data-testid="no-favourites-title">
          No favourites movies yet
        </Title>
      </EmptyView>
    );

  return (
    <div className={styles.container}>
      <Title className={styles.title} data-testid="favourites-title">
        Your favourite movies list:
      </Title>
      <div className={styles.movies_container}>
        {favouriteMovies.map((id) => (
          <FavouriteMovieItem key={id} id={id.toString()} />
        ))}
      </div>
    </div>
  );
};

export default FavouriteMovies;
