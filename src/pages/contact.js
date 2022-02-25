//Packages
import { Container, Grid } from '@mui/material';

//Layout
import Layout from 'Layout';

//Components
import Title from 'Components/Contact/Title';
import Vector from 'Components/Contact/Vector';
import Map from 'Components/Contact/Map';
import Team from 'Components/Contact/Team';

const Contact = () => {
  return (
    <Layout activePage="contact">
      <Container maxWidth={false} disableGutters component="section">
        <Title />
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Vector />
          </Grid>
          <Grid item md={6}>
            <Map />
          </Grid>
        </Grid>
        <Team />
      </Container>
    </Layout>
  );
};

export default Contact;
