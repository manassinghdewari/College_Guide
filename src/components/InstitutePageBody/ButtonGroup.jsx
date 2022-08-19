import React from "react";
const ButtonGroup = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark btngroup">
        <div className="collapse navbar-collapse btngroupdiv" id="navbarNav">
          <ul className="navbar-nav w-full btngrouplist">
            <li className="nav-item active">
              <a className="nav-link  btnbtngroup" href="/">
                Info <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  btnbtngroup" href="/">
                Courses
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
                Alumni
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link  btnbtngroup" href="/">
                Compare
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default ButtonGroup;