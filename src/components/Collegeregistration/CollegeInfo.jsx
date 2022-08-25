import React, { useState } from "react";
import RichTextEditor from "./RichTextEditor";

const CollegeInfo = () => {
    const [value, setValue] = useState("");
  const getValue = (value) => {
    setValue(value);
  };
 
  return (
    
    <div className="mt-5">
      <div style={{ textAlign: "center" }}>
      </div>
      <RichTextEditor initialValue="" getValue={getValue} />
      <br />
      <div> {value} </div>
    </div>
  
   

);
}
export default CollegeInfo;