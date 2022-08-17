import React from "react";
const Banner = () => {
  return (
    <>
    <div className="row ban ">
        <div className="col bantext">
            <div className="Heromain font-extrabold">Matching Students with their perfect College</div>
            <div className="Herosub">Education is the kindling of a flame, not the filling of a vessel.</div>
        </div>
        <div className="col banimg">
            <div className="banimg"><img src={require("../../images/8747-removebg.png")} alt="college"/></div>
        </div>
    </div>
    
    </>
  );
};
export default Banner;
