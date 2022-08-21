import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@mui/material/Typography';
import './Placement.css'
import MultipleImage from './MultipleImage';
import Grid from '@material-ui/core/Grid'

function Placement() {

    return (
            <Container className='box-details'>
                <Typography variant="h4">College Placement Details</Typography>
                <form>
                <Grid container direction={"column"} spacing={2}>
                 <Grid item>
                           <div>
                                <TextField
                                    name="maxsalary"
                                    label="Maximum salary"
                                    variant="filled"  
                                />
                            </div>
                            </Grid>
                            <Grid item>
                            
                               <TextField
                                    name="mediansalary"
                                    label="Median Salary"
                                    variant="filled"  
                                />
                                </Grid>
                                <Grid item>
                                    <TextField
                                    name="averagesalary"
                                    label="Average Salary"
                                    variant="filled"  
                                />
                              
                               </Grid>
                               <Grid item>
                               <MultipleImage/>
                               </Grid>
                               </Grid>
                             
                </form>
            </Container>   
    );
}

export default Placement;