import type { HTMLAttributes } from 'react';
import { MicroText, StarIcon } from '../common';
import MovieTag from '../MovieTag';
import styles from './index.module.scss';

const MovieRating = ({
  vote_average,
  ...props
}: HTMLAttributes<HTMLDivElement> & { vote_average: number }) => (
  <MovieTag {...props}>
    <StarIcon className={styles.icon} width={16} height={16} />
    <MicroText>{vote_average.toFixed(1)}</MicroText>
  </MovieTag>
);

export default MovieRating;
