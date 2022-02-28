import { Box } from '@mui/material';
import AboutImage from 'Assets/About.jpg';

const Vector = () => {
  return (
    <Box>
      <Box
        component="img"
        src={AboutImage}
        alt="AboutImage"
        width="100%"
        sx={{ borderRadius: '3px' }}
      />
    </Box>
  );
};

export default Vector;
