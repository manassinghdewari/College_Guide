import React from "react";
import { Link } from "react-router-dom";
const CollegeCard = ({ collegeInfo }) => {
  const id = collegeInfo?._id;

  return (
    <div>
      
        <div className="card card1 rounded-3 wid22">
          <img
            className="card-img rounded-3 hei18"
            src={collegeInfo?.photos[0]}
            alt={collegeInfo?.name}
          />
          <div className="card-img-overlay rounded-3 h-1/2">
            <div className="row">
              <div className="col">
                <a href="/" className="btn2 btn btn-primary rounded-3">
                  Brochure
                </a>
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
                <a href="/" className="btn3 btn btn-primary rounded-3">
                  Compare
                </a>
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
                <div className="col collegename">{collegeInfo?.name}</div>
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
              <div className="col">{collegeInfo?.median}</div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default CollegeCard;
