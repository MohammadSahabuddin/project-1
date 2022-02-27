//packages
import { Container, Grid } from '@mui/material';
//Layout
import Layout from 'Layout';

//components
import Player from 'Components/Home/Player';
import Brand from 'Components/Home/Brand';
import Video from 'Components/Home/Video';

export default function Home() {
  return (
    <Layout activePage="home">
      <Container
        maxWidth={false}
        disableGutters
        component="section"
        sx={{ p: '30px' }}
      >
        <Grid container spacing={2}>
          <Grid item md={8}>
            <Player />
          </Grid>
          <Grid item md={4}>
            <Brand />
          </Grid>
        </Grid>
        <Video />
      </Container>
    </Layout>
  );
}
