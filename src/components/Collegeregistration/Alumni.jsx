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
import './Alumni.css'
import Grid from '@material-ui/core/Grid'
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

function Alumni() {
    const classes = useStyles()
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), firstName: '', lastName: '' },
    ]);

    

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
            <Container className='box '>
                <Typography variant="h4" >Alumni Details</Typography>
                <form className={classes.root} >
                    {inputFields.map(inputField => (
                        <span key={inputField.id}>
                             <Grid container spacing={2}>
                             
                            
                               <div className='input-field' class="form-check-inline" >
                                <Grid item xs={12} ms={6}>
                               <TextField
                                    name="department"
                                    label="Name of Alumni"
                                    variant="filled"
                                    fullWidth
                                    value={inputField.name}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                                </Grid>
                                <Grid item xs={12} ms={6}>
                                <TextField
                                    name="qualification"
                                    label="Branch"
                                    fullWidth
                                    variant="filled"
                                    value={inputField.branch}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                                
                                </Grid>
                                 <Grid item xs={12}>
                                <TextField
                                    name="qualification"
                                    label="Email Address"
                                    fullWidth
                                    variant="filled"
                                    value={inputField.email}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    name="qualification"
                                    label="Company Name"
                                    fullWidth
                                    variant="filled"
                                    value={inputField.company}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                                </Grid>
                                </div>
                                <div className='input-field'>
                                
                                <Grid item xs={12}>
                                <TextField
                                    name="qualification"
                                    label="Designation"
                                    fullWidth
                                    variant="filled"
                                    value={inputField.designation}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    name="qualification"
                                    label="Linkedin profile"
                                    fullWidth
                                    variant="filled"
                                    value={inputField.profile}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                                </Grid>
                                
                                <Grid item xs={12}>
                                <TextField
                                    name="qualification"
                                    label="Research Paper Link"
                                    fullWidth
                                    variant="filled"
                                    value={inputField.research}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <Button className='upload-btn' variant="contained" component="label">
                                 Upload Photo
                                 <input hidden accept="file/*" multiple type="file" />
                                </Button>
                                </Grid>
                               </div>
                               <div className='addremove_container'>
                                <div className='addremove' >
                                  
                                    <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
                                        <RemoveIcon />
                                    </IconButton>
                                    <IconButton
                                        onClick={handleAddFields}
                                    >
                                        <AddIcon />
                                    </IconButton>
                                </div>
                                </div>
                           
                            </Grid>
                           
                        </span>
                    ))}
                   
                </form>
            </Container>
       
    );
}

export default Alumni;