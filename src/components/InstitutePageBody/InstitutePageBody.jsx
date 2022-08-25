import React from "react";
import Banner from "./Banner";
import CollegeCardSlider from "../CollegeCardSlider/CollegeCardSlider";
import ImageSlider from "../imageSlider/ImageSlider";
import { Button } from "@material-ui/core";
import PhoneIcon from "@mui/icons-material/Phone";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Accordian from "../FAQsection/Accordian"

const InstitutePageBody = () => {
  return (
    <>
      <div className="align-items: center; justify-center flex">
        <div className="w-10/12">
          <Banner />
          <div className="row">
            <div className="col-9">
            <div class="text-xl font-bold mt-5">
        Visvesvaraya Technological University (VTU), previously spelled
        Visveswaraiah Technological University, is a collegiate public state
        university in Belagavi, Karnataka established by the Government of
        Karnataka. All colleges in the State of Karnataka imparting education in
        Engineering or Technology, except those that have the consent of VTU and
        sanction of the Government, are required to be affiliated with
        Visvesvaraya Technological University, Belagavi.[10] The university is
        named after Sir M. Visvesvaraya, an Indian civil engineer, statesman and
        the 19th Diwan of Mysore. VTU is one of oldest technical university
        which provide opportunities for engineering students and management
        students.

        
        
      </div>
      <div className="flex items-center justify-center text-center mt-5">
        <img
          src="https://images.indianexpress.com/2017/05/google-maps-759.jpg"
          alt=""
          width="50%"
        />
      </div>
            </div>
            <div className="col-3">
              <div>
                <div className="py-3 align-items: center; justify-center flex">
                  <Button
                    style={{ backgroundColor: "#DC133C" }}
                    className="text-white"
                    variant="contained"
                    endIcon={<PhoneIcon />}
                  >
                    Contact
                  </Button>
                </div>
                <div className="py-3 align-items: center; justify-center flex">
                  <Button
                    style={{ backgroundColor: "#F37922" }}
                    className="text-white"
                    variant="contained"
                    endIcon={<CloudDownloadIcon />}
                  >
                    Brochure
                  </Button>
                </div>
              </div>
              <ImageSlider />
            </div>
          </div>
          <div className="font-bold text-3xl">Similar Institutes:-</div>
          <CollegeCardSlider />
          <Accordian/>
        </div>
        
        
        
      </div>
    </>
  );
};
export default InstitutePageBody;
