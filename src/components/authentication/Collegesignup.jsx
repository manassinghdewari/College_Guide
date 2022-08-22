
import React, {useState} from 'react';
import BasicDetails from '../Collegeregistration/BasicDetails';
import StreamSelect from '../Collegeregistration/Stream';
import Accreditation from '../Collegeregistration/Accreditation';
import FacultyInfo from '../Collegeregistration/FacultyInfo';
import ResearchPublication from '../Collegeregistration/ResearchPublication';
import OnlineCourses from '../Collegeregistration/OnlineCourses';
import Placement from '../Collegeregistration/Placement';
import Alumni from '../Collegeregistration/Alumni';
import CollegeInfo from '../Collegeregistration/CollegeInfo';
import { Button } from '@material-ui/core';
import CollegeImages from '../Collegeregistration/CollegeImages';

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useSelector } from "react-redux";

// const ProctectedRoute = ({ children }) => {
//   const { currentUser } = useSelector((state) => state.user);
//   console.log(currentUser.details.role);


const FormTitles = ["Basic Details" , "Branch Details", "Accreditation Details", "Faculty Details" , "Research Publications", "Online Courses", "Placement Details", "Alumni Details","College Info","Upload College Images"];

const pageDisplay = () => { 
  if (page==0) {
    return <BasicDetails/>;
  }
  else if (page==1){
  return <StreamSelect/>;
  }
  
  else if (page==2){
    return <Accreditation/>;
  }
  else if (page==3){
    return <FacultyInfo/>;
  }
  else if (page==4){
    return <ResearchPublication/>;
  }
  else if (page==5){
    return <OnlineCourses/>;
  }
  else if (page==6){
    return <Placement/>;
  }
  else if (page==7){
    return <Alumni/>;
  }
  else if (page==8){
    return <CollegeInfo/>;
  }
  else if(page==9){
    return <CollegeImages/>;
  }
 
 }
return (

//   if (
//     currentUser.details.role === "admin" ||
//     currentUser.details.role === "college"
//   ) {
//     return children || null;
//   }
// };

// const Collegesignup = () => {
//   return (


//       <Routes>
//         {/* <Route
//           exact
//           path="/collegeRegistration"
//           element={
//             <ProctectedRoute>
//               <BasicDetails />
//             </ProctectedRoute>
//           }
//         /> */}
//         <Route
//           exact
//           path="/collegeRegistration/stream"
//           element={
//             <ProctectedRoute>
//               <StreamSelect />
//             </ProctectedRoute>
//           }
//         />
//         <Route
//           exact
//           path="/collegeRegistration/accreditation"
//           element={
//             <ProctectedRoute>
//               <Accreditation />
//             </ProctectedRoute>
//           }
//         />
//         <Route
//           exact
//           path="/collegeRegistration/faculty"
//           element={
//             <ProctectedRoute>
//               <FacultyInfo />
//             </ProctectedRoute>
//           }
//         />
//         <Route
//           exact
//           path="/collegeRegistration/research"
//           element={
//             <ProctectedRoute>
//               <ResearchPublication />
//             </ProctectedRoute>
//           }
//         />
//         <Route
//           exact
//           path="/collegeRegistration/onlineCourse"
//           element={
//             <ProctectedRoute>
//               <OnlineCourses />
//             </ProctectedRoute>
//           }
//         />
//         <Route
//           exact
//           path="/collegeRegistration/placement"
//           element={
//             <ProctectedRoute>
//               <Placement />
//             </ProctectedRoute>
//           }
//         />
//         <Route exact path="/collegeRegistration/alumni" element={<Alumni />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default Collegesignup;
