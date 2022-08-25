import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

import pdf1 from '../../components/pdf/IIT Delhi Placements 2022.pdf'
import pdf2 from '../../components/pdf/NIT Trichy Course Admissions 2022.pdf'
import pdf3 from '../../components/pdf/AIIMS administration agrees to demands of Optometry Students Association.pdf'
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
const notifications=[
  {
    topic:"IIT Delhi Placements 2022",
    text:"At the end of Phase 2 of IIT Delhi placements 2022, a record-breaking 1,300 offers were received.Further, 230 PPOs were received during IIT Delhi placements 2022. Further, the placement rate recorded during IIT Delhi placements 2022 was 82%. Apart from this, more than 600 companies offered 1,000+ job profiles ... ",
    link:pdf1,
  },
  {
    topic:"NIT Trichy Course Admissions 2022: ",
    text:"Centralised Counselling for MTech/ MArch/ MPlan (CCMT) has released the National Spot Round (Final Mop-Up Round) on Aug 11. All the candidates who have been allotted seats for the first time in National Spot Round (NSR) must upload documents by Aug 14. The physical reporting for the same is to be held between Aug 11 and Aug 18.",
    link:pdf2
  },
  {
    topic:"AIIMS administration agrees to demands of Optometry Students Association",
    text:"After a meeting on August 22, the AIIMS administration agreed to the demands of the AIIMS Optometry students who were protesting after the unfortunate death of Abhishek Malviya, a first year student of AIIMS BSc Optometry.AIIMS administration held a meeting  ...   ",
    link:pdf3
  }
]
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
        {
          notifications.map((value)=>{
            return(
              <div className="p-5">
              <div className="card bg-neutral-100 w-80 h-100">
                <div className="card-body">
                  <h5 className="card-title head text-center">{value.topic}</h5>
                  <div>
                    {value.text}
                  </div>
                  <div className="text-center p-3">
                    <a href={value.link} target="_blank"className="btn btn-primary bg-blue-700">
                      Show More
                    </a>
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
export default NewsCardSlider;
