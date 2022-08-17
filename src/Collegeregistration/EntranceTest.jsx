import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';


function StreamSelect() {
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
            onChange={handleChange}
          >
            <MenuItem value={'Bangalore'}>Bangalore</MenuItem>
            <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
            <MenuItem value={'NewDelhi'}>New Delhi</MenuItem>
          </Select>
        </FormControl>
      
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

function MultipleEntry() {
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
       
            <div className='box'>
            <Container alignItems="center">
                <h1>Entrance Test Details</h1>
                    
                <form className={classes.root} onSubmit={handleSubmit}>
                    {inputFields.map(inputField => (
                        <span key={inputField.id}>
                           <div>
                                <div className='addremove' >
                            <Typography variant="h6" display="block" gutterBottom>
                                Add/Remove Entry
                            </Typography>
                            <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                                <RemoveIcon />
                            </IconButton>
                            <IconButton
                                onClick={handleAddFields}
                            >
                                <AddIcon />
                            </IconButton>
                            
                                </div>
                               
                                <TextField
                                    name="name"
                                    label="Name of Entrance Test"
                                    variant="filled"
                                    value={inputField.name}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                                </div>
                                <div>
                                <TextField
                                    name="department"
                                    label="Stream"
                                    variant="filled"
                                    value={inputField.department}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                            </div>
                            <div>
                                <TextField
                                    name="qualification"
                                    label="Entrance Test Website"
                                    variant="filled"
                                    value={inputField.qualification}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                                </div>
                                <div>
                                <TextField
                                    name="email address"
                                    label="E-Mail"
                                    variant="filled"
                                    value={inputField.emailaddress}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                            </div>
                             </span>
                    ))}
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="primary"
                        type="submit"
                        alignItems="center"
                        onClick={handleSubmit}
                    >FINISH</Button>
                </form>
            </Container>
        </div>
       
    );
}

export default MultipleEntry;