//packages
import { Box, ButtonBase, List, ListItem, Stack } from '@mui/material';
import Link from 'next/link';

//Data
import Navs from 'Data/Header/nav.data';

//Styles
import styles from 'Styles/Header/Nav.styles';

const Nav = ({ activePage }) => {
  return (
    <Box>
      <List component={Stack} direction="row" sx={{ justifyContent: 'center' }}>
        {Navs &&
          Navs.map((nav, i) => (
            <ListItem key={i} sx={styles.ListItem}>
              <Link href={nav.url}>
                <a className={activePage === nav.id ? 'active' : ''}>
                  <ButtonBase>{nav.name}</ButtonBase>
                </a>
              </Link>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default Nav;
