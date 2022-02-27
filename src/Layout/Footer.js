import { Container, Grid } from '@mui/material';

//components
import Subscribe from 'Components/Footer/Subscribe';
import Copyright from 'Components/Footer/Copyright';

const Footer = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      component="footer"
      sx={{ py: '10px' }}
    >
      <Grid container columnSpacing={2} sx={{ alignItems: 'center' }}>
        <Grid item md={6}>
          <Subscribe />
        </Grid>
        <Grid item md={6}>
          <Copyright />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
