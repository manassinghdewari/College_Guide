import { Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../api/UseFetch";
// import Compare from "../GroupButton/Compare";

let collegeIdData=[]


const CollegeCard = ({ collegeInfo }) => {
  
  const id = collegeInfo?._id;
  console.log("hello",collegeIdData)
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
                  <button className="btn2 btn btn-primary rounded-3" onClick={()=>{
                   collegeIdData.push(`${collegeInfo?._id}`)
                  // setCollegeId(`${collegeInfo?._id}`)
                    console.log(collegeIdData)
                    // {console.log(collegeIdData)}
                  }}>
                  Brochure
                  </button>
                  
                {/* </Link> */}
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
              <div className="col">{collegeInfo?.city},IN</div>
              <div className="col col-4">
                <Link to="/signup" className="btn3 btn btn-primary rounded-3" >
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
              <div className="col">{collegeInfo?.median}</div>
            </div>
          </div>
        </div>
        {/* </Link> */}
    </div>
     {/* <Compare collegeIdData={collegeIdData}/> */}
    </>
  );
};
// const Dfg=()=>{
//   useEffect(async()=>{
//     try{
//       const { data } = await axios.get(`${BASE_URL}/college/${collegeIdData[0]}`);
//       console.log("this is for compare page",data)
//     } catch(error){
//       console.log(error)
//     }
//   },[])
// }
// const Compare = () => {
//   // console.log("this is from compare",collegeIdData);
//     useEffect(async()=>{
//       try{
//         const { data } = await axios.get(`${BASE_URL}/college/${collegeIdData[0]}`);
//         console.log("this is for compare page",data)
//       } catch(error){
//         console.log(error)
//       }
//     },[])  

