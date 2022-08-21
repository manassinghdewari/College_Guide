import { useState } from "react";
import { RMIUploader } from "react-multiple-image-uploader";
import Typography from '@mui/material/Typography';
import './MultipleImage.css';
const dataSources = [];

export default function MultipleImage() {
  const [visible, setVisible] = useState(false);
 
  const hideModal = () => {
    setVisible(false);
  };
  const onUpload = (data) => {
    console.log(data);
  };
  const onSelect = (data) => {
    console.log("Select files", data);
  };
  const onRemove = (id) => {
    console.log("Remove image id", id);
  };

  return (
    <div className="App">
      <RMIUploader
        isOpen={visible}
        hideModal={hideModal}
        onSelect={onSelect}
        onUpload={onUpload}
        onRemove={onRemove}
        dataSources={dataSources}
      />
    </div>
  );
}
