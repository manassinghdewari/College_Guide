import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';


function CitySelect() {
    const [City, setCity] = React.useState('');
  
    const handleChange = (event) => {
      setCity(event.target.value);
    };
  
    return (
      
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">City*</InputLabel>
          <Select
          required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={City}
            label="City"
            onChange={event => handleChange(event)}
          >
            <MenuItem value={'Bangalore'}>Bangalore</MenuItem>
            <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
            <MenuItem value={'NewDelhi'}>New Delhi</MenuItem>
          </Select>
        </FormControl>
      
    );
  }
  function StateSelect() {
    const [State, setState] = React.useState('');
  
    const handleChangeState = (event) => {
      setState(event.target.value);
    };
  
    return (
        
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">State*</InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={State}
            label="State"
            onChange={event => handleChangeState(event)}
          >
            <MenuItem value={'Karnataka'}>Bangalore</MenuItem>
            <MenuItem value={'Maharashtra'}>Mumbai</MenuItem>
            <MenuItem value={'Delhi'}>New Delhi</MenuItem>
          </Select>
        </FormControl>
      
    );
  }
  const BasicDetails =()=> {
    const [Details, setDetails] = React.useState('');
  
    const handleChangeDetails = (event) => {
      setDetails(event.target.value);
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
          onChange={event => handleChangeDetails(event)}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="outlined-required"
          label="NIRF Id"
          fullWidth
          onChange={event => handleChangeDetails(event)}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="Name of College"
          fullWidth
          onChange={event => handleChangeDetails(event)}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="outlined-required"
          label="Contact No."
          fullWidth
          onChange={event => handleChangeDetails(event)}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="outlined-required"
          label="NIRF Rank"
          fullWidth
          onChange={event => handleChangeDetails(event)}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="outlined-required"
          label="Website Link"
          fullWidth
          onChange={event => handleChangeDetails(event)}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="outlined-required"
          label="Video Link"
          fullWidth
          onChange={event => handleChangeDetails(event)}
        />
        </Grid>
        <Grid item xs={12}>
        <TextField
          required
          id="outlined-required"
          label="Complete Address of College"
          fullWidth
          onChange={event => handleChangeDetails(event)}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <CitySelect/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <StateSelect/>
        </Grid>
        <Grid item xs={12} sm={6}>
        <TextField
          required
          id="outlined-required"
          label="PIN Code"
          fullWidth
          onChange={event => handleChangeDetails(event)}
        />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Typography variant="body1" display="block" gutterBottom>
        Upload Cover Photo*
      </Typography>
        <IconButton color="primary" aria-label="upload picture" component="label">
  <input hidden accept="image/*" type="file" />
  <PhotoCamera />
</IconButton>
</Grid>
<Grid item xs={12} sm={6}>
        <Typography variant="body1" display="block" gutterBottom>
        Upload College Logo(100px*100px)
      </Typography>
        <IconButton color="primary" aria-label="upload picture" component="label">
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
  <Grid item xs={12}>
    
  </Grid>
      </Grid>
    </React.Fragment>
    </>
  );
}
export default BasicDetails;