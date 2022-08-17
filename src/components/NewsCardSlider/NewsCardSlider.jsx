import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewsCard from "./NewsCard";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 984 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 984, min: 640 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const NewsCardSlider = () => (
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
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </Carousel>
    </div>
  </>
);
export default NewsCardSlider;
