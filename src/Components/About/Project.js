//PAckages
import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import Link from 'next/link';

//Data
import Projects from 'Data/About/Project.Data';

const Project = () => {
  return (
    <Box>
      <Typography variant="h5" component="h5">
        Projects
      </Typography>
      <List>
        {Projects?.length > 0 &&
          Projects.map((project, i) => (
            <ListItem key={i}>
              <Grid container spacing={3}>
                <Grid item md={8}>
                  <Typography variant="body1" component="p">
                    {project.title}
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography variant="body1" component="p">
                    {project.category}
                  </Typography>
                </Grid>
                <Grid item md={2}>
                  <Typography variant="body1" component="p">
                    <Link href={project.download}>
                      <a>Download</a>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default Project;
