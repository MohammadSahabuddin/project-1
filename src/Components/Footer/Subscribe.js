//mui
import { ButtonBase, Typography, Box, Stack } from '@mui/material';

import Link from 'next/link';
//iconify
import { Icon } from '@iconify/react';

//styles
import styles from 'Styles/Footer/Subscribe.style';

const Subscribe = () => {
  return (
    <Box sx={styles.subscribe}>
      <Link href="http://youtube.com">
        <a target="_blank">
          <ButtonBase component={Stack} direction="row" sx={styles.Button}>
            <Icon icon="akar-icons:youtube-fill" />
            <Typography variant="body1" component="p" sx={styles.Text}>
              Subscribe
            </Typography>
          </ButtonBase>
        </a>
      </Link>
    </Box>
  );
};

export default Subscribe;
