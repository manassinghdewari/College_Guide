import React, { useEffect } from "react";
import Homepage from "./pages/Homepage";
import InstitutePage from "./pages/InstitutePage";
import Search from "./pages/Search";
import {
  Route,
  Routes,
  Navigate,
  BrowserRouter,
  useLocation,
} from "react-router-dom";
// import MultipleEntry from "../src/Collegeregistration/ResearchPublication";
// import ResponsiveBreakpointsExample from "./components/Table/Table";
// import PrimarySearchAppBar from "./components/Navbar";
import { useSelector } from "react-redux";
import StudentSignin from "../src/components/authentication/Studentsignin";

import Compare from "./components/GroupButton/Compare";
import Info from "./components/GroupButton/Info";
import Fees from "./components/GroupButton/Fees";
import Placement from "./components/GroupButton/Placement";
import Review from "./components/GroupButton/Review";
import Faculty from "./components/GroupButton/Faculty";
import Courses from "./components/GroupButton/Courses";
import Facility from "./components/GroupButton/Facility";
import Alumni from "./components/GroupButton/Alumni";

import Studentsignup from "./components/authentication/Studentsignup";
import BasicDetails from "./components/Collegeregistration/BasicDetails";
import Stream from "./components/Collegeregistration/Stream";
import Accreditation from "./components/Collegeregistration/Accreditation";
import FacultyInfo from "./components/Collegeregistration/FacultyInfo";
import ResearchPublication from "./components/Collegeregistration/ResearchPublication";
import OnlineCourses from "./components/Collegeregistration/OnlineCourses";
import Placements from "./components/Collegeregistration/Placement";
import AlumniData from "./components/Collegeregistration/Alumni";
import Collegesignup from "./components/authentication/Collegesignup";
// import Protected from './components/GoogleAuth/Protected';

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

const ProctectedRoute = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser.details.role);

  if (currentUser) {
    return children || null;
  }
};

const App = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      {/* <Homepage/> */}
      {/* <MultipleEntry/> */}
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Homepage />} />

          <Route path="search" element={<Search />} />
          <Route
            path="login"
            element={currentUser ? <Homepage /> : <StudentSignin />}
          />
          <Route exact path="/institutepage/:id" element={<InstitutePage />}>
            <Route index element={<Compare />} />
            <Route exact path="compare" element={<Compare />} />
            <Route exact path="info" element={<Info />} />
            <Route exact path="fees" element={<Fees />} />
            <Route exact path="review" element={<Review />} />
            <Route exact path="placement" element={<Placement />} />
            <Route exact path="faculty" element={<Faculty />} />
            <Route exact path="courses" element={<Courses />} />
            <Route exact path="facility" element={<Facility />} />
            <Route exact path="alumni" element={<Alumni />} />
          </Route>
          <Route
            exact
            path="/collegeRegistration"
            element={
              <ProctectedRoute>
                <BasicDetails />
              </ProctectedRoute>
            }
          />
          <Route
            exact
            path="/collegeRegistration/stream"
            element={
              <ProctectedRoute>
                <Stream />
              </ProctectedRoute>
            }
          />
          <Route
            exact
            path="/collegeRegistration/accreditation"
            element={
              <ProctectedRoute>
                <Accreditation />
              </ProctectedRoute>
            }
          />
          <Route
            exact
            path="/collegeRegistration/faculty"
            element={
              <ProctectedRoute>
                <FacultyInfo />
              </ProctectedRoute>
            }
          />
          <Route
            exact
            path="/collegeRegistration/research"
            element={
              <ProctectedRoute>
                <ResearchPublication />
              </ProctectedRoute>
            }
          />
          <Route
            exact
            path="/collegeRegistration/onlineCourse"
            element={
              <ProctectedRoute>
                <OnlineCourses />
              </ProctectedRoute>
            }
          />
          <Route
            exact
            path="/collegeRegistration/placement"
            element={
              <ProctectedRoute>
                <Placements />
              </ProctectedRoute>
            }
          />
          <Route
            exact
            path="/collegeRegistration/alumni"
            element={<AlumniData />}
          />
        </Routes>
      </ScrollToTop>
      {/* <StudentSignin /> */}
    </BrowserRouter>

    // // <Collegesignup />
  );
};

export default App;
