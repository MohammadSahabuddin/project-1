//mui
import { ButtonBase, Typography, Box, Stack } from '@mui/material';

import Link from 'next/link';
//iconify
import { Icon } from '@iconify/react';

const Subscribe = () => {
  return (
    <Box>
      <Link href="http://youtube.com">
        <a target="_blank">
          <ButtonBase component={Stack} direction="row">
            <Icon icon="entypo-social:youtube" />
            <Typography variant="body1" component="p">
              Subscribe
            </Typography>
          </ButtonBase>
        </a>
      </Link>
    </Box>
  );
};

export default Subscribe;