//   return (
//     <>
//       <div className="container-table">
//       <div className="container pb-5 mb-2 ">
//         <div className="comparison-table">
//           <table className="table table-bordered">
//             <thead className="bg-secondary">
//               <tr>
//                 <td className="align-middle"></td>
//                 <td>
//                   <div className="comparison-item">
//                     <span className="remove-item">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="feather feather-x"
//                       >
//                         <line x1="18" y1="6" x2="6" y2="18"></line>
//                         <line x1="6" y1="6" x2="18" y2="18"></line>
//                       </svg>
//                     </span>
//                     <a
//                       className="comparison-item-thumb"
//                       href="shop-single.html"
//                     >
//                       <img
//                         src="https://cache.careers360.mobi/media/colleges/social-media/logo/Indian_Institute_of_Technology_Delhi.jpg"
//                         alt="logo_1"
//                       />
//                     </a>
//                     <a
//                       className="comparison-item-title"
//                       href="shop-single.html"
//                     >
//                       Indian Institute of Technology Delhi
//                     </a>
//                   </div>
//                 </td>
//                 <td>
//                   <div className="comparison-item">
//                     <span className="remove-item">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="feather feather-x"
//                       >
//                         <line x1="18" y1="6" x2="6" y2="18"></line>
//                         <line x1="6" y1="6" x2="18" y2="18"></line>
//                       </svg>
//                     </span>
//                     <a
//                       className="comparison-item-thumb"
//                       href="shop-single.html"
//                     >
//                       <img
//                         src="https://cache.careers360.mobi/media/colleges/social-media/logo/Indian_Institute_of_Technology_Delhi.jpg"
//                         alt="logo_2"
//                       />
//                     </a>
//                     <a
//                       className="comparison-item-title"
//                       href="shop-single.html"
//                     >
//                       Indian Institute of Technology Delhi
//                     </a>
//                   </div>
//                 </td>
//                 <td>
//                   <div className="comparison-item">
//                     <span className="remove-item">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         className="feather feather-x"
//                       >
//                         <line x1="18" y1="6" x2="6" y2="18"></line>
//                         <line x1="6" y1="6" x2="18" y2="18"></line>
//                       </svg>
//                     </span>
//                     <a
//                       className="comparison-item-thumb"
//                       href="shop-single.html"
//                     >
//                       <img
//                         src="https://cache.careers360.mobi/media/colleges/social-media/logo/Indian_Institute_of_Technology_Delhi.jpg"
//                         alt="logo_3"
//                       />
//                     </a>
//                     <a
//                       className="comparison-item-title"
//                       href="shop-single.html"
//                     >
//                       Indian Institute of Technology Delhi
//                     </a>
//                   </div>
//                 </td>
//               </tr>
//             </thead>
//             <tbody id="college_ranking" data-filter="target">
//               <tr className="bg-secondary">
//                 <th className="text-uppercase">College Ranking</th>
//                 <td>
//                   <span className="text-dark font-weight-semibold"></span>
//                 </td>
//                 <td>
//                   <span className="text-dark font-weight-semibold"></span>
//                 </td>
//                 <td>
//                   <span className="text-dark font-weight-semibold"></span>
//                 </td>
//               </tr>
//               <tr>
//                 <th>Ranked by NIRF</th>
//                 <td>1</td>
//                 <td>1</td>
//                 <td>1</td>
//               </tr>
//             </tbody>
//             <tbody id="college_placement" data-filter="target">
//               <tr className="bg-secondary">
//                 <th className="text-uppercase">
//                   College Placement ( Median Salary )
//                 </th>
//                 <td>
//                   <span className="text-dark font-weight-semibold"></span>
//                 </td>
//                 <td>
//                   <span className="text-dark font-weight-semibold"></span>
//                 </td>
//                 <td>
//                   <span className="text-dark font-weight-semibold"></span>
//                 </td>
//               </tr>
//               <tr>
//                 <th>B.E /B.Tech</th>
//                 <td> 17.60 Lakhs</td>
//                 <td> 17.60 Lakhs</td>
//                 <td> 17.60 Lakhs</td>
//               </tr>
//               <tr>
//                 <th>B.Tech M.Tech</th>
//                 <td> 17.60 Lakhs</td>
//                 <td> 17.60 Lakhs</td>
//                 <td> 17.60 Lakhs</td>
//               </tr>
//               <tr>
//                 <th>M.E /M.Tech.</th>
//                 <td> 17.60 Lakhs</td>
//                 <td> 17.60 Lakhs</td>
//                 <td> 17.60 Lakhs</td>
//               </tr>
//               <tr>
//                 <th>MBA</th>
//                 <td> 17.60 Lakhs</td>
//                 <td> 17.60 Lakhs</td>
//                 <td> 17.60 Lakhs</td>
//               </tr>
//             </tbody>
//             <tbody id="college_details" data-filter="target">
//               <tr className="bg-secondary">
//                 <th className="text-uppercase">College Details</th>
//                 <td>
//                   <span className="text-dark font-weight-semibold"></span>
//                 </td>
//                 <td>
//                   <span className="text-dark font-weight-semibold"></span>
//                 </td>
//                 <td>
//                   <span className="text-dark font-weight-semibold"></span>
//                 </td>
//               </tr>
//               <tr>
//                 <th>Estd Date</th>
//                 <td>1961</td>
//                 <td>1961</td>
//                 <td>1961</td>
//               </tr>
//               <tr>
//                 <th>Ownership</th>
//                 <td>Public/Government</td>
//                 <td>Public/Government</td>
//                 <td>Public/Government</td>
//               </tr>
//               <tr>
//                 <th>Campus Size</th>
//                 <td>320 (Acres)</td>
//                 <td>320 (Acres)</td>
//                 <td>320 (Acres)</td>
//               </tr>
//               <tr>
//                 <th>Total Students Intake</th>
//                 <td>1264</td>
//                 <td>1264</td>
//                 <td>1264</td>
//               </tr>
//               <tr>
//                 <th>Total Enrollment</th>
//                 <td>9132</td>
//                 <td>9132</td>
//                 <td>9132</td>
//               </tr>
//               <tr>
//                 <th>Total Faculty</th>
//                 <td>511</td>
//                 <td>511</td>
//                 <td>511</td>
//               </tr>
//             </tbody>
//             <tbody id="college_facilities" data-filter="target">
//               <tr className="bg-secondary">
//                 <th className="text-uppercase">College Facilities</th>
//                 <td>
//                   <span className="text-dark font-weight-semibold"></span>
//                 </td>
//                 <td>
//                   <span className="text-dark font-weight-semibold"></span>
//                 </td>
//                 <td>
//                   <span className="text-dark font-weight-semibold"></span>
//                 </td>
//               </tr>
//               <tr>
//                 <th>Boys Hostel</th>
//                 <td>Yes</td>
//                 <td>Yes</td>
//                 <td>Yes</td>
//               </tr>
//               <tr>
//                 <th>Girls Hostel</th>
//                 <td>Yes</td>
//                 <td>Yes</td>
//                 <td>Yes</td>
//               </tr>
//               <tr>
//                 <th>Wifi Campus</th>
//                 <td>Yes</td>
//                 <td>Yes</td>
//                 <td>Yes</td>
//               </tr>
//               <tr>
//                 <th>Gym</th>
//                 <td>Yes</td>
//                 <td>Yes</td>
//                 <td>Yes</td>
//               </tr>
//               <tr>
//                 <th>Cafeteria</th>
//                 <td>Yes</td>
//                 <td>Yes</td>
//                 <td>Yes</td>
//               </tr>
//               <tr>
//                 <th>Library</th>
//                 <td>Yes</td>
//                 <td>Yes</td>
//                 <td>Yes</td>
//               </tr>
//               <tr>
//                 <th>Hospital/Medical</th>
//                 <td>Yes</td>
//                 <td>Yes</td>
//                 <td>Yes</td>
//               </tr>
//             </tbody>
//             <tbody id="courses_offered" data-filter="target">
//               <tr className="bg-secondary">
//                 <th className="text-uppercase">Courses Offered</th>
//                 <td>
//                   <span className="text-dark font-weight-semibold"></span>
//                 </td>
//                 <td>
//                   <span className="text-dark font-weight-semibold"></span>
//                 </td>
//                 <td>
//                   <span className="text-dark font-weight-semibold"></span>
//                 </td>
//               </tr>
//               <tr>
//                 <th>B.E /B.Tech</th>
//                 <td>15 Courses</td>
//                 <td>15 Courses</td>
//                 <td>15 Courses</td>
//               </tr>
//               <tr>
//                 <th>M.E /M.Tech.</th>
//                 <td>48 Courses</td>
//                 <td>48 Courses</td>
//                 <td>48 Courses</td>
//               </tr>
//               <tr>
//                 <th>B.Tech M.Tech</th>
//                 <td>4 Courses</td>
//                 <td>4 Courses</td>
//                 <td>4 Courses</td>
//               </tr>
//               <tr>
//                 <th>Dual Degree</th>
//                 <td>1 Course</td>
//                 <td>1 Course</td>
//                 <td>1 Course</td>
//               </tr>
//               <tr>
//                 <th>M.S</th>
//                 <td>10 Courses</td>
//                 <td>10 Courses</td>
//                 <td>10 Courses</td>
//               </tr>
//             </tbody>
//             <tbody id="college_reviews" data-filter="target">
//               <tr className="bg-secondary">
//                 <th className="text-uppercase">College Reviews</th>
//                 <td>
//                   <span className="text-dark font-weight-semibold"></span>
//                 </td>
//                 <td>
//                   <span className="text-dark font-weight-semibold"></span>
//                 </td>
//                 <td>
//                   <span className="text-dark font-weight-semibold"></span>
//                 </td>
//               </tr>
//               <tr>
//                 <th>Student Reviews</th>
//                 <td>8/10</td>
//                 <td>8/10</td>
//                 <td>8/10</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export  {Compare};
export default CollegeCard;
