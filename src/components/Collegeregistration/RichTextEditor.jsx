
import React, { useRef } from "react";
import JoditEditor from "jodit-react";

  const RichTextEditor = ({ setValue}) => {
    const editor = useRef(null); 

  return (
  <>
    <JoditEditor
      ref={editor}
      onChange={(Content) => setValue(Content)}
    />;
 </>
  )
};
  export default RichTextEditor;