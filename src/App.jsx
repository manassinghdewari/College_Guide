import React from "react";
// import MultipleEntry from "../src/Collegeregistration/ResearchPublication";
import Homepage from "./pages/Homepage";
import InstitutePage from "./pages/InstitutePage";
import Search from "./pages/Search";
import { Route, Routes } from "react-router-dom";
// import ResponsiveBreakpointsExample from "./components/Table/Table";
// import PrimarySearchAppBar from "./components/Navbar";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import StudentSignin from "../src/components/authentication/Studentsignin";

import ResponsiveBreakpointsExample from './components/Table/Table'
import Compare from './components/GroupButton/Compare'
import Info from './components/GroupButton/Info';
import Fees from './components/GroupButton/Fees';
import Placement from './components/GroupButton/Placement';
import Review from './components/GroupButton/Review';
import Faculty from './components/GroupButton/Faculty';
import Courses from './components/GroupButton/Courses';
import Facility from './components/GroupButton/Facility';
import Alumni from './components/GroupButton/Alumni';
const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  return (
    <BrowserRouter>
      {/* <Homepage/> */}
      {/* <MultipleEntry/> */}
        <Routes>
          
          <Route path="institutepage" element={<InstitutePage />} />
          <Route path="search" element={<Search />} />
          <Route
            path="login"
            element={currentUser ? <Homepage /> : <StudentSignin />}
          />
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/institutepage" element={<InstitutePage />}>
                <Route index element={<Compare/>}/>
                <Route exact path="compare" element={<Compare/>}/>
                <Route path="info" element={<Info/>}/>
                <Route path="fees" element={<Fees/>}/>
                <Route path="review" element={<Review/>}/>
                <Route path="placement" element={<Placement/>}/>
                <Route path="faculty" element={<Faculty/>}/>
                <Route path="courses" element={<Courses/>}/>
                <Route path="facility" element={<Facility/>}/>
                <Route path="alumni" element={<Alumni/>}/>
              </Route>
        </Routes>
      }
      {/* <StudentSignin /> */}
    </BrowserRouter>
  );
};

export default App;
