//Packages
import { Container, Grid } from '@mui/material';
//Layout
import Layout from 'Layout';

//Components
import Title from 'Components/About/Title';
import Vector from 'Components/About/Vector';
import Project from 'Components/About/Project';
import AboutInfo from 'Components/About/AboutInfo';

const About = () => {
  return (
    <Layout activePage="about">
      <Container maxWidth={false} disableGutters component="section">
        <Title />
        <Grid container columnSpacing={2}>
          <Grid item md={6}>
            <Vector />
          </Grid>
          <Grid item md={6}>
            <AboutInfo />
          </Grid>
        </Grid>
        <Project />
      </Container>
    </Layout>
  );
};

export default About;
