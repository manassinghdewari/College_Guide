import React from "react";
import Banner from "./Banner";
import CollegeCardSlider from "./CollegeCardSlider/CollegeCardSlider";
import FAQ from "./FAQ"
const InstitutePageBody = () => {
  return (
    <>
      <div className="align-items: center; justify-center flex">
        <div className="w-10/12">
          <Banner />
          <CollegeCardSlider />
          <FAQ />
        </div>
      </div>
    </>
  );
};
export default InstitutePageBody;
