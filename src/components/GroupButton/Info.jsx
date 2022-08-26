import React from "react";
import { useSelector } from "react-redux";
import useFetch from "../../api/UseFetch";

const Info = () => {
    const {collegeData}= useSelector((state) => state.college);
    console.log(collegeData);
  return (
    <>
      <div class="text-xl font-bold mt-5">
        {collegeData?.info}
      </div>
      {/* <div className="flex items-center justify-center text-center mt-5">
        <img
          src="https://images.indianexpress.com/2017/05/google-maps-759.jpg"
          alt=""
          width="50%"
        />
      </div> */}
        {/* <div id="map"></div> */}
    </>
  );
};

export default Info;
