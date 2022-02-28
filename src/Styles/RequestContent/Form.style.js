import theme from 'Theme';

export default {
  Form: {
    mt: '30px',
    h5: {
      fontWeight: 700,
      mb: '10px',
    },
  },
  Text: {
    color: 'primary.main',
    mb: '5px',
  },
  Error: {
    color: 'primary.youtube',
    mb: '5px',
  },
  Button: {
    background: (theme) => theme.palette.primary.mainGradient,
    color: 'white',
    padding: '4px 22px',
    borderRadius: '3px',
    fontWeight: 700,
    fontSize: '20px',
    mt: '30px',
  },
};
