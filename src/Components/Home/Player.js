//hooks
import { useState } from 'react';

//packages
import { Box, Typography, ButtonBase } from '@mui/material';
import ReactPlayer from 'react-player/youtube';
import { Collapse } from 'react-collapse';

//Styles
import styles from 'Styles/Home/Player.styles';
const Player = () => {
  const [details, setDetails] = useState(false);
  /* 
  =>false is default which I set it (hare I won't want to display the description texts so I set the state -> default false)
  => here setDetails is set the default value, for here it is false
  =>basically setDetails change the value of state
  => here detail word is stored the default value, for here it is false.
  => console.log(details);
  */
  return (
    <Box>
      <Box sx={styles.Player}>
        <ReactPlayer
          url="https://youtu.be/xwg9Lf5ruUE"
          controls={true}
          playing={false}
          height="100%"
          width="100%"
          className="reactPlayer"
        />
      </Box>
      <Typography variant="h5" component="h5" sx={{ my: '5px' }}>
        Welcome to Codeforest24
      </Typography>
      <Box sx={{ textAlign: 'right', mt: '5px' }}>
        <ButtonBase
          onClick={() => setDetails(!details)}
          sx={styles.ShowDescriptionButton}
        >
          {details ? 'Hide' : 'Show'} Details
        </ButtonBase>
      </Box>
      <Collapse isOpened={details}>
        <Typography
          variant="body1"
          component="p"
          sx={{ fontSize: '18px', mt: '15px' }}
        >
          we are an organization of building websites. We have a group of
          Professional Developer thats run by enthusiasts for coding our process
          requirement & brief research development. Our values align with our
          mission and thats is to support our customers. Why would you choose
          us? Because we create quality-ful work and SEO-friendly websites that
          are quickly optimized. We mainly use for developing is next.js,
          node.js, express.js, graphql, etc. Dont hesitate to ask any questions
          if you have any. So why do you think? visit our website and be a part
          of our family.
        </Typography>
      </Collapse>
    </Box>
  );
};

export default Player;
