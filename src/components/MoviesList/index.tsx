import { useSearchMoviesQuery } from "../../services/moviesApi.ts";
import Pagination from "../Pagination";
import Error from "../views/ErrorView";
import MovieItem from "./MovieItem";
import Loading from "../views/LoadingView";
import { useSearchParams } from "react-router";
import { skipToken } from "@reduxjs/toolkit/query";
import EmptyView from "../views/EmptyView";
import { Title, Text } from "../common";
import styles from "./index.module.scss";

const MoviesList = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  const page = Number(searchParams.get("page")) || 1;
  const {
    data: movies,
    error,
    isFetching,
  } = useSearchMoviesQuery(query ? { query, page } : skipToken);

  if (error) {
    return <Error error={error} />;
  }

  if (isFetching) return <Loading />;

  if (!query) {
    return (
      <Text className={styles.text}>
        Begin typing to find your next favorite film.
      </Text>
    );
  }

  if (!movies || movies.results.length === 0)
    return (
      <EmptyView>
        <Title>Ups, seems that we don't have it</Title>
      </EmptyView>
    );

  return (
    <>
      <div className={styles.grid}>
        {movies.results.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
      <Pagination totalPages={movies.total_pages} />
    </>
  );
};

export default MoviesList;
