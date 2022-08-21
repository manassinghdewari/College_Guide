import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import './Streamselect.css'
import { Box } from '@material-ui/core';import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



function Streamlist() {
    const [Stream, setStream] = React.useState('');
  
    const handleChange = (event) => {
      setStream(event.target.value);
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Stream</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={Stream}
            label="Select Stream"
            onChange={handleChange}
          >
            <MenuItem value={'Engineering'}>Engineering</MenuItem>
            <MenuItem value={'Medical'}>Medical</MenuItem>
            <MenuItem value={'Management'}>Management</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    button: {
        margin: theme.spacing(1),
    }
}))

function Streamselect = () => {
    const classes = useStyles()
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), firstName: '', lastName: '' },
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
    };

    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value
            }
            return i;
        })

        setInputFields(newInputFields);
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { id: uuidv4(), firstName: '', lastName: '' }])
    }

    const handleRemoveFields = id => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }

    return (
       
            <Container className='box'>
                <>
                <Typography variant="h4">Course Details</Typography>
                <form className={classes.root} onSubmit={handleSubmit}>
                    {
                    inputFields.map(inputField) => 
                        (
                        <span key={inputField.id}></span>
                            <Streamlist/>
                                  <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                                      <RemoveIcon />
                                  </IconButton>
                                  <IconButton
                                      onClick={handleAddFields} >
                                      <AddIcon />
                                  </IconButton>
                           
                            <Box textAlign='center'>
                            <Button
                            className={classes.button}
                            variant="contained"
                            color="primary"
                            type="submit"
                            alignItems="center"
                            onClick={handleSubmit}
                        >FINISH</Button>
                        </Box>
                    </form
                   
                        )
}
                </>   
             
            </Container>
       
    );
}

export default Streamselect;