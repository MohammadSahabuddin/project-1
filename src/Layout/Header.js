//packages
import { Container, Grid } from '@mui/material';

//Components
import Button from 'Components/Header/Button';
import Logo from 'Components/Header/Logo';
import Nav from 'Components/Header/Nav';

const Header = ({ activePage }) => {
  return (
    <Container maxWidth={false} disableGutters component="header">
      <Grid container columnSpacing={2}>
        <Grid item md={2}>
          <Logo />
        </Grid>
        <Grid item md={8}>
          <Nav activePage={activePage} />
        </Grid>
        <Grid item md={2}>
          <Button />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
