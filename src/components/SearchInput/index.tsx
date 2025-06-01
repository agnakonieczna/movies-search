import { type Dispatch, type SetStateAction } from 'react';
import styles from './index.module.scss';
import type { DebouncedFunc } from 'lodash';

const SearchInput = ({
  value,
  setValue,
  debouncedSetQuery,
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  debouncedSetQuery: DebouncedFunc<(query: string) => void>;
}) => {
  return (
    <input
      data-testid="search-input"
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
