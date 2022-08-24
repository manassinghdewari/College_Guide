import React, { useState } from "react";
import {Link} from 'react-router-dom';
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
  FormControlLabel,
  Container,
  Checkbox,
} from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../api/UseFetch";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        College Guide
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


const theme = createTheme();

export default function Collegeregistration() {
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
                  id="nirfid"
                  label="Enter Nirf ID"
                  name="nirfid"
                  onChange={handleChange}
                />
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
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}