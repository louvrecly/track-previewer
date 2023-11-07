'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent } from 'react';
import Box from '@mui/material/Box';
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
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <InputBase
          sx={{
            flex: 1,
            paddingX: 3,
            backgroundColor: 'white',
            borderTopLeftRadius: 3,
            borderBottomLeftRadius: 3,
          }}
          placeholder="Type something here..."
          inputProps={{ 'aria-label': 'search' }}
          defaultValue={query}
        />

        <Button
          sx={{
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
          variant="contained"
          color="success"
          type="submit"
        >
          Search
        </Button>
      </Box>
    </form>
  );
};

export default SearchBar;
