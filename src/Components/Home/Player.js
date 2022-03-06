//hooks
import { useState } from 'react';

//packages
import { Box, Typography, ButtonBase } from '@mui/material';
import ReactPlayer from 'react-player/youtube';
import { Collapse } from 'react-collapse';

//Styles
import styles from 'Styles/Home/Player.styles';
const Player = ({ current, videoList }) => {
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
          url={`https://youtu.be/${videoList[current].snippet.resourceId.videoId}`}
          controls={true}
          playing={true}
          height="100%"
          width="100%"
          className="reactPlayer"
        />
      </Box>
      <Typography variant="h5" component="h5" sx={{ my: '5px' }}>
        ${videoList[current].snippet.title}
      </Typography>
      <Box sx={{ textAlign: 'right', mt: '5px' }}>
        <ButtonBase
          onClick={() => setDetails(!details)}
          sx={styles.ShowDescriptionButton}
        >
          {details ? 'Hide' : 'Show'} Details
        </ButtonBase>
      </Box>
      <Box
        sx={{ '& .ReactCollapse--collapse': { transition: 'height 500ms' } }}
      >
        <Collapse isOpened={details}>
          <Typography
            variant="body1"
            component="p"
            sx={{ fontSize: '18px', mt: '15px', whiteSpace: 'pre-wrap' }}
          >
            ${videoList[current].snippet.description}
          </Typography>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Player;
