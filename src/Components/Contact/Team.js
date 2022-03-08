//Packages
import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Link from 'next/link';
import { Icon } from '@iconify/react';

//data
import Teams from 'Data/Contact/Team.data';

//styles
import styles from 'Styles/Contact/Team.style';

const Team = () => {
  return (
    <Box sx={styles.Team}>
      <Typography variant="h5" component="h5">
        Team Members
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{ mb: '30px', fontSize: '18px' }}
      >
        Code Forest 24 has not any contact info. You can contact any of our team
        members.
      </Typography>
      {Teams?.length > 0 && (
        <List>
          {Teams.map((team, i) => (
            <ListItem key={i} sx={{ p: '0' }}>
              <Grid container spacing={3}>
                <Grid item md={2} smd={4} lsm={5} msm={6} sm={7} xxs={12}>
                  <Typography
                    component="img"
                    src={team.image}
                    alt="AboutImage"
                    width="100%"
                    sx={{ borderRadius: '3px' }}
                  />
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ textAlign: 'center' }}
                  >
                    <Link href={team.website} passHref>
                      <A
                        sx={{
                          textDecoration: 'none',
                          cursor: 'pointer',
                          color: 'primary.link_color',
                        }}
                      >
                        {team.website}
                      </A>
                    </Link>
                  </Typography>
                </Grid>
                <Grid item md={10} xxs={12}>
                  <Typography variant="h4" component="h5">
                    {team.name}
                  </Typography>
                  <Typography variant="h6" component="h6">
                    {team.occupation}
                  </Typography>
                  <Typography variant="body" component="p" sx={styles.Text}>
                    {team.about}
                  </Typography>
                  {team.socials?.length > 0 && (
                    <Box sx={styles.Icons}>
                      {team.socials.map((s, i) => (
                        <Link key={i} href={s.social}>
                          <a>
                            <Icon icon={s.icon} />
                          </a>
                        </Link>
                      ))}
                    </Box>
                  )}
                </Grid>
              </Grid>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default Team;

const A = styled('a')``;
