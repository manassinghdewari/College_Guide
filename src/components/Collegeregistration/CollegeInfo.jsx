import React, { useState } from "react";
import RichTextEditor from "./RichTextEditor";

const CollegeInfo = () => {
    const [value, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };
 
  return (
    <div className="row">
    <div className="col-md-6" style={{ margin: "auto", marginTop: "50px" }}>
      <div style={{ textAlign: "center" }}>
      </div>
      <RichTextEditor initialValue="" getValue={getValue} />
      <br />
      <div> {value} </div>
    </div>
   
  </div>
);
}
export default CollegeInfo;