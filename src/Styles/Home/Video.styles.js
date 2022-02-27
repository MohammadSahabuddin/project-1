/* eslint-disable import/no-anonymous-default-export */
export default {
  videos: {
    mb: '20px',
    a: {
      textDecoration: 'none',
      cursor: 'pointer',
      img: {
        borderRadius: '3px',
      },
      h5: {
        fontSize: '19px',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        WebkitLineClamp: '2',
        color: 'text.primary',
      },
    },
  },
  LodeMore: {
    textAlign: 'center',
    background: (theme) => theme.palette.primary.mainGradient,
    color: 'white',
    padding: '4px 15px',
    fontSize: '18px',
    borderRadius: '3px',
  },
};
