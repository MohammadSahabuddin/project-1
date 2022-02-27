import { Box } from '@mui/material';
import Link from 'next/link';

//Logo
import Logos from 'Assets/codeforest24.png';

//Styles
import styles from 'Styles/Header/Logo.styles';

const Logo = () => {
  return (
    <Box>
      <Link href="https://www.youtube.com/shorts/2r3mtUzSYWQ">
        <a target="_blank">
          <Box sx={styles.Logo} component="img" src={Logos} alt="Logo" />
        </a>
      </Link>
    </Box>
  );
};

export default Logo;
