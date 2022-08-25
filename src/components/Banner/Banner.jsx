import React from "react";
import Typed from 'react-typed';
const TOP_SECTION = {
  Typed_effect: ["Education is the kindling of a flame, not the filling of a vessel."],
};
const Banner = () => {
  return (
    <>
    <div className="row ban ">
        <div className="col bantext">
            <div className="Heromain font-extrabold">Matching Students with their perfect College</div>
            
            <div className="Herosub">
              <Typed strings={TOP_SECTION.Typed_effect} typeSpeed={80} loop />
              {/* Education is the kindling of a flame, not the filling of a vessel. */}
              </div>
        </div>
        <div className="col banimg">
            <div className="banimg"><img src={require("../../images/8747-removebg.png")} alt="college"/></div>
        </div>
    </div>
    
    </>
  );
};
export default Banner;
