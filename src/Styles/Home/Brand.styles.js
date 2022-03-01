/* eslint-disable import/no-anonymous-default-export */

import { keyframes } from '@emotion/react';

const ArrowAnimation = keyframes`
0%{opacity:0},
40%{opacity:1},
80%{opacity:0},
0%{opacity:0},
100%{opacity:0},
`;
export default {
  Slogan: { fontSize: '20px', ml: '20px', mt: '5px' },
  Arrow: {
    mt: '45px',
    textAlign: 'center',
    svg: {
      fontSize: '28px',
      display: 'block',
      margin: '-20px auto',
      animation: `${ArrowAnimation} 2s infinite`,
      '&.first': {
        animationDelay: '0s',
      },
      '&.second': {
        animationDelay: '0.2s',
      },
      '&.third': {
        animationDelay: '0.5s',
      },
    },
  },
};
