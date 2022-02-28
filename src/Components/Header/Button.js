//iconify
import { Icon } from '@iconify/react';
import { Box } from '@mui/material';
import Link from 'next/link';

//Styles
import styles from 'Styles/Header/Button.styles';

const Button = () => {
  return (
    <Box sx={styles.Button}>
      <Link href="https://youtu.be/EjK30GuYgJ4">
        <a target="_blank">
          <Icon icon="ant-design:youtube-filled" />
        </a>
      </Link>
    </Box>
  );
};

export default Button;
