import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CollegeCard from './CollegeCard'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1269 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1269, min: 832 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 832, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const CollegeCardSlider=()=>
(
    <>
    <div className="align-items: center; justify-center flex">
    <Carousel responsive={responsive}
    showDots={true}
    infinite={true}
    containerClass=""
    itemClass="align-items: center; justify-center flex"
    sliderClass=""
    >
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
        <CollegeCard />
    </Carousel>
    </div>
    </>
)
export default CollegeCardSlider;