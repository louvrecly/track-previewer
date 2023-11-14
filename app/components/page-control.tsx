import { useCallback } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import StyledLink from './styled-link';

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
      maxWidth={1024}
      sx={{
        p: 2,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        gap: 2,
      }}
    >
      <StyledLink href={generatePageLink(currentPage - 1)}>
        <Typography
          align="left"
          sx={{
            width: 80,
            color: currentPage === 1 ? 'grey.700' : 'success.light',
            opacity: currentPage === 1 ? 1 : 0.7,
            '&:hover': {
              opacity: 1,
            },
          }}
        >
          &lt;&nbsp;Previous
        </Typography>
      </StyledLink>

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'space-between',
          gap: 2,
          overflow: 'auto',
        }}
      >
        {pages.map((page) => (
          <StyledLink key={page} href={generatePageLink(page)}>
            <Typography
              align="center"
              sx={{
                color: 'success.light',
                fontWeight: currentPage === page ? 'bold' : 'normal',
                opacity: currentPage === page ? 1 : 0.7,
                '&:hover': {
                  opacity: 1,
                },
              }}
            >
              {page}
            </Typography>
          </StyledLink>
        ))}
      </Box>

      <StyledLink href={generatePageLink(currentPage + 1)}>
        <Typography
          align="right"
          sx={{
            width: 80,
            color: currentPage === pageCount ? 'grey.700' : 'success.light',
            opacity: currentPage === pageCount ? 1 : 0.7,
            '&:hover': {
              opacity: 1,
            },
          }}
        >
          Next&nbsp;&gt;
        </Typography>
      </StyledLink>
    </Box>
  );
};

export default PageControl;
