//Packages
import { Container, Grid } from '@mui/material';
//Layout
import Layout from 'Layout';
//SEO
import Seo from 'Utils/Seo';

//Components
import Title from 'Components/About/Title';
import Vector from 'Components/About/Vector';
import Project from 'Components/About/Project';
import AboutInfo from 'Components/About/AboutInfo';

const About = () => {
  return (
    <Layout activePage="about">
      <Seo title="About | Codeforest24" />
      <Container maxWidth={false} disableGutters component="section">
        <Title />
        <Grid container columnSpacing={2} sx={{ alignItems: 'center' }}>
          <Grid item md={6}>
            <Vector />
          </Grid>
          <Grid item md={6} sx={{ mt: '-10' }}>
            <AboutInfo />
          </Grid>
        </Grid>
        <Project />
      </Container>
    </Layout>
  );
};

export default About;
