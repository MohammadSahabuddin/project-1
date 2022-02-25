import { Box } from '@mui/material';
import Link from 'next/link';

//Logo
import Logos from 'Assets/codeforest24.png';

const Logo = () => {
  return (
    <Box>
      <Link href="https://www.youtube.com/channel/UCl7VXfWmAhSl5Q3uGxuHVlg">
        <a target="_blank">
          <Box component="img" src={Logos} alt="Logo" sx={{ width: '100%' }} />
        </a>
      </Link>
    </Box>
  );
};

export default Logo;
