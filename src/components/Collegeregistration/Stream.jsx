import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import Container from "@material-ui/core/Container";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { ClassNames } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";
import CourseSelect from "./Course";
import BranchDetails from "./BranchDetails";
import Menu from "@mui/material/Menu";
import Select from 'react-select'
function StreamSelect() {
  const [Stream, setStream] = React.useState([
    { id: uuidv4(), StreamName: "" },
  ]);
  const streams = [
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Medical', label: 'Medical' },
    { value: 'Arts', label: 'Arts' }
  ]
  const handleChangeInput = (id, event) => {
    const newStream = Stream.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setStream(newStream);
  };
  const handleAddFields = () => {
    setStream([...Stream, { id: uuidv4(), StreamName: "" }]);
  };

  const handleRemoveFields = (id) => {
    const values = [...Stream];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setStream(values);
  };

  return (
    <div className="box">
      <Container alignItems="center">
        <h1>Course Details</h1>
        <form className={ClassNames.root}>
          {Stream.map((Stream) => (
            <span key={Stream.id}>
              <div className="">
                <div className="justify-center items-center text-center addremove">
                  <Typography variant="h6" display="block" gutterBottom>
                    Add/Remove Stream
                  </Typography>
                  <IconButton
                    disabled={Stream.length === 1}
                    onClick={() => handleRemoveFields(Stream.id)}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <IconButton onClick={handleAddFields}>
                    <AddIcon />
                  </IconButton>
                </div>

                <Box >
                  <FormControl>
                  
                    <Select
                    className="w-48"
                    placeholder="Select Stream"
                      id="demo-simple-select"
                      name="Stream"
                      options={streams}
                      value={Stream.name}
                      label="Stream"
                    />
                      

                    <CourseSelect />
                  </FormControl>
                </Box>
              </div>
            </span>
          ))}
        </form>
      </Container>
    </div>
  );
}

export default StreamSelect;
