import React, { useEffect } from "react";
import Banner from "./Banner";
import CollegeCardSlider from "../CollegeCardSlider/CollegeCardSlider";
import ImageSlider from "../imageSlider/ImageSlider";
import { Button } from "@material-ui/core";
import PhoneIcon from "@mui/icons-material/Phone";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Accordian from "../FAQsection/Accordian";
import { useDispatch } from "react-redux";
import ButtonGroup from "./ButtonGroup";

import { BASE_URL } from "../../api/UseFetch";

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
  useEffect(async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}/college/${id}`);
      dispatch(fetchSuccess(data));
    } catch (error) {
      dispatch(fetchFailure(error));
    }
  }, []);

  return (
    <>
      <div className="align-items: center; justify-center flex">
        <div className="w-10/12 institutebody">
          <Banner />
          <ButtonGroup />
          <div className="row pagebody">
            <div className="col-9">
              <Outlet />
            </div>
            <div className="col-3 right-col">
              <div className="btn_expand">
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
              <div className="btn_collapse flex ">
                <div>
                  <Button
                    style={{ backgroundColor: "#DC133C" }}
                    className="text-white"
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
              </div>
              <ImageSlider />
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
