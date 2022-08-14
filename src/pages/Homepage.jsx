import React from 'react';
import Navbar from '../components/Navbar'
import CustomPaginationActionsTable from '../components/Table'
import CourseCardSlider from '../components/CourseCardSlider/CourseCardSlider'
import NewsCardSlider from '../components/NewsCardSlider/NewsCardSlider';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
const Homepage=()=>{
    return(
        <>
            <Navbar />
            <Banner />
            <NewsCardSlider />
            <CustomPaginationActionsTable />
            <CourseCardSlider />
            <Footer />
        </>
    )
}

export default Homepage;
