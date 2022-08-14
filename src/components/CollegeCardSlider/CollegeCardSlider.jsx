import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CollegeCard from "./CollegeCard";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1730 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1730, min: 1290 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 1290, min: 860 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobiles: {
    breakpoint: { max: 860, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const CollegeCardSlider = () => (
  <>
    <div className="align-items: center; justify-center flex py-5">
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        containerClass="w-full"
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
);
export default CollegeCardSlider;
