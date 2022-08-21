import { useState } from "react";
import { RMIUploader } from "react-multiple-image-uploader";
import Typography from '@mui/material/Typography';

const dataSources = [];

export default function Testing() {
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
        <Typography variant="h5">Upload College Placement graphs</Typography>
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
