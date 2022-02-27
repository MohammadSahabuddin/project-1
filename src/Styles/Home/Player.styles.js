/* eslint-disable import/no-anonymous-default-export */
export default {
  ShowDescriptionButton: {
    borderRadius: '3px',
    bgcolor: 'primary.youtube',
    p: '5px 10px',
    fontSize: '16px',
    color: 'background.default',
    fontWeight: 700,
  },
  Player: {
    position: 'relative',
    pt: '56.25%',
    '& .reactPlayer': {
      position: 'absolute',
      top: 0,
      left: 0,
      iframe: {
        borderRadius: '3px',
      },
    },
  },
};
