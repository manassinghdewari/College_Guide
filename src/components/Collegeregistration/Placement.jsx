import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@mui/material/Typography';
import './Placement.css'
import Testing from './Testing'
import Grid from '@material-ui/core/Grid'
import { Box } from '@material-ui/core';

function MultipleEntry() {

    return (
            <Container className='box-details'>
                <Typography variant="h4">College Placement Details</Typography>
                <form>
                <Grid container direction={"column"} spacing={2}>
  <Grid item>
                           <div>
                                <TextField
                                    name="name"
                                    label="Maximum salary"
                                    variant="filled"  
                                />
                            </div>
                            </Grid>
                            <Grid item>
                            
                               <TextField
                                    name="department"
                                    label="Median Salary"
                                    variant="filled"  
                                />
                                </Grid>
                                <Grid item>
                                    <TextField
                                    name="qualification"
                                    label="Average Salary"
                                    variant="filled"  
                                />
                              
                               </Grid>
                               <Grid item>
                               <Testing/>
                               </Grid>
                               </Grid>
                               <Box textAlign='center'>
                            <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            alignItems="center"
                        >FINISH</Button>
                        </Box>
                </form>
            </Container>   
    );
}

export default MultipleEntry;