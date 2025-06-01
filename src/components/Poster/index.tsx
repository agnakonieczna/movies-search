import type { ImgHTMLAttributes } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';

type PosterWidth = 92 | 154 | 185 | 342 | 500 | 780;

const Poster = ({
  title,
  poster_path,
  width = 342,
  className,
  ...props
}: {
  title: string;
  poster_path: string;
  width?: PosterWidth;
} & ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      src={
        poster_path
          ? `https://image.tmdb.org/t/p/w${width}${poster_path}`
          : 'src/assets/no-poster.svg'
      }
      alt={title}
      className={classNames(styles.poster, className)}
      loading="lazy"
      {...props}
    />
  );
};

export default Poster;
