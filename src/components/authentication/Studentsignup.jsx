import React, { useState } from "react";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  MenuItem,
  FormControlLabel,
  Select,
  FormControl,
  InputLabel,
  Container,
  Checkbox,
} from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../api/UseFetch";
// import GoogleButton from 'react-google-button'

function CitySelect() {
  const [City, setCity] = useState("");

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
          <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
          <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
          <MenuItem value={"NewDelhi"}>New Delhi</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

function CourseSelect() {
  const [Course, setCourse] = useState("");

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
          <MenuItem value={"B.Tech"}>B.Tech</MenuItem>
          <MenuItem value={"B.Sc"}>B.Sc</MenuItem>
          <MenuItem value={"MBA"}>MBA</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [formData, setFormData] = React.useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);

    try {
      const { data } = await axios.post(
        `${BASE_URL}/auth/registerUser`,
        formData
      );
      console.log({ user: data });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "blue" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className="text-center pt-3" component="h1" variant="h5">
            Register
          </Typography>

          {/* <GoogleButton className="google-button"
             onClick={() => { console.log('Google button clicked') }}
            /> */}
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Enter Username"
                  name="username"
                  onChange={handleChange}
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
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required="true"
                  fullWidth
                  type="number"
                  inputProps={{ maxLength: 10 }}
                  label="Enter Contact No."
                  name="phoneno"
                  onChange={handleChange}
                  autoComplete="phone-number"
                  errorText="Please Enter only 10 digits number"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CitySelect />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CourseSelect />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  // autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm your Password"
                  type="password"
                  id="password"
                  onChange={handleChange}
                  // autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="Remember Me"
                />
              </Grid>
            </Grid>
            <Button
              className="btn1"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
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
