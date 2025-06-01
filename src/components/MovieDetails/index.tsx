import { skipToken } from '@reduxjs/toolkit/query';
import { useNavigate } from 'react-router';
import { useGetMovieDetailsQuery } from '../../services/moviesApi.ts';
import { PreviousIcon, Title } from '../common';
import Error from '../views/ErrorView';
import Loading from '../views/LoadingView';
import EmptyView from '../views/EmptyView';
import MovieDetailsCard from '../MovieDetailsCard';
import styles from './index.module.scss';

const MovieDetails = ({ id }: { id?: string }) => {
  const navigate = useNavigate();
  const {
    data: movieDetails,
    error,
    isFetching,
  } = useGetMovieDetailsQuery(id ?? skipToken);

  if (error) {
    return <Error error={error} />;
  }

  if (isFetching) return <Loading />;

  if (!movieDetails)
    return (
      <EmptyView>
        <Title>Movie not found</Title>
      </EmptyView>
    );

  return (
    <>
      <button onClick={() => navigate(-1)} className={styles.back_button}>
        <PreviousIcon width={32} height={32} />
      </button>
      <MovieDetailsCard {...movieDetails} />
    </>
  );
};

export default MovieDetails;
