//hooks
import { useState } from 'react';

//packages
import { Box, Typography, ButtonBase } from '@mui/material';
import ReactPlayer from 'react-player/youtube';
import { Collapse } from 'react-collapse';

const Player = () => {
  const [details, setDetails] = useState(false);
  /* 
  =>false is default which I set it (hare I won't want to display the description texts so I set the state -> default false)
  => here setDetails is set the default value, for here it is false
  =>basically setDetails change the value of state
  => here detail word is stored the default value, for here it is false.
  =>
  */
  console.log(details);
  return (
    <Box>
      <Box>
        <ReactPlayer
          url="https://youtu.be/xwg9Lf5ruUE"
          controls={true}
          playing={false}
          width="100%"
          height={400}
        />
      </Box>
      <Typography>
        Post request with sending file to graphql api from next js application
        using axios | Cabbage
      </Typography>
      <ButtonBase onClick={() => setDetails(!details)}>
        {details ? 'Hide' : 'Show'} Details
      </ButtonBase>
      <Collapse isOpened={details}>
        <Typography variant="body1" component="p">
          Post request with sending file to graphql api from next js application
          using axios | CabbagePost request with sending file to graphql api
          from next js application using axios | CabbagePost request with
          sending file to graphql api from next js application using axios |
          CabbagePost request with sending file to graphql api from next js
          application using axios | CabbagePost request with sending file to
          graphql api from next js application using axios | CabbagePost request
          with sending file to graphql api from next js application using axios
          | CabbagePost request with sending file to graphql api from next js
          application using axios | CabbagePost request with sending file to
          graphql api from next js application using axios | CabbagePost request
          with sending file to graphql api from next js application using axios
          | Cabbage
        </Typography>
      </Collapse>
    </Box>
  );
};

export default Player;
