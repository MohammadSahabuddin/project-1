//PAckages
import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import Link from 'next/link';

//Data
import Projects from 'Data/About/Project.data';

//Styles
import styles from 'Styles/About/Project.style';

const Project = () => {
  return (
    <Box sx={styles.Project}>
      <Typography variant="h5" component="h5">
        Projects
      </Typography>
      <List>
        {Projects?.length > 0 &&
          Projects.map((project, i) => (
            <ListItem key={i}>
              <Grid container spacing={3}>
                <Grid item msm={8} xxs={12}>
                  <Typography variant="body1" component="p">
                    {project.title}
                  </Typography>
                </Grid>
                <Grid item msm={2} xxs={6}>
                  <Typography variant="body1" component="p">
                    {project.category}
                  </Typography>
                </Grid>
                <Grid item msm={2} xxs={6} sx={styles.Download}>
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
