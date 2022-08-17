import React from "react";
const ButtonGroup = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark btngroup">
        <div className="collapse navbar-collapse btngroupdiv" id="navbarNav">
          <ul className="navbar-nav w-full justify-evenly btngrouplist">
            <li className="nav-item active">
              <a className="nav-link  btnbtngroup" href="/">
                Compare <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  btnbtngroup" href="/">
                Info
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  btnbtngroup" href="/">
                Fees
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  btnbtngroup" href="/">
                Review
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  btnbtngroup" href="/">
                Placement
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  btnbtngroup" href="/">
                Faculty
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  btnbtngroup" href="/">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  btnbtngroup" href="/">
                Facility
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  btnbtngroup" href="/">
                Alumini
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default ButtonGroup;