// import React, { useState } from "react";
// import BasicDetails from "../Collegeregistration/BasicDetails";
// import StreamSelect from "../Collegeregistration/Stream";
// import Accreditation from "../Collegeregistration/Accreditation";
// import FacultyInfo from "../Collegeregistration/FacultyInfo";
// import ResearchPublication from "../Collegeregistration/ResearchPublication";
// import OnlineCourses from "../Collegeregistration/OnlineCourses";
// import Placement from "../Collegeregistration/Placement";
// import Alumni from "../Collegeregistration/Alumni";

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useSelector } from "react-redux";

// const ProctectedRoute = ({ children }) => {
//   const { currentUser } = useSelector((state) => state.user);
//   console.log(currentUser.details.role);

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
