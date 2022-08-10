import React from 'react';
import Navbar from '../components/Navbar'
import ImageSlider from '../components/imageSlider/ImageSlider'
import CustomPaginationActionsTable from '../components/Table'
import CourseCardSlider from '../components/CourseCardSlider/CourseCardSlider'
import NewsCardSlider from '../components/NewsCardSlider/NewsCardSlider';

const Search=()=>{
    return(
        <>
            <Navbar />
            <ImageSlider />
            <NewsCardSlider />
            <CustomPaginationActionsTable />
            <CourseCardSlider />
            
        </>
    )
}

export default Search;
