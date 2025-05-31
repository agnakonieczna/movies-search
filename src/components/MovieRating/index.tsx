import type { HTMLAttributes } from "react";
import { MicroText, StarIcon } from "../common";
import MovieTag from "../MovieTag";

const MovieRating = ({
  vote_average,
  ...props
}: HTMLAttributes<HTMLDivElement> & { vote_average: number }) => (
  <MovieTag {...props}>
    <StarIcon fill="#8F74D4" width={16} height={16} />
    <MicroText>{vote_average.toFixed(1)}</MicroText>
  </MovieTag>
);

export default MovieRating;
