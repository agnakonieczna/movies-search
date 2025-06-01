import SearchInput from '../../components/SearchInput';
import MoviesList from '../../components/MoviesList';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router';
import debounce from 'lodash/debounce';

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const currentPage = Number(searchParams.get('page')) || 1;
  const [value, setValue] = useState(query || '');

  const debouncedSetQuery = useMemo(
    () =>
      debounce((query: string) => {
        setSearchParams(query ? { query, page: '1' } : {}, { replace: true });
      }, 1500),
    [setSearchParams]
  );

  const handlePageChange = (page: number) => {
    setSearchParams((searchParams) => {
      searchParams.set('page', page.toString());
      return searchParams;
    });
  };

  return (
    <>
      <SearchInput
        value={value}
        setValue={setValue}
        debouncedSetQuery={debouncedSetQuery}
      />
      <MoviesList
        query={query}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default Home;
