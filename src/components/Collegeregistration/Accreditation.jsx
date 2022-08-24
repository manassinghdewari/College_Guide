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
import "./Accreditation.css";
import { useSelector } from "react-redux";
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

function Accreditation() {
  const classes = useStyles();
  const { collegeId } = useSelector((state) => state.collegeId);
  console.log(collegeId);

  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), firstName: "", lastName: "" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
  };

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
    setInputFields([
      ...inputFields,
      { id: uuidv4(), firstName: "", lastName: "" },
    ]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputFields];
    values.splice(
      values.findIndex((value) => value.id === id),
      1
    );
    setInputFields(values);
  };

  return (
    <Container className="box">
      <Typography variant="h4">Accreditation Details</Typography>
      <form className={classes.root} onSubmit={handleSubmit}>
        {inputFields.map((inputField) => (
          <span key={inputField.id}>
            <div className="">
              <div className="addremove justify-center items-center text-center">
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
              <div>
                <TextField
                  name="department"
                  label="Providing authority"
                  variant="filled"
                  value={inputField.topic}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
                <TextField
                  name="qualification"
                  label="Grade"
                  variant="filled"
                  value={inputField.link}
                  onChange={(event) => handleChangeInput(inputField.id, event)}
                />
              </div>
            </div>
          </span>
        ))}
      </form>
    </Container>
  );
}

export default Accreditation;
