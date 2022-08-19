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
const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);

  return (
    <BrowserRouter>
      {/* <Homepage/> */}
      {/* <MultipleEntry/> */}
      {/* <InstituePage /> */}
      {
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="institutepage" element={<InstitutePage />} />
          <Route path="search" element={<Search />} />
          <Route
            path="login"
            element={currentUser ? <Homepage /> : <StudentSignin />}
          />
        </Routes>
      }
      {/* <StudentSignin /> */}
    </BrowserRouter>
  );
};

export default App;
