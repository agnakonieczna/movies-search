import { useSelector } from "react-redux";
import { selectFavouriteMovies } from "../../store/slices/favouriteMoviesSlice.ts";
import { Title } from "../common";
import EmptyView from "../views/EmptyView";
import MovieDetailsCard from "../MovieDetailsCard";
import styles from "./index.module.scss";

const FavouriteMovies = () => {
  const favouriteMovies = useSelector(selectFavouriteMovies);

  if (favouriteMovies.length === 0)
    return (
      <EmptyView>
        <Title>No favourites movies yet</Title>
      </EmptyView>
    );

  return (
    <div className={styles.container}>
      <Title className={styles.title}>Your favourite movies list:</Title>
      <div className={styles.movies_container}>
        {favouriteMovies.map((movieDetails) => (
          <MovieDetailsCard key={movieDetails.id} movieDetails={movieDetails} />
        ))}
      </div>
    </div>
  );
};

export default FavouriteMovies;
