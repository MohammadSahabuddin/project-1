//packages
import { Box, ButtonBase, List, ListItem, Stack } from '@mui/material';
import Link from 'next/link';

//Data
import Navs from 'Data/Header/nav.data';

const Nav = ({ activePage }) => {
  return (
    <Box>
      <List component={Stack} direction="row">
        {Navs &&
          Navs.map((nav, i) => (
            <ListItem key={i}>
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
