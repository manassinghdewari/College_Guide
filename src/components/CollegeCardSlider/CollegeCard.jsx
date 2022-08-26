import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../api/UseFetch";
import useFetch from "../../api/UseFetch";
// import Compare from "../GroupButton/Compare";
// import Compare from "../GroupButton/Compare";
const CollegeCard = ({ collegeInfo }) => {
  
  const id = collegeInfo?._id;
  console.log(collegeInfo?.brochure);
  const { data } = useFetch(`/college/placement/${id}`);
  return (
    <>
    
    <div>
        {/* <Link to={`/institutepage/${id}`}> */}
        <div className="card card1 rounded-3 wid22">
        <Link to={`/institutepage/${id}`}>
          <img
            className="card-img rounded-3 hei18"
            src={collegeInfo?.photos[0]}
            alt={collegeInfo?.name}
          />
          </Link>
          <div className="card-img-overlay rounded-3 h-1/2">
            <div className="row">
              <div className="col">
                {/* <Link to={`/institutepage/${id}`} className="btn2 btn btn-primary rounded-3"
                
              > */}
              {/* <Link to={collegeInfo?.brochure}> */}
                  <button className="btn2 btn btn-primary rounded-3">
                  Brochure
                  </button>
              {/* </Link>                 */}
              </div>
              <div className="col tar">
                <button type="button" className="btn lik btn-link">
                  <span className="bi bi-heart"></span>
                </button>
              </div>
            </div>
            <div className="ran">
              <span className="rank rounded-4">Rank:{collegeInfo?.rank}</span>
            </div>
          </div>
          <div className="card-body">
            <div className="row p4">
              <div className="col">
                {collegeInfo?.address.map((address) => address.state)},IN
              </div>
              <div className="col col-4">
                <Link to={`/institutepage/${id}/compare`} className="btn3 btn btn-primary rounded-3" >
                  <Typography>
                  Compare
                  </Typography>
                </Link>
              </div>
            </div>
            <div>
              <div className="title row p4">
                <div className="col-5">
                  <img
                    className="collegelogo"
                    src="https://images.shiksha.com/mediadata/images/1651569550phpDG50QS.jpeg"
                    alt="Logo"
                    width="75"
                    height="75"
                  />
                </div>
                <Link to={`/institutepage/${id}`}>
                <div className="col collegename">{collegeInfo?.name}</div>  
                </Link>
              </div>
            </div>
            <div className="row p4">
              <div className="col acc">
                {collegeInfo?.accreditation.map((acc) => acc?.provider + ", ")}
              </div>
              <div className="col est">
                {collegeInfo?.course.map((course) => course?.coursename + ", ")}
                ...
              </div>
            </div>
            <hr />
            <div className="row p4">
              <div className="col rate">&#9733; Median Salary:</div>
              <div className="col">{data?.median}</div>
            </div>
          </div>
        </div>
        {/* </Link> */}
    </div>
     {/* <Compare collegeIdData={collegeIdData}/> */}
    </>
  );
};
export default CollegeCard;
