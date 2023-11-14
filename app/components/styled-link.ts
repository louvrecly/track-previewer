import { styled } from '@mui/material/styles';
import Link, { LinkProps } from 'next/link';

const StyledLink = styled(Link)<LinkProps>(() => ({
  textDecoration: 'none',
}));

export default StyledLink;
