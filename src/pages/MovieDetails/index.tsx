import { useParams } from "react-router";
import MovieDetails from "../../components/MovieDetails";

const Movie = () => {
  const { id } = useParams();

  return <MovieDetails id={id} />;
};

export default Movie;
