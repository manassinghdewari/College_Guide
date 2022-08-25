import React from 'react';
import Navbar from '../components/Navbar'
import Table from '../components/Table/Table'
import CourseCardSlider from '../components/CourseCardSlider/CourseCardSlider'
import NewsCardSlider from '../components/NewsCardSlider/NewsCardSlider';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
const Homepage=()=>{
    return(
        <>
        {
            function () {
				window.onpageshow = function(event) {
					if (event.persisted) {
						window.location.reload();
					}
				};
			}()
        }
            <Navbar />
            <Banner />
            <NewsCardSlider/>
            <Table />
            <CourseCardSlider />
            <Footer />
        </>
    )
}

export default Homepage;
