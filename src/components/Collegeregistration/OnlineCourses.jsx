import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { v4 as uuidv4 } from "uuid";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "./OnlineCourses.css";
import { Box } from "@material-ui/core";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function OnlineCourses() {
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([{ id: uuidv4() }]);
  const navigate = useNavigate();
  const { collegeId } = useSelector((state) => state.collegeId);

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map((i) => {
      if (id === i.id) {
        i[event.target.name] = event.target.value;
      }
      return i;
    });

    setInputFields(newInputFields);
  };

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4() }]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  const handleSubmit = async () => {
    inputFields.map(async (onlineCourseInput) => {
      try {
        const { data } = await axios.post(
          `/onlineCourse/${collegeId}`,
          onlineCourseInput
        );
        navigate("/collegeRegistration/stream");
      } catch (error) {}
    });
  };

  return (
    <Container className="box">
      <Typography variant="h4">Online Course Details</Typography>
      <form className={classes.root}>
        {inputFields.map((inputField) => (
          <span key={inputField.id}>
            <div>
              <div className="addremove justify-center items-start text-center">
                <IconButton
                  disabled={inputFields.length === 1}
                  onClick={() => handleRemoveFields(inputField.id)}
                >
                  <RemoveIcon />
                </IconButton>
                <IconButton onClick={handleAddFields}>
                  <AddIcon />
                </IconButton>
              </div>
              <TextField
                name="title"
                label="Title"
                variant="filled"
                value={inputField.title}
                onChange={(event) => handleChangeInput(inputField.id, event)}
                fullWidth
              />
            </div>

            <div className="addremove_container">
              <div>
                <TextField
                  name="courseName"
                  label="Course Name"
                  variant="filled"
                  value={inputField.courseName}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
                <TextField
                  name="courseLink"
                  label="Course Link"
                  variant="filled"
                  value={inputField.courseLink}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </div>
            </div>
          </span>
        ))}
      </form>
      <Button onClick={handleSubmit}>Next</Button>
    </Container>
  );
}

export default OnlineCourses;
