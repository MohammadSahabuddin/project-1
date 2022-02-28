//Packages
import { Box } from '@mui/material';

//logo
import ContactImage from 'Assets/Contact.jpg';

const Vector = () => {
  return (
    <Box>
      <Box
        component="img"
        src={ContactImage}
        alt="ContactImage"
        width="100%"
        sx={{ borderRadius: '3px' }}
      />
    </Box>
  );
};

export default Vector;
