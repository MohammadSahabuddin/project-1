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
        Code Forest 24 is a fearless programming platform. Here you can find web
        based tutorial and full web development courses:)
        <br />
        <br />
        Programming is the best in demand job in the world. Web programming is
        also the another field to create life more easier. And make money by
        working less than a hour more and more. Freelancing is one of them:)
        <br />
        <br />
        We are here for learn you all the type of programming you want learn.
        Learn from Node js to Next js, solve all type of difficulties and
        problem. Stay with us and make the day more happier:)
      </Typography>
    </Box>
  );
};

export default AboutInfo;
