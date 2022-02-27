//packages
import { Box, Typography } from '@mui/material';
//logo
import Logo from 'Assets/codeforest24.png';
//iconify
import { Icon } from '@iconify/react';
//styles
import styles from 'Styles/Home/Brand.styles';
const Brand = () => {
  return (
    <Box sx={{ textAlign: 'center', mt: '36%' }}>
      <Box component="img" src={Logo} width="55%" />
      <Typography variant="h6" component="h6" sx={styles.Slogan}>
        I love Allah & Mohammad (SM.)
      </Typography>
      <Box sx={styles.Arrow}>
        <Icon className="first" icon="bi:chevron-down" />
        <Icon className="second" icon="bi:chevron-down" />
        <Icon className="third" icon="bi:chevron-down" />
      </Box>
    </Box>
  );
};

export default Brand;
