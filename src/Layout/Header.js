//packages
import { Container, Grid } from '@mui/material';

//Components
import Button from 'Components/Header/Button';
import Logo from 'Components/Header/Logo';
import Navbutton from 'Components/Header/Navbutton';
import Nav from 'Components/Header/Nav';

//Styles
import styles from 'Styles/Header/Header.style';

const Header = ({ activePage }) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      component="header"
      sx={{ py: '5px' }}
    >
      <Grid container columnSpacing={2} sx={{ alignItems: 'center' }}>
        <Grid item md={2} smd={3} xxs={6}>
          <Logo />
        </Grid>
        <Grid item md={8} smd={9} sx={styles.Nav}>
          <Nav activePage={activePage} />
        </Grid>
        <Grid item xxs={6} sx={styles.Navbutton}>
          <Navbutton activePage={activePage} />
        </Grid>
        <Grid item md={2} sx={styles.Button}>
          <Button />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
