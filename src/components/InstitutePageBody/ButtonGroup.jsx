import React from "react";
import {Link,useParams} from 'react-router-dom'

const ButtonGroup = () => {
  let params=useParams();
  const collegeId=params.id;
  console.log("this is college",collegeId);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark btngroup">
        <div className="collapse navbar-collapse btngroupdiv" id="navbarNav">
          <ul className="navbar-nav w-full btngrouplist">
            <li className="nav-item active">
              <Link to={`/institutepage/${collegeId}/info`} className="nav-link  btnbtngroup" >
                Info
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to={`/institutepage/${collegeId}/placement`} className="nav-link  btnbtngroup">
                  Placement
              </Link>
            </li>
            <li className="nav-item">
            <Link to={`/institutepage/${collegeId}/faculty`} className="nav-link  btnbtngroup">
                Faculty
              </Link>
            </li>
            <li className="nav-item">
            <Link href="/"to={`/institutepage/${collegeId}/courses`} className="nav-link  btnbtngroup">
                Courses
              </Link>
            </li>
            <li className="nav-item">
            <Link to={`/institutepage/${collegeId}/alumni`} className="nav-link  btnbtngroup">
                Alumni
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/institutepage/alumni" className="nav-link  btnbtngroup">
                Colleges Affliated
            </Link>
            </li>
            <li className="nav-item ">
              <Link to={`/institutepage/${collegeId}/compare`}className="nav-link  btnbtngroup">
                Compare <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default ButtonGroup;