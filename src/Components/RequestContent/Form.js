//Packages
import { Box, ButtonBase, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';

//styles
import styles from 'Styles/RequestContent/Form.style';

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
    <Box sx={styles.Form}>
      <Typography variant="h5" component="h5">
        Please fill up the form!
      </Typography>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={3}>
          <Grid item sm={6} xxs={12}>
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
              sx={styles.TextField}
            />
            {errors?.Name?.type !== 'maxLength' &&
              errors?.Name?.type !== 'pattern' && (
                <Typography variant="body1" component="p" sx={styles.Text}>
                  **We will not publish your Name
                </Typography>
              )}

            {errors?.Name?.type === 'maxLength' && (
              <Typography variant="body1" component="p" sx={styles.Error}>
                **Name cannot exceed 20 characters
              </Typography>
            )}
            {errors?.Name?.type === 'pattern' && (
              <Typography variant="body1" component="p" sx={styles.Error}>
                **Alphabetical characters only
              </Typography>
            )}
          </Grid>
          <Grid item sm={6} xxs={12}>
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
            {errors?.Email?.type !== 'pattern' && (
              <Typography variant="body1" component="p" sx={styles.Text}>
                **We will not publish your Email
              </Typography>
            )}
            {errors?.Email?.type === 'pattern' && (
              <Typography variant="body1" component="p" sx={styles.Error}>
                **input a valid email
              </Typography>
            )}
          </Grid>
          <Grid item xxs={12}>
            <TextField
              fullWidth={true}
              required
              id="outlined-multiline-static"
              label="What you want?"
              multiline
              rows={4}
              {...register('About')}
            />
            <Typography variant="body1" component="p" sx={styles.Text}>
              **You can attach file by giving their link
            </Typography>
            <ButtonBase type="submit" sx={styles.Button}>
              Submit
            </ButtonBase>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Form;
