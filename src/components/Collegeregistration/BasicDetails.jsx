import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../api/UseFetch";
import { useDispatch } from "react-redux";
import {
  fetchFailure,
  fetchStart,
  fetchSuccess,
} from "../../redux/collegeRegSlice";
// function CitySelect() {
//   const [City, setCity] = React.useState("");

//   const handleChange = (event) => {
//     setCity(event.target.value);
//   };

//   return (
//     <FormControl fullWidth>
//       <InputLabel id="demo-simple-select-label">City*</InputLabel>
//       <Select
//         required
//         labelId="demo-simple-select-label"
//         id="demo-simple-select"
//         value={City}
//         label="City"
//         onChange={(event) => handleChange(event)}
//       >
//         <MenuItem value={"Bangalore"}>Bangalore</MenuItem>
//         <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
//         <MenuItem value={"NewDelhi"}>New Delhi</MenuItem>
//       </Select>
//     </FormControl>
//   );
// }
// function StateSelect() {
//   const [State, setState] = React.useState("");

//   const handleChangeState = (event) => {
//     setState(event.target.value);
//   };

//   return (
//     <FormControl fullWidth>
//       <InputLabel id="demo-simple-select-label">State*</InputLabel>
//       <Select
//         required
//         labelId="demo-simple-select-label"
//         id="demo-simple-select"
//         value={State}
//         label="State"
//         onChange={(event) => handleChangeState(event)}
//       >
//         <MenuItem value={"Karnataka"}>Bangalore</MenuItem>
//         <MenuItem value={"Maharashtra"}>Mumbai</MenuItem>
//         <MenuItem value={"Delhi"}>New Delhi</MenuItem>
//       </Select>
//     </FormControl>
//   );
// }
const BasicDetails = () => {
  const [Details, setDetails] = React.useState("");
  const [address, setAddress] = React.useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChangeDetails = (event) => {
    setDetails((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChangeAddress = (e) => {
    setAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      dispatch(fetchStart());
      const { data } = await axios.post("/college", Details);
      const collegeId = data.newCollege._id;
      dispatch(fetchSuccess(collegeId));
      //for address
      try {
        const res = await axios.post(`/address/${collegeId}`, address);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      dispatch(fetchFailure(error));
    }
  };

  return (
    <>
      <React.Fragment>
        <Typography variant="h3" gutterBottom align="center">
          Basic Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="outlined-required"
              label="Email Address"
              fullWidth
              name="email"
              onChange={handleChangeDetails}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="outlined-required"
              label="NIRF Id"
              name="nirf_id"
              fullWidth
              onChange={handleChangeDetails}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="outlined-required"
              label="Name of College"
              name="name"
              fullWidth
              onChange={handleChangeDetails}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="outlined-required"
              label="Contact No."
              name="telephone"
              fullWidth
              onChange={handleChangeDetails}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="outlined-required"
              label="NIRF Rank"
              name="rank"
              fullWidth
              onChange={handleChangeDetails}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="outlined-required"
              label="Website Link"
              fullWidth
              onChange={handleChangeDetails}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="outlined-required"
              label="Video Link"
              name="video"
              fullWidth
              onChange={handleChangeDetails}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="outlined-required"
              label="Complete Address of College"
              fullWidth
              name="addressLine"
              onChange={handleChangeAddress}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <CitySelect /> */}
            <TextField
              required
              id="outlined-required"
              label="City"
              fullWidth
              name="city"
              onChange={handleChangeAddress}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <StateSelect /> */}
            <TextField
              required
              id="outlined-required"
              label="State"
              fullWidth
              name="state"
              onChange={handleChangeAddress}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="outlined-required"
              label="PIN Code"
              fullWidth
              name="pincode"
              onChange={handleChangeAddress}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" display="block" gutterBottom>
              Upload Cover Photo*
            </Typography>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1" display="block" gutterBottom>
              Upload College Logo(100px*100px)
            </Typography>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" component="label">
              Upload Brochure*
              <input hidden accept="file/*" multiple type="file" />
            </Button>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
        <Button onClick={handleSubmit}>Next</Button>
      </React.Fragment>
    </>
  );
};
export default BasicDetails;
