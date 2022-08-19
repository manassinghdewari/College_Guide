import React, { Children, useEffect } from 'react';
import Homepage from './pages/Homepage';
import InstitutePage from './pages/InstitutePage'
import Search from './pages/Search'
import { Route,Routes,Navigate} from "react-router-dom";
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
import Studentsignin from './components/authentication/Studentsignin'
import Studentsignup from './components/authentication/Studentsignup'
import Protected from './components/GoogleAuth/Protected';

const App =()=>{
  return(
    <>
      {/* <Homepage/> */}
      {/* <InstituePage /> */}
      {

        <Routes>

              <Route exact path="/" element={<Protected><Homepage /></Protected>} />
              <Route exact path="/institutepage" element={<InstitutePage />}>
                <Route index element={<Compare/>}/>
                <Route exact path="compare" element={<Compare/>}/>
                <Route exact path="info" element={<Info/>}/>
                <Route exact path="fees" element={<Fees/>}/>
                <Route exact path="review" element={<Review/>}/>
                <Route exact path="placement" element={<Placement/>}/>
                <Route exact path="faculty" element={<Faculty/>}/>
                <Route exact path="courses" element={<Courses/>}/>
                <Route exact path="facility" element={<Facility/>}/>
                <Route exact path="alumni" element={<Alumni/>}/>
              </Route>
              <Route exact path="/search" element={<Search />}/>
              <Route exact path="/signin" element={<Studentsignin/>}/>
              <Route exact path="/signup" element={<Studentsignup/>} />

        </Routes>
      }

    </>
  )
}

export default App;