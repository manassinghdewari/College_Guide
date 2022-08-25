import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";
// firebase
// import GoogleButton from "react-google-button";
// import { UserAuth } from '../GoogleAuth/Context/AuthContext';
import { useNavigate } from "react-router-dom";
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { auth } from '../GoogleAuth/Firebase';
import { BASE_URL } from "../../api/UseFetch";

const theme = createTheme();

export default function SignIn() {
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // firebase component start
  // const {googleSignIn,user} =UserAuth();

  // const handleGoogleSignIn=async ()=>{
  //   dispatch(loginStart());
  //   const provider= new GoogleAuthProvider();
  // try{
  //    signInWithPopup(auth,provider)
  //   console.log(data)
  //   dispatch(loginSuccess(data));
  // } catch(error){
  //     dispatch(loginFailure(error));
  // }
  //     signInWithPopup(auth,provider).then((res)=>
  //     dispatch(loginSuccess(res.data)));
  // }
  useEffect(() => {
    if (currentUser != null) {
      navigate("/");
    }
  }, [currentUser]); //useEffect will run each time when user will change
  // firebase component end

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(loginStart());
    try {
      const { data } = await axios.post(
        "/auth/login",
        
        formData
      );
      dispatch(loginSuccess(data));

      navigate("/");
    } catch (error) {
      dispatch(loginFailure(error));
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
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label=" Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              className="btn1"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Typography
              align="center"
              component="h1"
              variant="h7"
              sx={{ m: 1 }}
            >
              OR
            </Typography>
            {/* variant="contained" */}
            {/* <GoogleButton
              fullWidth
              color="primary"
              //  onClick={handleGoogleSignIn}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In with Google
            </GoogleButton> */}
            <Grid container>
              <Grid item xs>
                <Link to="/">
                  <Typography variant="body2">Forgot password</Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link to="/signup">
                  <Typography variant="body2">
                    Don't have an account? Sign Up
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
