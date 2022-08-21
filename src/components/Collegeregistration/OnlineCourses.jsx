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
import './OnlineCourses.css'
import { Box } from '@material-ui/core';
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

function OnlineCourses() {
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
                <Typography variant="h4" >Online Course Details</Typography>
                <form className={classes.root} onSubmit={handleSubmit}>
                    {inputFields.map(inputField => (
                        <span key={inputField.id}>
                           <div>
                                <TextField
                                    name="name"
                                    label="Title"
                                    variant="filled"
                                    value={inputField.total}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                    fullWidth
                                />
                            </div>
                            
                            <div className='addremove_container'>
                               <div>
                               <TextField
                                    name="department"
                                    label="Course Name"
                                    variant="filled"
                                    value={inputField.topic}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                                <TextField
                                    name="qualification"
                                    label="Course Link"
                                    variant="filled"
                                    value={inputField.link}
                                    onChange={event => handleChangeInput(inputField.id, event)}
                                />
                               </div>
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
                           
                        </span>
                    ))}
                   
                </form>
            </Container>
       
    );
}

export default OnlineCourses;