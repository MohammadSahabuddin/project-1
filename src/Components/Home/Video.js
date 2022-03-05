//Packages
import { Box, ButtonBase, Grid, Typography } from '@mui/material';
import Link from 'next/link';

//Data
import Videos from 'Data/Dummy/videos.data';
//Redux
import { useSelector } from 'react-redux';

//styles
import styles from 'Styles/Home/Video.styles';

const Video = ({ setCurrent }) => {
  const { videos, nextPageToken } = useSelector((state) => state.videoInfo);
  const videoOnClick = (i) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrent(i);
  };
  return (
    <Box sx={{ mt: '20px' }}>
      <Grid container spacing={2}>
        {videos?.length > 0 &&
          videos.map((video, i) => (
            <Grid item md={3} key={i}>
              <Box sx={styles.videos} onClick={() => videoOnClick(i)}>
                <Box
                  component="img"
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.alt}
                  width="100%"
                />
                <Typography variant="h5" component="h5">
                  {video.snippet.title}
                </Typography>
              </Box>
            </Grid>
          ))}
      </Grid>
      <Box sx={{ textAlign: 'center', mt: '30px' }}>
        <ButtonBase sx={styles.LodeMore}>Load More</ButtonBase>
      </Box>
    </Box>
  );
};

export default Video;
