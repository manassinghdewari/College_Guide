import React from 'react';
import Navbar from '../components/Navbar'
import ImageSlider from '../components/imageSlider/ImageSlider'
import InstitutePageBody from '../components/InstitutePageBody';
const InstitutePage=()=>{
    return(
        <>
            <Navbar />
            
            <InstitutePageBody />
           
            
            <ImageSlider />
            

        </>
    )
}

export default InstitutePage;
