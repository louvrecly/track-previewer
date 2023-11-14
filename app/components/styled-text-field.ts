import { styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const StyledTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '& label': {
    color: `${theme.palette.common.white}A`,
  },
  '& .MuiOutlinedInput-root fieldset': {
    borderColor: `${theme.palette.common.white}A`,
  },
  '&:hover': {
    '& label': {
      color: theme.palette.common.white,
    },
    '& .MuiOutlinedInput-root fieldset': {
      borderColor: theme.palette.common.white,
    },
  },
  '& .MuiOutlinedInput-root': {
    color: theme.palette.common.white,
  },
}));

export default StyledTextField;
