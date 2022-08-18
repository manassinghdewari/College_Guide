import React from 'react';
import Homepage from './pages/Homepage';
import InstitutePage from './pages/InstitutePag
import { Route,Routes } from "react-router-dom";
import ResponsiveBreakpointsExample from './components/Table/Table'
const App =()=>{
  return(
    <>
      {/* <Homepage/> */}
      {/* <InstituePage /> */}
      {
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="institutepage" element={<InstitutePage />}/>
          <Route path="search" element={<Search />}/>
        </Routes>
      }
    </>
  )
}

export default App;