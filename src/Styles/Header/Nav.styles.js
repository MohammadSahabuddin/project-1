export default {
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
          background: (theme) => theme.palette.primary.mainGradient,
          color: 'background.default',
        },
      },
    },
  },
};
