import { Link } from "react-router";
import type { Movie } from "../../../services/types.ts";
import MovieRating from "../../MovieRating";
import Poster from "../../Poster";
import SmallText from "../../common/SmallText";
import styles from "./index.module.scss";

const MovieItem = ({ movie }: { movie: Movie }) => {
  return (
    <Link to={`${movie.id}`} className={styles.link}>
      <Poster title={movie.title} poster_path={movie.poster_path} />
      <div className={styles.details}>
        <SmallText className={styles.title}>{movie.title}</SmallText>
        <MovieRating
          className={styles.rating}
          vote_average={movie.vote_average || 0}
        />
      </div>
    </Link>
  );
};

export default MovieItem;
