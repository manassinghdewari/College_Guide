import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function CitySelect() {
    const [City, setCity] = React.useState('');
  
    const handleChange = (event) => {
      setCity(event.target.value);
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={City}
            label="City"
            onChange={handleChange}
          >
            <MenuItem value={'Bangalore'}>Bangalore</MenuItem>
            <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
            <MenuItem value={'NewDelhi'}>New Delhi</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }

  function CourseSelect() {
    const [Course, setCourse] = React.useState('');
  
    const handleChange = (event) => {
      setCourse(event.target.value);
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Course</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Course}
            label="Course"
            onChange={handleChange}
          >
            <MenuItem value={'B.Tech'}>B.Tech</MenuItem>
            <MenuItem value={'B.Sc'}>B.Sc</MenuItem>
            <MenuItem value={'MBA'}>MBA</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography 
          className="text-center pt-3"
          component="h1" 
          variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Enter Username"
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Enter Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required='true'
                  fullWidth
                  type="number"
                  inputProps={{ maxLength: 10 }}
                  id="phoneno"
                  label="Enter Contact No."
                  name="email"
                  autoComplete="phone-number"
                  errorText="Please Enter only 10 digits number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <CitySelect/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CourseSelect/>
              </Grid>
            
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmpassword"
                  label="Confirm your Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Remember Me"
                />
              </Grid>
            </Grid>
            <Button
              className='btn1'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Typography align="center" component="h1" variant="h7" sx={{ m:1,}}>
                 OR
          </Typography>
            <Button 
            className='btn1'
            variant="contained"
            fullWidth
             color="primary"
             sx={{ mt: 3, mb: 2 }}>
                Sign up with Google 
             </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin" variant="body2">
                <Typography variant="body2">
                Already have an account? Sign in
                </Typography>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}