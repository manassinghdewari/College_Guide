import React from "react";
import Navbar from "../components/Navbar";
import CollegePageBody from "../components/CollegePageBody/CollegePageBody";
import Footer from "../components/Footer/Footer";

const InstitutePage = () => {
  return (
    <>
    {
      function () {
				window.onpageshow = function(event) {
					if (event.persisted) {
						window.location.reload();
					}
				};
			}()
    }
      <Navbar />
      <CollegePageBody/>
      <Footer />
    </>
  );
};

export default InstitutePage;
