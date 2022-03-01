//Packages
import { Box, Typography } from '@mui/material';

//Styles
import styles from 'Styles/About/AboutInfo.style';

const AboutInfo = () => {
  return (
    <Box sx={styles.Info}>
      <Typography variant="h4" component="h4">
        Code Forest 24
      </Typography>
      <Typography variant="h6" component="h6">
        The fearless programming
      </Typography>
      <Typography variant="body1" component="p">
        <br />
        Code Forest 24 is an organization of building websites. We have a group
        of Professional Developer thats run by enthusiasts for coding our
        process requirement & brief research development.
        <br />
        <br />
        Our values align with our mission and thats is to support our customers.
        Why would you choose us? Because we create quality-ful work and
        SEO-friendly websites that are quickly optimized. We mainly use for
        developing is next.js, node.js, express.js, graphql, etc. Dont hesitate
        to ask any questions if you have any.
        <br />
        <br />
        So why do you think? visit our website and be a part of our family.
      </Typography>
    </Box>
  );
};

export default AboutInfo;
