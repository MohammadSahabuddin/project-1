import { Box, Stack, Typography } from '@mui/material';

//iconify
import { Icon } from '@iconify/react';

//styles
import styles from 'Styles/Footer/Copyright.style';

const Copyright = () => {
  return (
    <Box>
      <Stack direction="row" sx={styles.Copyright}>
        <Icon icon="charm:copyright" />
        <Typography variant="body1" component="p">
          {new Date().getFullYear()} BD, All right reserved
        </Typography>
      </Stack>
    </Box>
  );
};

export default Copyright;
