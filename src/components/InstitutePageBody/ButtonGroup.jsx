import React from "react";
import {Link} from 'react-router-dom'
const ButtonGroup = () => {
  // let button =[
  //   {
  //     name:"Compare",
  //     number:1,
  //   },
  //   {
  //     name:"Info",
  //     number:2,
  //   },
  //   {
  //     name:"Review",
  //     number:3,
  //   },
  //   {
  //     name:"Review",
  //     number:4,
  //   },
  //   {
  //     name:"Review",
  //     number:3,
  //   },
  //   {
  //     name:"Review",
  //     number:3,
  //   },
  //   {
  //     name:"Review",
  //     number:3,
  //   },
  //   {
  //     name:"Review",
  //     number:3,
  //   },
  //   {
  //     name:"Review",
  //     number:3,
  //   },
    
  // ]
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark btngroup">
        <div className="collapse navbar-collapse btngroupdiv" id="navbarNav">
          <ul className="navbar-nav w-full btngrouplist">
            <li className="nav-item active">
              <Link to="/institutepage/compare"className="nav-link  btnbtngroup">
                Compare <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/institutepage/info"className="nav-link  btnbtngroup" >
                Info
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/institutepage/placement" className="nav-link  btnbtngroup">
                  Placement
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/institutepage/faculty" className="nav-link  btnbtngroup">
                Faculty
              </Link>
            </li>
            <li className="nav-item">
            <Link href="/"to="/institutepage/courses" className="nav-link  btnbtngroup">
                Courses
              </Link>
            </li>
            <li className="nav-item">
            <Link to="/institutepage/alumni" className="nav-link  btnbtngroup">
                Alumni
            </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default ButtonGroup;