'use client';

import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { FormEvent, useContext } from 'react';
import { SearchContext } from './contexts/search';

const SearchBar = () => {
  const { query, setQuery } = useContext(SearchContext);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { value } = (event.target as HTMLFormElement)[0] as HTMLInputElement;
    setQuery(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputBase
        sx={{ backgroundColor: 'white' }}
        placeholder="Type something here..."
        inputProps={{ 'aria-label': 'search' }}
        defaultValue={query}
      />

      <Button variant="contained" type="submit">
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
