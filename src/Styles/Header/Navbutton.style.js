export default {
  logo: {
    width: {
      xxs: '30%',
    },
  },
  ButtonBase: {
    textAlign: 'right',
    svg: {
      fontSize: '30px',
      color: 'primary.main',
    },
  },
  ListItem: {
    p: '8px 12px',
    width: 'unset',
    textAlign: 'center',
    a: {
      textDecoration: 'none',
      color: 'text.primary',
      button: {
        fontSize: '18px',
        p: '2px 10px',
        borderRadius: '3px',
      },
      '&.active': {
        button: {
          color: 'primary.main',
        },
      },
    },
  },
};
