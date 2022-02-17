import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '2%',
          paddingRight: '2%',
        },
      },
    },
  },
});
export default theme;
