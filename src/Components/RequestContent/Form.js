//Packages
import { Box, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  console.log(watch('example'));
  return (
    <Box>
      <Typography variant="h5" component="h5">
        Please fill up the form!
      </Typography>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={3}>
          <Grid item md={6}>
            <TextField
              fullWidth={true}
              required
              id="name"
              label="Name"
              variant="outlined"
              {...register('Name', {
                maxLength: 80,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            <Typography variant="body1" component="p">
              **We will not publish your Name
            </Typography>
            {errors?.Name?.type === 'maxLength' && (
              <Typography variant="body1" component="p">
                First name cannot exceed 20 characters
              </Typography>
            )}
            {errors?.Name?.type === 'pattern' && (
              <Typography variant="body1" component="p">
                Alphabetical characters only
              </Typography>
            )}
          </Grid>
          <Grid item md={6}>
            <TextField
              fullWidth={true}
              required
              id="email"
              label="Email"
              variant="outlined"
              {...register('Email', {
                pattern: /^\S+@\S+$/i,
              })}
            />
            <Typography variant="body1" component="p">
              **We will not publish your Email
            </Typography>
            {errors?.Email?.type === 'pattern' && (
              <Typography variant="body1" component="p">
                input a valid email
              </Typography>
            )}
          </Grid>
          <Grid item md={12}>
            <TextField
              fullWidth={true}
              required
              id="outlined-multiline-static"
              label="What you want?"
              multiline
              rows={4}
              {...register('About')}
            />
            <Typography variant="body1" component="p">
              **You can attach file by giving their link
            </Typography>
          </Grid>
        </Grid>
        <input type="submit" />
      </Box>
    </Box>
  );
};

export default Form;
