import MovieDetailsCard from '../../MovieDetailsCard';
import { useGetMovieDetailsQuery } from '../../../services/moviesApi.ts';
import { skipToken } from '@reduxjs/toolkit/query';
import Error from '../../views/ErrorView';
import Loading from '../../views/LoadingView';
import EmptyView from '../../views/EmptyView';
import { Title } from '../../common';

const FavouriteMovieItem = ({ id }: { id?: string }) => {
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

  return <MovieDetailsCard key={id} {...movieDetails} />;
};

export default FavouriteMovieItem;
