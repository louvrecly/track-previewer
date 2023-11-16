'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent } from 'react';
import Box from '@mui/material/Box';
import StyledTextField from '@/app/components/styled-text-field';
import Button from '@mui/material/Button';

type SearchBarFormSubmitEvent = FormEvent<HTMLFormElement> & {
  target: HTMLFormElement & [HTMLInputElement];
};

const SearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = (event: SearchBarFormSubmitEvent) => {
    event.preventDefault();
    const { value } = event.target[0];
    router.push(value ? `?query=${value}` : '/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex' }}>
        <StyledTextField
          id="keyword"
          label="Search"
          variant="outlined"
          color="success"
          defaultValue={query}
          sx={{
            '& fieldset': {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            },
          }}
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
