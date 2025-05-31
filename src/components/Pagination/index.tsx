import { useMemo } from 'react';
import { NextIcon, PreviousIcon } from '../common';
import styles from './index.module.scss';
import { useSearchParams } from 'react-router';

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

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const pages = useMemo(
    () => getPaginationItems(currentPage, totalPages),
    [currentPage, totalPages]
  );

  const handlePreviousClick = () => {
    const previousPage = currentPage - 1;
    setSearchParams((searchParams) => {
      searchParams.set('page', previousPage.toString());
      return searchParams;
    });
  };

  const handleNextClick = () => {
    setSearchParams((searchParams) => {
      const nextPage = currentPage + 1;
      searchParams.set('page', nextPage.toString());
      return searchParams;
    });
  };

  return (
    totalPages > 1 && (
      <div className={styles.container}>
        <button
          disabled={currentPage === 1}
          onClick={handlePreviousClick}
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
              onClick={() => {
                setSearchParams((searchParams) => {
                  searchParams.set('page', page.toString());
                  return searchParams;
                });
              }}
            >
              {page}
            </button>
          )
        )}
        <button
          className={styles.button}
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
        >
          <NextIcon />
        </button>
      </div>
    )
  );
};

export default Pagination;
