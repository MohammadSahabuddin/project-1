//Packages
import { Box, Typography } from '@mui/material';

//styles
import styles from 'Styles/Common/Title.style';

const Title = () => {
  return (
    <Box sx={styles.Title}>
      <Typography variant="h5" component="h5">
        RequestContent
      </Typography>
    </Box>
  );
};

export default Title;
