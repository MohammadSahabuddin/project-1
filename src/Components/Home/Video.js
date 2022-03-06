//Packages
import {
  Box,
  ButtonBase,
  CircularProgress,
  Grid,
  Typography,
} from '@mui/material';

//Redux
import { useSelector, useDispatch } from 'react-redux';
import { getVideos } from 'Redux/Actions/videoAction';

//styles
import styles from 'Styles/Home/Video.styles';

const Video = ({ setCurrent, videoList }) => {
  const { hasNextPage, nextPageToken, loading } = useSelector(
    (state) => state.videoInfo
  );
  const videoOnClick = (i) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrent(i);
  };
  const dispatch = useDispatch();
  const loadMore = () => {
    dispatch(getVideos(nextPageToken));
  };
  return (
    <Box sx={{ mt: '20px' }}>
      <Grid container spacing={2}>
        {videoList?.length > 0 &&
          videoList.map((video, i) => (
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
        {loading && (
          <CircularProgress size={25} sx={{ color: 'primary.main' }} />
        )}
        {hasNextPage && !loading && (
          <ButtonBase sx={styles.LodeMore} onClick={loadMore}>
            Load More
          </ButtonBase>
        )}
      </Box>
    </Box>
  );
};

export default Video;
