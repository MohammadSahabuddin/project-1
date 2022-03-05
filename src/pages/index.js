import { useState } from 'react';
//packages
import { Container, Grid } from '@mui/material';
//Layout
import Layout from 'Layout';

//SEO
import Seo from 'Utils/Seo';

//Redux
import { getVideos } from 'Redux/Actions/videoAction';
import { wrapper } from 'Redux/store';

//components
import Player from 'Components/Home/Player';
import Brand from 'Components/Home/Brand';
import Video from 'Components/Home/Video';

export default function Home() {
  const [current, setCurrent] = useState(0); //0=> first video will show in player
  return (
    <Layout activePage="home">
      <Seo title="Home | Codeforest24" />
      <Container maxWidth={false} disableGutters component="section">
        <Grid container spacing={2}>
          <Grid item md={8}>
            <Player current={current} />
          </Grid>
          <Grid item md={4}>
            <Brand />
          </Grid>
        </Grid>
        <Video setCurrent={setCurrent} />
      </Container>
    </Layout>
  );
}

//serverSide data fetching

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    await store.dispatch(getVideos());
  }
);
