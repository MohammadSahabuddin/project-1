import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Nunito',
  },
  palette: {
    text: {
      primary: '#000', //Default Text Color
    },
    background: {
      default: '#fff', //Default Background Color
    },
    primary: {
      main: '#41739b', //Others Main Color
      mainGradient: 'linear-gradient(to right,#01FFC3, #41739b)', //Gradient Color
      youtube: '#FF0000', //Youtube logo color
      black_opacity: '#e8e8e8', //Table Color
      link_color: '#653096', //Link Color
      borderColor: '#0000002e', //Border Color
      success: '#28A745', //Success Color Message
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: '2%',
          paddingRight: '2%',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: 'Nunito',
        },
      },
    },
  },
});
export default theme;
