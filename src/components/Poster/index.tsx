import type { ImgHTMLAttributes } from "react";
import styles from "./index.module.scss";

type PosterWidth = 92 | 154 | 185 | 342 | 500 | 780;

const Poster = ({
  title,
  poster_path,
  width = 185,
  className,
  ...props
}: {
  title: string;
  poster_path: string;
  width?: PosterWidth;
} & ImgHTMLAttributes<HTMLImageElement>) => {
  const posterUrl =
    poster_path && `https://image.tmdb.org/t/p/w${width}${poster_path}`;

  return (
    <img
      src={posterUrl || "src/assets/no-poster.svg"}
      alt={title}
      className={`${styles.poster} ${className}`}
      {...props}
    />
  );
};

export default Poster;
