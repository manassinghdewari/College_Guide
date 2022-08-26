import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useSelector } from "react-redux";
const ColllegePicBanner = () => {
  const { collegeData } = useSelector((state) => state.college);
  // console.log(collegeData);
const url="https://vtu.ac.in/wp-content/uploads/2019/08/vtu-banner-1a-1516x552.jpg";
  return (
    <>
      <div
        className="h-96 justify-between flex"
        style={{
          backgroundImage:
            `url(${url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-end self-end p-4">
          <img src={collegeData?.logo} alt="Logo" width="100" height="100" />
          <span
            className="font-bold text-white text-4xl mx-2 px-2 Banner_Name"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
          >
            {collegeData?.name}
          </span>
        </div>
        <div className=" flex items-start justify-end self-start justify-self-end ">
          {/* <button
            type="button"
            className="btn lik btn-link"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", margin: "2px" }}
          >
            <span>
              <FavoriteBorderIcon />
            </span>
          </button>
          <button
            type="button"
            className="btn lik btn-link"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)", margin: "2px" }}
          >
            <span>
              <ShareIcon />
            </span>
          </button> */}
        </div>
      </div>
    </>
  );
};
export default ColllegePicBanner;
