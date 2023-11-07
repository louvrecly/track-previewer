import { useCallback } from 'react';
import Box from '@mui/material/Box';
import Link from 'next/link';
import Typography from '@mui/material/Typography';

interface PageControlProps {
  query: string;
  currentPage: number;
  pageCount: number;
}

const PageControl = ({ query, currentPage, pageCount }: PageControlProps) => {
  const pages = Array.from(Array(pageCount).keys()).map((key) => key + 1);

  const generatePageLink = useCallback(
    (page: number) =>
      `/?query=${query}&page=${
        page < 1 || page > pageCount ? currentPage : page
      }`,
    [currentPage, pageCount, query],
  );

  return (
    <Box
      sx={{
        paddingY: 2,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      <Link href={generatePageLink(currentPage - 1)}>
        <Typography sx={{ color: currentPage === 1 ? 'gray' : 'springgreen' }}>
          &lt;&nbsp;Previous
        </Typography>
      </Link>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 2,
          overflow: 'auto',
        }}
      >
        {pages.map((page) => (
          <Link key={page} href={generatePageLink(page)}>
            <Typography
              sx={{
                color: 'springgreen',
                fontWeight: page === currentPage ? 'bold' : 'normal',
              }}
            >
              {page}
            </Typography>
          </Link>
        ))}
      </Box>

      <Link href={generatePageLink(currentPage + 1)}>
        <Typography
          sx={{ color: currentPage === pageCount ? 'gray' : 'springgreen' }}
        >
          Next&nbsp;&gt;
        </Typography>
      </Link>
    </Box>
  );
};

export default PageControl;
