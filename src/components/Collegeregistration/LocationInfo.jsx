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
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFailure,
  fetchStart,
  fetchSuccess,
} from "../../redux/collegeRegSlice";
import { startTransition } from "react";
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
const LocationInfo = () => {
  // const [Details, setDetails] = React.useState("");
  const navigate = useNavigate();
  const [address, setAddress] = React.useState({});
  // const navigate = useNavigate();
  const { collegeId } = useSelector((state) => state.collegeId);

  const handleChangeAddress = (e) => {
    setAddress((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    //for address
    try {
      const res = await axios.post(`/address/${collegeId}`, address);

      navigate("/collegeRegistration/alumni");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <React.Fragment>
        <div className="items-center justify-center text-center flex">
          <div className="w-3/4 text-center">
            <Typography variant="h3" gutterBottom align="center">
              Location Info
            </Typography>
            <Grid
              className="text-center justify-center items-center"
              container
              spacing={3}
            >
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

              <Grid item xs={12}></Grid>
            </Grid>
            <Button onClick={handleSubmit}>Next</Button>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};
export default LocationInfo;
