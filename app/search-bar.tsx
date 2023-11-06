'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent } from 'react';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { value } = (event.target as HTMLFormElement)[0] as HTMLInputElement;
    router.push(value ? `?query=${value}` : '/');
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
