import React from "react";
const Banner = () => {
  return (
    <>
    <div class="row ban">
        <div class="col">
            <div className="Heromain font-extrabold">Matching Students with their perfect College</div>
            <div className="Herosub">Education is the kindling of a flame, not the filling of a vessel.</div>
        </div>
        <div class="col">
            <img src={require("../../images/8747-removebg.png")} alt="college" height="631" />
        </div>
    </div>
    </>
  );
};
export default Banner;
