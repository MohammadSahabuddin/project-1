//Packages
import { Box, ButtonBase, Grid, Typography } from '@mui/material';
import Link from 'next/link';

//Data
import Videos from 'Data/Dummy/videos.data';

//styles
import styles from 'Styles/Home/Video.styles';

const Video = () => {
  return (
    <Box sx={{ mt: '20px' }}>
      <Grid container spacing={3}>
        {Videos?.length > 0 &&
          Videos.map((video, i) => (
            <Grid item md={3} key={i}>
              <Box sx={styles.videos}>
                <Link href={video.link}>
                  <a target="_blank">
                    <Box
                      component="img"
                      src={video.image}
                      alt={video.alt}
                      width="100%"
                    />
                    <Typography variant="h5" component="h5">
                      {video.title}
                    </Typography>
                  </a>
                </Link>
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
