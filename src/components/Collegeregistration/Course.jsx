import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Container from '@material-ui/core/Container';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from 'react-select';
import { ClassNames } from '@emotion/react';
import { IconButton, Typography } from '@mui/material';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import BranchDetails from './BranchDetails';

 function CourseSelect() {
  const [Courses, setCourses] = React.useState([
    { id: uuidv4(),  CourseName: ''},
  ]);
  const courses = [
    { value: 'B.Tech', label: 'B.Tech' },
    { value: 'B.E.', label: 'B.E.' },
    { value: 'M.Tech', label: 'M.Tech' }
  ]
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
                            <div className ='justify-center items-center text-center  addremove'>
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

                            <Box >
                            <FormControl fullWidth>
                            
                            <Select
                            className='w-60'
                            placeholder="Select Course"
                            id="demo-simple-select"
                            name="Course"
                            value={Course.name}
                            label="Course"
                            options={courses}
                            />
                    <BranchDetails/>
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

export default CourseSelect;
