//Packages
import { Box, Grid, List, ListItem, Typography, Slack } from '@mui/material';
import Link from 'next/link';
import { Icon } from '@iconify/react';

//data
import Teams from 'Data/Contact/Team.data';

const Team = () => {
  return (
    <Box>
      <Typography variant="h4" component="h4">
        Contact Cabbage
      </Typography>
      <Typography variant="body1" component="p">
        Cabbage has not any contact info. You can contact any of our team
        members.
      </Typography>
      {Teams?.length > 0 && (
        <List>
          {Teams.map((team, i) => (
            <ListItem key={i}>
              <Grid container spacing={3}>
                <Grid item md={3}>
                  <Typography
                    component="img"
                    src={team.image}
                    alt="AboutImage"
                    width="100%"
                  />
                  <Typography variant="body1" component="p">
                    <Link href={team.website}>
                      <a>{team.website}</a>
                    </Link>
                  </Typography>
                </Grid>
                <Grid item md={9}>
                  <Typography variant="h4" component="h4">
                    {team.name}
                  </Typography>
                  <Typography variant="h6" component="h6">
                    {team.occupation}
                  </Typography>
                  <Typography variant="body" component="p">
                    {team.about}
                  </Typography>
                  {team.socials?.length > 0 && (
                    <Box component={Slack}>
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
