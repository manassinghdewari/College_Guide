import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../images/28466.jpg'
function ImageSlider(props) {
    
    return (          
        <>
        <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={image1} className="sliderimg" alt="error"/>
                <img src={image1} className="sliderimg" alt="error"/>
                <img src={image1} className="sliderimg" alt="error"/>
                <img src={image1} className="sliderimg" alt="error"/>
            </AliceCarousel>
        </>
    );
}

export default ImageSlider;



