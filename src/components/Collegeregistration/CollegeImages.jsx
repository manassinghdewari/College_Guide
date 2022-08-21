import React from 'react';
import MultipleImage from './MultipleImage';
import { Box } from '@mui/material';
import Button from '@material-ui/core/Button';

const CollegeImages = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
  return (
    <>    <div>
        <Box>
            <MultipleImage/>
        </Box>
    </div>
     <Box textAlign='center'>
     <Button
     
     variant="contained"
     color="primary"
     type="submit"
     alignItems="center"
     onClick={handleSubmit}
 >FINISH</Button>
 </Box>
 </>
  )
}

export default CollegeImages;