//Packages
import { Container, Grid } from '@mui/material';
//Layout
import Layout from 'Layout';
//SEO
import Seo from 'Utils/Seo';

//Components
import Title from 'Components/Contact/Title';
import Vector from 'Components/Contact/Vector';
import Map from 'Components/Contact/Map';
import Team from 'Components/Contact/Team';

const Contact = () => {
  return (
    <Layout activePage="contact">
      <Seo title="Contact | Codeforest24" />
      <Container maxWidth={false} disableGutters component="section">
        <Title />
        <Grid container spacing={2}>
          <Grid item md={7}>
            <Vector />
          </Grid>
          <Grid item md={5}>
            <Map />
          </Grid>
        </Grid>
        <Team />
      </Container>
    </Layout>
  );
};

export default Contact;
