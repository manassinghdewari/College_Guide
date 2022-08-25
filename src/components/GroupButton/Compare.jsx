import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useFetch, { BASE_URL } from "../../api/UseFetch";

// function refreshPage() {
//   window.location.reload(false);
// }
let id="63072a0d355aab9156ebaa1a";
const Compare = () => {
  const {data:placement,loading,error}=useFetch(`/college/placement/${id}`)
  console.log(placement);
  const {collegeData}= useSelector((state) => state.college);
  return (
    <>
      <div className="container-table">
      <div className="container pb-5 mb-2 ">
        <div className="comparison-table">
          <table className="table table-bordered">
            <thead className="bg-secondary">
              <tr>
                <td className="align-middle"></td>
                <td>
                  <div className="comparison-item">
                    <span className="remove-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-x"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </span>
                    <a
                      className="comparison-item-thumb"
                      href="shop-single.html"
                    >
                      <img
                        // src="https://cache.careers360.mobi/media/colleges/social-media/logo/Indian_Institute_of_Technology_Delhi.jpg"
                        src={collegeData.photos[0]}
                        alt="logo_1"
                      />
                    </a>
                    <a
                      className="comparison-item-title"
                      href="shop-single.html"
                    >

                     BMS College of Engineering

                    </a>
                  </div>
                </td>
                <td>
                  <div className="comparison-item">
                    <span className="remove-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-x"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </span>
                    <a
                      className="comparison-item-thumb"
                      href="shop-single.html"
                    >
                      <img
                        src="https://cache.careers360.mobi/media/colleges/social-media/logo/Indian_Institute_of_Technology_Delhi.jpg"
                        alt="logo_2"
                      />
                    </a>
                    <a
                      className="comparison-item-title"
                      href="shop-single.html"
                    >

                    Sir M. Visvesvaraya Institute of Technology

                    </a>
                  </div>
                </td>
                <td>
                  <div className="comparison-item">
                    <span className="remove-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-x"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </span>
                    <a
                      className="comparison-item-thumb"
                      href="shop-single.html"
                    >
                      <img
                        src="https://cache.careers360.mobi/media/colleges/social-media/logo/Indian_Institute_of_Technology_Delhi.jpg"
                        alt="logo_3"
                      />
                    </a>
                    <a
                      className="comparison-item-title"
                      href="shop-single.html"
                    >

                      Banaras Hindu University

                    </a>
                  </div>
                </td>
              </tr>
            </thead>
            <tbody id="college_ranking" data-filter="target">
              <tr className="bg-secondary">
                <th className="text-uppercase">College Ranking</th>
                <td>
                  <span className="text-dark font-weight-semibold"></span>
                </td>
                <td>
                  <span className="text-dark font-weight-semibold"></span>
                </td>
                <td>
                  <span className="text-dark font-weight-semibold"></span>
                </td>
              </tr>
              <tr>
                <th>Ranked by NIRF</th>

                <td>199</td>
                <td>253</td>
                <td>11</td>

              </tr>
            </tbody>
            <tbody id="college_placement" data-filter="target">
              <tr className="bg-secondary">
                <th className="text-uppercase">
                  College Placement ( Median Salary )
                </th>
                <td>
                  <span className="text-dark font-weight-semibold"></span>
                </td>
                <td>
                  <span className="text-dark font-weight-semibold"></span>
                </td>
                <td>
                  <span className="text-dark font-weight-semibold"></span>
                </td>
              </tr>
              <tr>
                <th>B.E /B.Tech</th>
                <td>INR 8 LPA</td>
                <td>INR 18.2 Lakhs</td>
                <td>INR 5 LPA</td>
              </tr>
            </tbody>
            <tbody id="college_details" data-filter="target">
              <tr className="bg-secondary">
                <th className="text-uppercase">College Details</th>
                <td>
                  <span className="text-dark font-weight-semibold"></span>
                </td>
                <td>
                  <span className="text-dark font-weight-semibold"></span>
                </td>
                <td>
                  <span className="text-dark font-weight-semibold"></span>
                </td>
              </tr>
              <tr>
                <th>Estd Date</th>
                <td>1946</td>
                <td>1916</td>
                <td>1986</td>
              </tr>
              <tr>
                <th>Ownership</th>
                <td>Private</td>
                <td>Public/Government</td>
                <td>Private</td>
              </tr>
              <tr>
                <th>Campus Size</th>
                <td>11 (Acres)</td>
                <td>1300 (Acres)</td>
                <td>133 (Acres)</td>
              </tr>
              <tr>
                <th>Total Students Intake</th>
                <td>1380</td>
                <td>1589</td>
                <td>955</td>
              </tr>
            </tbody>
            <tbody id="college_facilities" data-filter="target">
              <tr className="bg-secondary">
                <th className="text-uppercase">College Facilities</th>
                <td>
                  <span className="text-dark font-weight-semibold"></span>
                </td>
                <td>
                  <span className="text-dark font-weight-semibold"></span>
                </td>
                <td>
                  <span className="text-dark font-weight-semibold"></span>
                </td>
              </tr>
              <tr>
                <th>Boys Hostel</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th>Girls Hostel</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th>Wifi Campus</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th>Gym</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th>Cafeteria</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th>Library</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
              <tr>
                <th>Hospital/Medical</th>
                <td>Yes</td>
                <td>Yes</td>
                <td>Yes</td>
              </tr>
            </tbody>
            <tbody id="courses_offered" data-filter="target">
              <tr className="bg-secondary">
                <th className="text-uppercase">Courses Offered</th>
                <td>
                  <span className="text-dark font-weight-semibold"></span>
                </td>
                <td>
                  <span className="text-dark font-weight-semibold"></span>
                </td>
                <td>
                  <span className="text-dark font-weight-semibold"></span>
                </td>
              </tr>
              <tr>
                <th>B.E /B.Tech</th>
                <td>14 Courses</td>
                <td>11 Courses</td>
                <td>16 Courses</td>
              </tr>
              <tr>
                <th>M.E /M.Tech.</th>
                <td>13 Courses</td>
                <td>38 Courses</td>
                <td>3 Courses</td>
              </tr>
              <tr>
                <th>B.Tech M.Tech</th>
                <td>1 Courses</td>
                <td>13 Courses</td>
                <td>0 Courses</td>
              </tr>
              <tr>
                <th>Dual Degree</th>
                <td>1 Course</td>
                <td>1 Course</td>
                <td>0 Course</td>
              </tr>
              <tr>
                <th>M.S</th>
                <td>14 Courses</td>
                <td>1 Courses</td>
                <td>2 Courses</td>
              </tr>
            </tbody>
            <tbody id="college_reviews" data-filter="target">
              <tr className="bg-secondary">
                <th className="text-uppercase">College Reviews</th>
                <td>
                  <span className="text-dark font-weight-semibold"></span>
                </td>
                <td>
                  <span className="text-dark font-weight-semibold"></span>
                </td>
                <td>
                  <span className="text-dark font-weight-semibold"></span>
                </td>
              </tr>
              <tr>
                <th>Student Reviews</th>
                <td>7.8/10</td>
                <td>7.8/10</td>
                <td>7.8/10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default Compare;
