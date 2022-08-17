import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';


function UploadDetails() 
{
    return(
<Stack direction="row" alignItems="center" spacing={2}>
<Button variant="contained" component="label" color="blue">
  Upload
  <input hidden accept="image/*" multiple type="file" />
</Button>
</Stack>
    )
}
export default UploadDetails;