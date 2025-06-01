import { useMemo } from 'react';
import { NextIcon, PreviousIcon } from '../common';
import styles from './index.module.scss';

const getPaginationItems = (current: number, total: number) => {
  const currentItems = [current - 1, current, current + 1].filter(
    (page) => page > 1 && page < total
  );

  return [1, ...currentItems, total].reduce<('more' | number)[]>(
    (items, pageNumber, idx, array) => {
      const previousNumber = idx > 0 ? array[idx - 1] : pageNumber;
      const step = pageNumber - previousNumber;

      if (step >= 2) {
        items.push(step === 2 ? pageNumber - 1 : 'more');
      }
      return [...items, pageNumber];
    },
    []
  );
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  const pages = useMemo(
    () => getPaginationItems(currentPage, totalPages),
    [currentPage, totalPages]
  );

  return (
    totalPages > 1 && (
      <div className={styles.container}>
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className={styles.button}
        >
          <PreviousIcon />
        </button>
        {pages.map((page, idx) =>
          page === 'more' ? (
            <span key={`${page}-${idx}`}>...</span>
          ) : (
            <button
              key={page}
              className={
                currentPage === page
                  ? `${styles.button} ${styles.active_button}`
                  : styles.button
              }
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          )
        )}
        <button
          className={styles.button}
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <NextIcon />
        </button>
      </div>
    )
  );
};

export default Pagination;
