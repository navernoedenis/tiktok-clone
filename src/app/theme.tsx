import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

import MuiBox from '@mui/material/Box';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1150,
      xl: 1536,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: '3px',
          textTransform: 'none',
          fontSize: '18px',

          '&:hover': {
            boxShadow: 'none',
          },
        },
        outlined: {
          display: 'none',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
  typography: {
    fontFamily: 'Proxima Nova, Roboto, sans-serif',
  },
});

export const Main = styled(MuiBox)`
  display: flex;
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 40px;
`;

export default theme;
