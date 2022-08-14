import React from "react";
const CourseCard = () => {
  return (
    <>
      <div className="p-5">
        <div className="card bg-neutral-100 w-80 ">
          <div className="card-body">
            <h5 className="card-title head text-center">B-Tech.</h5>
            <div className="row">
              <div className="col colh">
                <h6>Degree level:</h6>
              </div>
              <div className="col"> Undergraduate</div>
            </div>
            <div className="row">
              <div className="col colh">
                <h6>Course duration:</h6>
              </div>
              <div className="col">4 Years</div>
            </div>
            <div className="row">
              <div className="col colh">
                <h6>Top Institutes:</h6>
              </div>
              <div className="col">IITs,NITs,IIITs,VIT, SRMIT,BITS,etc.</div>
            </div>
            <div className="row">
              <div className="col colh">
                <h6>Admission Process:</h6>
              </div>
              <div className="col">Entrance test followed by counselling.</div>
            </div>
            <div className="text-center p-3">
              <a href="/" className="btn btn-primary bg-blue-700">
                Show More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CourseCard;
