import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CourseCimport c1 from '../pdf/Engineering.pdf'
import c2 from '../pdf/Medical.pdf'
import c3 from '../pdf/LAW.pdf'
import c4 from '../pdf/DESIGN.pdf'
import c5 from '../pdf/BMS.pdf'
import c6 from '../pdf/MBA (1).pdf'

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
const courseinfo=[
  {
    
    stream:"Engineering",
    course:"Btech B.E. Diploma M.Tech",
    no:"2500",
    photo:"https://www.nesfircroft.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBem1CQkE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--10e07b6f9aa62c88d4b28278c188db67d45cf07d/Engineer's%20Mindset.jpg",
    link:c1,
  },
  {
    
    stream:"Medical",
    course:"MBBS BDS BAMS BHMS",
    no:"543",
    photo:"https://www.rev.com/blog/wp-content/uploads/2021/01/Medical-Transcription.jpg",
    link:c2,
  },
  {
    
    stream:"Law",
    course:"LL.B. LL.M. PHd",
    no:"1721",
    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyfvxF-WqB0g_JVy3-1Ddvzt8SbNW_Zgouhg&usqp=CAU",
    link:c3,
  },
  

{
    
  stream:"Design",
  course:"B.Des",
  no:"1900",
  photo:"https://www.rev.com/blog/wp-content/uploads/2021/01/Medical-Transcription.jpg",
  link:c4,
},


 {
    
  stream:"Business and Management studies",
  course:"BMS",
  no:"37",
  photo:"data:image/jpeg;base64,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",
  link:c5,
},

{
    
  stream:"Management",
  course:"MBA ",
  no:"142",
  photo:"data:image/jpeg;base64,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",
  link:c6,
},

  
]

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

        {
          courseinfo.map((value)=>{
            return(
            <div className="p-5">
            <div className="card card1 bg-neutral-100 w-80 cd text-center items-center justify-center">
              <div className="card-body">
                <div className="h166">

                <img src={value.photo} className="h166"/>
                </div>
                <div className="h10">
                <h5 className="card-title head text-center pt-3">{value.stream} </h5>
                <div className="row">
                  <div className="col colh">
                    <h6>Courses:</h6>
                  </div>
                  <div className="col">{value.course}</div>
                </div>
                <div className="row">
                  <div className="col colh">
                    <h6>Total Colleges:</h6>
                  </div>
                  <div className="col">{value.no}</div>
                </div>
                </div>
                <div>
                  
                <div className="text-center">
                  <a href={value.link} className="btn btn-primary bg-blue-700">
                    Show More
                  </a>
                </div>
                </div>
              </div>
            </div>
          </div>
            )
          })
        }

      </Carousel>
    </div>
  </>

);
export default CourseCardSlider;
