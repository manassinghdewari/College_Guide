import React from 'react';
import Navbar from '../components/Navbar'
import ImageSlider from '../components/imageSlider/ImageSlider'
import CustomPaginationActionsTable from '../components/Table'

const Homepage=()=>{
    return(
        <>
            <Navbar />
            <ImageSlider />
            <CustomPaginationActionsTable />
        </>
    )
}

export default Homepage;
