//packages
import { Box, Typography } from '@mui/material';
import ReactPlayer from 'react-player/youtube';

const Player = () => {
  return (
    <Box>
      <Box>
        <ReactPlayer
          url="https://youtu.be/x0Y58wDhcIw"
          controls={true}
          playing={true}
          width="100%"
          height={400}
        />
      </Box>
    </Box>
  );
};

export default Player;
