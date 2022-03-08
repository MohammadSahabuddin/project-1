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
      main: '#08E8B3', //Others Main Color
      mainGradient: 'linear-gradient(to right,#41739b,#01FFC3)', //Gradient Color
      youtube: '#FF0000', //Youtube logo color
      black_opacity: '#e8e8e8', //Table Color
      link_color: '#653096', //Link Color
      borderColor: '#0000002e', //Border Color
      success: '#28A745', //Success Color Message
    },
  },
  breakpoints: {
    values: {
      xxs: 0, // Double Extra Small Device
      xs: 360, // Extra Small Device
      sm: 480, // Small Device
      msm: 576, // Medium Small Medium Device
      lsm: 640, // Large Small Medium Device
      smd: 768, // Small Medium Device
      md: 992, // Medium Device
      lg: 1200, // Large  Device
      xl: 1536, // Extra Large  Device
      xxl: 1980, // Double Extra Large  Device
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '30px 2%',
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
