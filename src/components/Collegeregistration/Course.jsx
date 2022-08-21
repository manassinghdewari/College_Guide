import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Container from '@material-ui/core/Container';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ClassNames } from '@emotion/react';
import { IconButton, Typography } from '@mui/material';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';

 function BasicSelect() {
  const [Courses, setCourses] = React.useState([
    { id: uuidv4(),  CourseName: ''},
  ]);

  const handleChangeInput = (id, event) => {
    const newCourses = Courses.map(i => {
        if (id === i.id) {
            i[event.target.name] = event.target.value
        }
        return i;
    })

    setCourses(newCourses);
}
const handleAddFields = () => {
    setCourses([...Courses, { id: uuidv4(), CourseName: '' }])
}

const handleRemoveFields = id => {
    const values = [...Courses];
    values.splice(values.findIndex(value => value.id === id), 1);
    setCourses(values);
}

  return (

    <div className ='box'>
        <Container alignItems ="center">
            <h1>Enter Course Details</h1>
            <form className ={ClassNames.root}>
                {Courses.map(Course => (
                    <span key = {Course.id}>
                        <div>
                            <div className ='addremove'>
                                <Typography variant ="h6" display ="block" gutterBottom>
                                    Add/Remove Course
                                </Typography>
                                <IconButton disabled={Courses.length === 1} onClick={() => handleRemoveFields(Course.id)}>
                                    <RemoveIcon />
                                </IconButton>
                                <IconButton
                                onClick={handleAddFields}>
                                    <AddIcon />
                                </IconButton>
                            </div>

                            <Box sx={{ maxWidth: 120 }}>
                            <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Course</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="Course"
                            value={Course.name}
                            label="Course"
                            onChange={event => handleChangeInput(Course.id,event)}
                            >
                            <MenuItem value={10}>Engineering</MenuItem>
                        <MenuItem value={20}>Medical</MenuItem>
                        <MenuItem value={30}>Arts</MenuItem>
                    </Select>
                </FormControl>
            </Box>

        </div>
    </span>
    ))}
 </form>
</Container>
</div>
   
  );
}

export default BasicSelect;
