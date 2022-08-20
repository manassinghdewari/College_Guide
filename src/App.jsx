import React, { useEffect } from "react";
import Homepage from "./pages/Homepage";
import InstitutePage from "./pages/InstitutePage";
import Search from "./pages/Search";

import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
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
// import Protected from './components/GoogleAuth/Protected';

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
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
          <Route
            exact
            path="/institutepage/find/:id"
            element={<InstitutePage />}
          >
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
        </Routes>
      </ScrollToTop>
      {/* <StudentSignin /> */}
    </BrowserRouter>
  );
};

export default App;
