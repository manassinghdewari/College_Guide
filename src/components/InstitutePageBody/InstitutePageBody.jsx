import React, { useEffect } from "react";
import Banner from "./ColllegePicBanner";
import CollegeCardSlider from "../CollegeCardSlider/CollegeCardSlider";
import { Button } from "@material-ui/core";
import PhoneIcon from "@mui/icons-material/Phone";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Accordian from "../FAQsection/Accordian";
import { useDispatch } from "react-redux";
import ButtonGroup from "./ButtonGroup";
import AliceCarousel from 'react-alice-carousel';
import { BASE_URL } from "../../api/UseFetch";
import LanguageIcon from '@mui/icons-material/Language';
import image1 from '../../images/28466.jpg'
import { Outlet, useLocation } from "react-router-dom";
import {
  fetchStart,
  fetchSuccess,
  fetchFailure,
} from "../../redux/collegeSlice";
import axios from "axios";

const InstitutePageBody = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];
  // const { data, loading, error } = useFetch(`/college/${id}`);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData(){
      dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}/college/${id}`);
      dispatch(fetchSuccess(data));
    } catch (error) {
      dispatch(fetchFailure(error));
    }
    }
    fetchData();
  }, [id]);
  
  // testing
  const data={
    photos:[
      {
        url:"https://bit.ly/3wl79kw",
      },
      {
        url:"https://bit.ly/3wl79kw",
      },
      {
        url:"https://bit.ly/3wl79kw",
      },
      {
        url:"https://bit.ly/3wl79kw",
      },
    ]
  }
console.log("collegedata",data);
  return (
    <>
      <div className="align-items: center; justify-center flex">
        <div className="w-10/12 institutebody">
          <Banner />
          <ButtonGroup />
          <div className="row pagebody">
            <div className="col-9 pgbd">
              <Outlet />
            </div>
            <div className="col-3 right-col">
              <div className="btn_expand">
                <div className="py-3 align-items: center; justify-center flex">
                  <Button
                    style={{ backgroundColor: "#DC133C"}}
                    className="text-white contbtn"
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
                <div className="py-3 align-items: center; justify-center flex">
                  <a href="https://vtu.ac.in/">

                  <Button
                    style={{ backgroundColor: "#4681f4" }}
                    className="text-white webbtn"
                    variant="contained"
                    endIcon={<LanguageIcon/>}
                    >
                    Website
                  </Button>
                    </a>
                </div>
              </div>
              <div className="btn_collapse flex ">
                <div>
                  <Button
                    style={{ backgroundColor: "#DC133C" }}
                    className="text-white contbtn"
                    variant="contained"
                    endIcon={<PhoneIcon />}
                  >
                    Contact
                  </Button>
                </div>
                <div>
                  <Button
                    style={{ backgroundColor: "#F37922" }}
                    className="text-white"
                    variant="contained"
                    endIcon={<CloudDownloadIcon />}
                  >
                    Brochure
                  </Button>
                </div>
                <div>
                  <a href="https://vtu.ac.in/">

                  <Button
                    style={{ backgroundColor: "#3a72b7" }}
                    className="text-white webbtn"
                    variant="contained"
                    endIcon={<LanguageIcon/>}
                    >
                    Website
                  </Button>
                    </a>
                </div>
              </div>
        <AliceCarousel autoPlay autoPlayInterval="3000">
          {
            data.photos.map((value)=>{
              return(
                <img src={value.url} className="sliderimg" alt=""/>
              )
            })
          }
        </AliceCarousel>
            </div>
          </div>
          <div className="font-bold text-3xl">Similar Institutes:-</div>
          <CollegeCardSlider />
          <Accordian />
        </div>
      </div>
    </>
  );
};
export default InstitutePageBody;
