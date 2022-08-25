import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Typography from "@mui/material/Typography";
import "./Placement.css";
import MultipleImage from "./MultipleImage";
import Grid from "@material-ui/core/Grid";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { Button } from "@material-ui/core";

function Placement() {
  const navigate = useNavigate();
  const [placement, setPlacement] = React.useState({});
  // const navigate = useNavigate();
  const { collegeId } = useSelector((state) => state.collegeId);

  const handleChangePlacement = (e) => {
    setPlacement((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    //for address
    try {
      const res = await axios.post(`/placement/${collegeId}`, placement);

      navigate("/collegeRegistration/onlineCourse");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" className="text-center py-4">
        College Placement Details
      </Typography>
      <form>
        <div className="justify-center text-center items-center">
          <TextField
            className="mx-3"
            name="highest"
            label="Maximum salary"
            variant="filled"
            onChange={handleChangePlacement}
          />

          <TextField
            className="mx-3"
            name="median"
            label="Median Salary"
            variant="filled"
            onChange={handleChangePlacement}
          />

          <TextField
            className="mx-3"
            name="average"
            label="Average Salary"
            variant="filled"
            onChange={handleChangePlacement}
          />
        </div>
        <MultipleImage />
      </form>
      <Button onClick={handleSubmit}>Next</Button>
    </Container>
  );
}

export default Placement;
