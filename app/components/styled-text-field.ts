import { styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';

const StyledTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '& label': {
    color: `${theme.palette.common.white}A`,
    transform: `translate(${theme.spacing(2)}, ${theme.spacing(1)}) scale(1)`,
    '&.Mui-focused, &.MuiFormLabel-filled': {
      transform: `translate(14px, -9px) scale(0.75)`,
    },
  },
  '& .MuiOutlinedInput-root': {
    color: theme.palette.common.white,
    '& input': {
      padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    },
    '& fieldset': {
      borderColor: `${theme.palette.common.white}A`,
    },
  },
  '&:hover': {
    '& label': {
      color: theme.palette.common.white,
    },
    '& .MuiOutlinedInput-root fieldset': {
      borderColor: theme.palette.common.white,
    },
  },
}));

export default StyledTextField;
