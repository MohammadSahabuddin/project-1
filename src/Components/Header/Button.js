//iconify
import { Icon } from '@iconify/react';
import { Box } from '@mui/material';
import Link from 'next/link';

//Styles
import styles from 'Styles/Header/Button.styles';

const Button = () => {
  return (
    <Box sx={styles.Button}>
      <Link href="https://www.youtube.com/shorts/2r3mtUzSYWQ">
        <a target="_blank">
          <Icon icon="entypo-social:youtube" />
        </a>
      </Link>
    </Box>
  );
};

export default Button;
