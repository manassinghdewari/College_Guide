import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NewsCard from "./NewsCard";
import pdf1 from '../../components/pdf/IIT Delhi Placements 2022.pdf'
import pdf2 from '../../components/pdf/NIT Trichy Course Admissions 2022.pdf'
import pdf3 from '../../components/pdf/AIIMS administration agrees to demands of Optometry Students Association.pdf'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1070 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1070, min: 707 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 707, min: 0 },
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
              <div className="car">
              <div className="card card1">
                  <a href={value.link} target="_blank" className="Notification_Outer_link">
                    <div className="Notification_innerbox">
                      <div className="Notification_image_div">
                        <img
                          // data-src="https://images.collegedunia.com/public/college_data/images/logos/NBE Logo.png?h=44&amp;w=44&amp;mode=stretch"
                          src="https://images.collegedunia.com/public/college_data/images/logos/NBE Logo.png?h=44&amp;w=44&amp;mode=stretch"
                          alt=""
                          height="44px"
                          className="Notification_image"
                        />
                      </div>
                      <span
                        className="Notification_Head"
                        >{value.topic}</span>
                    </div>
                    <div className="Notification_Body h16">
                      <p
                        className="Notification_Body"
                      >
                        {value.text}
                      </p>
                      <div className="Notification-height-footer-divider"></div>

                      <div className="Notification-height-footer">
                        <hr className="Notification-hr" />
                        <p
                          className="Notification_Internal_Link"
                          >Read more
                          <svg
                            fill="#666"
                            xmlns="http://www.w3.org/2000/svg"
                            width="451.846"
                            height="451.847"
                            viewBox="0 0 451.846 451.847"
                            style={{width: "10px", height: "10px"}}
                          >
                            <path
                              d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
                            ></path>
                        </svg>
                    </p>
                    </div>
                    </div>
                </a>
      
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
