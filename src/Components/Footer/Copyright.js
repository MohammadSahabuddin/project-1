import { Box, Stack, Typography } from '@mui/material';

//iconify
import { Icon } from '@iconify/react';

const Copyright = () => {
  return (
    <Box>
      <Stack direction="row">
        <Icon icon="charm:copyright" />
        <Typography variant="body1" component="p">
          {new Date().getFullYear()} BD, All right reserved
        </Typography>
      </Stack>
    </Box>
  );
};

export default Copyright;
