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

import { useSelector } from "react-redux";




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
        
          <Route exact path="/institutepage" element={<InstitutePage />}>

            

    

          </Route>
        
        </Routes>
      </ScrollToTop>
      {/* <StudentSignin /> */}
    </BrowserRouter>

    // // <Collegesignup />

  );
};

export default App;