import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@mui/material/Typography';
import './Placement.css'
import MultipleImage from './MultipleImage';
import Grid from '@material-ui/core/Grid'

function Placement() {

    return (
            <Container>
                <Typography variant="h4" className='text-center py-4'>College Placement Details</Typography>
                <form>
                
                           <div className='justify-center text-center items-center'>
                                <TextField
                                className='mx-3'
                                    name="maxsalary"
                                    label="Maximum salary"
                                    variant="filled"  
                                />
                            
                            
                               <TextField
                               className='mx-3'
                                    name="mediansalary"
                                    label="Median Salary"
                                    variant="filled"  
                                    />
                                
                                    <TextField
                                    className='mx-3'
                                    name="averagesalary"
                                    label="Average Salary"
                                    variant="filled"  
                                    />
                              
                               
                                    </div>
                               <MultipleImage/>
                               
                             
                </form>
            </Container>   
    );
}

export default Placement;