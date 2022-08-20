import React from "react";
const CourseCard = () => {
  return (
    <>
      <div className="p-5">
        <div className="card card1 bg-neutral-100 w-80 ">
          <div className="card-body">
            <img src="https://media.istockphoto.com/photos/car-factory-professional-male-automotive-engineer-wearing-hard-hat-picture-id1352825038?b=1&k=20&m=1352825038&s=170667a&w=0&h=w4kixdQxAxZxgjlRDUkrQGx7H6vDefEPenv-nXoK1rg=" />
            <h5 className="card-title head text-center pt-3">Engineering</h5>
            <div className="row">
              <div className="col colh">
                <h6>Courses:</h6>
              </div>
              <div className="col"> B.Tech, B.E., Diploma In Engineering</div>
            </div>
            <div className="row">
              <div className="col colh">
                <h6>Total Colleges:</h6>
              </div>
              <div className="col">1500</div>
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
