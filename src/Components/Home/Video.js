import { Box, Grid, Typography } from '@mui/material';

//Data
import Videos from 'Data/Dummy/videos.data';

const Video = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        {Videos?.length > 0 &&
          Videos.map((video, i) => (
            <Grid item md={3} key={i}>
              <Box>
                <Box
                  component="img"
                  src={video.image}
                  alt={video.alt}
                  width="100%"
                />
                <Typography variant="h5" component="h5">
                  {video.title}
                </Typography>
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Video;
