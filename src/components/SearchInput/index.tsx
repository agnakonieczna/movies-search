import { useCallback, useState } from 'react';
import styles from './index.module.scss';
import debounce from 'lodash/debounce';
import { useSearchParams } from 'react-router';

const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [value, setValue] = useState(query || '');

  const debouncedSetQuery = useCallback(
    debounce((query: string) => {
      if (query.length > 0) {
        setSearchParams({ query, page: '1' }, { replace: true });
      } else {
        setSearchParams({}, { replace: true });
      }
    }, 1500),
    []
  );

  return (
    <input
      className={styles.input}
      type="search"
      placeholder="Search movies"
      value={value}
      onChange={(e) => {
        debouncedSetQuery(e.target.value);
        setValue(e.target.value);
      }}
    />
  );
};

export default SearchInput;
