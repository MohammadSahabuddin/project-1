//packages
import { Box, Typography } from '@mui/material';
//logo
import Logo from 'Assets/virtualUniversityBd.png';
//iconify
import { Icon } from '@iconify/react';
const Brand = () => {
  return (
    <Box>
      <Box component="img" src={Logo} width="100%" />
      <Typography variant="h6" component="h6">
        Love to hear naate a Rasool
      </Typography>
      <Box>
        <Icon className="first" icon="bi:chevron-down" />
        <Icon className="second" icon="bi:chevron-down" />
        <Icon className="third" icon="bi:chevron-down" />
      </Box>
    </Box>
  );
};

export default Brand;
