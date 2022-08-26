import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CourseCard from "./CourseCard";
import pdf4 from '../../components/pdf/Branch Details.pdf'
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
const CourseCardSlider = () => (
  <>
    <div className="align-items: center; justify-center flex">
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        containerClass="w-full"
        itemClass="align-items: center; justify-center flex"
        sliderClass=""
      >
        <div className="p-5">
        <div className="card card1 bg-neutral-100 w-80 ">
          <div className="card-body">
            <img src="https://media.istockphoto.com/photos/car-factory-professional-male-automotive-engineer-wearing-hard-hat-picture-id1352825038?b=1&k=20&m=1352825038&s=170667a&w=0&h=w4kixdQxAxZxgjlRDUkrQGx7H6vDefEPenv-nXoK1rg=" />
            <h5 className="card-title head text-center pt-3">Engineering</h5>
            <div className="row">
              <div className="col colh">
                <h6>Courses:</h6>
              </div>
              <div className="col"> B.Tech, B.E., Diploma In Engineering</div>
            </div>
            <div className="row">
              <div className="col colh">
                <h6>Total Colleges:</h6>
              </div>
              <div className="col">2500</div>
            </div>
            
            <div className="text-center p-3">
              <a href={pdf4} className="btn btn-primary bg-blue-700">
                Show More
              </a>
            </div>
          </div>
        </div>
      </div>  
      <div className="p-5">
        <div className="card card1 bg-neutral-100 w-80 ">
          <div className="card-body">
            <img src="https://media.istockphoto.com/photos/car-factory-professional-male-automotive-engineer-wearing-hard-hat-picture-id1352825038?b=1&k=20&m=1352825038&s=170667a&w=0&h=w4kixdQxAxZxgjlRDUkrQGx7H6vDefEPenv-nXoK1rg=" />
            <h5 className="card-title head text-center pt-3">Medical</h5>
            <div className="row">
              <div className="col colh">
                <h6>Courses:</h6>
              </div>
              <div className="col"> MBBS,BAMS, BHMS</div>
            </div>
            <div className="row">
              <div className="col colh">
                <h6>Total Colleges:</h6>
              </div>
              <div className="col">1550</div>
            </div>
            
            <div className="text-center p-3">
              <a href={pdf4} className="btn btn-primary bg-blue-700">
                Show More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="card card1 bg-neutral-100 w-80 ">
          <div className="card-body">
            <img src="https://media.istockphoto.com/photos/car-factory-professional-male-automotive-engineer-wearing-hard-hat-picture-id1352825038?b=1&k=20&m=1352825038&s=170667a&w=0&h=w4kixdQxAxZxgjlRDUkrQGx7H6vDefEPenv-nXoK1rg=" />
            <h5 className="card-title head text-center pt-3">Management</h5>
            <div className="row">
              <div className="col colh">
                <h6>Courses:</h6>
              </div>
              <div className="col"> BBA MBA</div>
            </div>
            <div className="row">
              <div className="col colh">
                <h6>Total Colleges:</h6>
              </div>
              <div className="col">1230</div>
            </div>
            
            <div className="text-center p-3">
              <a href={pdf4} className="btn btn-primary bg-blue-700">
                Show More
              </a>
            </div>
          </div>
        </div>
      </div>    
      </Carousel>
    </div>
  </>
);
export default CourseCardSlider;
